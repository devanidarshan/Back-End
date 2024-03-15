const Cart = require('../Model/cart.model');

// ADD CART
exports.addToCart = async (req, res) => {
      try {
        let cart =  await Cart.findOne({
            user: req.user._id,
            cartItem: req.body.cartItem,
            isDelete:false
        });
        if (cart) {
            return res.json ({message:'Cart Already Exist...'});
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        cart.save();
        res.json ({cart , message:'Cart added.'});
      } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
      }
};

// GET ALL CARTS
exports.getAllCart = async (req, res) => {
    try {
        let carts = await Cart.find({user: req.user._id, isDelete:false});
        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};

// GET SPECIFIC CART
exports.getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id:req.query.cartId, isDelete:false});
        if (!cart) {
        return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};

// UPDATE CART
exports.updateCart = async (req, res) => {
    try {
        let cartId = req.query.cartId;
        let cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).json({message:"Cart not found"});
        }
        cart = await Cart.findOneAndUpdate(cart._id, {$set: {...req.body}}, {new:true});
        res.status(200).json({cart, message: 'Cart Updated...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});   
    }
};

// DELETE CART
exports.deleteCart = async (req, res) => {
    try {
        let cartId = req.query.cartId;
        let cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).json({message:"Cart not found"});
        }
        cart = await Cart.findOneAndUpdate({_id: cart._id},{isDelete: true},{new: true});
        res.status(200).json({cart, message: 'Cart Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};
