const Order = require('../Model/order.model');
const Cart = require('../Model/cart.model');

// NEW ORDER
exports.newOrder = async (req, res) => {
    try {
        let cartItems = await Cart.find({user: req.user._id, isDelete: false}).populate('cartItem');
        // res.send(cartItems);
        console.log(cartItems);
        let orderItems = await cartItems.map(item => ({
            product: item.cartItem._id,
            quantity: item.quantity,
            price:item.cartItem.productPrice
        }));
        // console.log(orderItems);
        let totalPrice = orderItems.reduce((total,item) => total + (item.price * item.quantity),0);
        // console.log(totalPrice);
        let newOrder = await Order.create({
            user: req.user._id,
            items: orderItems,
            totalAmount: totalPrice
        });
        newOrder.save();
        await Cart.updateMany({user: req.user._id}, {$set:{isDelete: true}});
        res.status(201).json({ order: newOrder, message:'Order Place Success' });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};

// GET ALL ORDERS
exports.getAllOrders = async (req, res) => {
    try {
        let orders = await Order.find({user:req.user._id, isDelete:false});
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
} 

// GET SPECIFIC ORDER
exports.getOrder = async (req, res) => {
    try {
        let order = await Order.findOne({_id:req.query.orderId, isDelete:false});
        if (!order) {
        return res.status(404).json({message:"Order not found"});
        }
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
    try {
        let orderId = req.query.orderId;
        let order = await Order.findById({_id:req.query.orderId, isDelete:false});
        if (!order) {
            return res.status(404).json({message:"Order not found"});
        }
        order = await Order.findByIdAndUpdate({_id:orderId},{isDelete: true},{new: true});
        res.status(200).json({order, message: 'Order Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};