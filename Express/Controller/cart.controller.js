const Cart = require('..//Model/cart.model');

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

exports.getAllCart = async (req, res) => {
    try {
        let carts = await Cart.find({user: req.user._id, isDelete:false});
        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
};