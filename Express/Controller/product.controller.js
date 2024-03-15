const Product = require('../Model/product.model');

// ADD PRODUCT
exports.addProduct = async(req , res) => {
     try {
        const {title, description , price , category} = req.body;
        console.log(req.body);

        let newProduct = await Product.create({
            title,
            description,
            price,
            category
        });
        newProduct.save();
        res.status(201).json({Product: newProduct , Message: 'product is Added'})

     } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error'});
     }
};

// GET ALL PRODUCTS
exports.getAllProduct = async(req , res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error'});
    }
};

// GET SPECIFIC PRODUCT
exports.getProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({Message: 'Product Not Found'})
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error'});
    }
};

// UPDATE PRODUCT
exports.updateProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({Message: 'Product Not Found'})
        }
        product = await Product.findByIdAndUpdate(product._id , {$set:{...req.body}} , {new: true});
        res.status(200).json({product , Message: 'Product Updated..'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error'});
    }
};

// DELETE PRODUCT
exports.deleteProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({Message: 'Product Not Found'})
        }
        product = await Product.findByIdAndDelete(product._id );
        res.status(200).json({product , Message: 'Product deleted..'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error'});
    }
}