const  Product = require('../Model/product.model');

// Add User
exports.addProduct = async (req, res) => {
     try {
        const {title,productDescription,productPrice,productCategory,} = req.body;
      //   console.log(req.body);
        let newProduct = await Product.create({
           title,
           productDescription,
           productPrice,
           productCategory
        });
        newProduct.save();
        res.status(201).json({Product: newProduct , message:'New Product Added'});
     } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
     }
}

// Get All Products
exports.getAllProducts = async (req, res) => {
   try {
      let products = await Product.find({isDelete: false});
      res.status(200).json(products);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
};

// Get Specific Product
exports.getProduct = async (req, res) => {
   try {
      let productId = req.query.productId;
      // let product = await Product.findById(productId);
      let product = await Product.findOne({_id: productId, isDelete : false});
      if (!product) {
         return res.status(404).json({message : 'Product not found'});
      }
      res.status(200).json(product);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
}

// Update Product
exports.updateProduct = async (req, res) => {
   try {
     let productId = await req.query.productId;
     let product = await Product.findById(productId);
     if (!product) {
       return res.status(404).json({message : 'Product not found'});
      }
      // product = await Product.findByIdAndUpdate(product._id, {set: {...req.body}}, {new:true});
      product = await Product.findOneAndUpdate({_id:product.id}, {$set: {...req.body}}, {new:true});
     res.status(200).json({product, message: 'Product Updated...'});
   } catch (error) {
    console.log(error);
    res.status(500).json({message:'Internal Server Error'});
   }
}

// Delete Product
exports.deleteProduct = async (req, res) => {
     try {
       let productId = await req.query.productId;
       let product = await Product.findById(productId);
       if (!product) {
         return res.status(404).json({message : 'Product not found'});
       }
      //  product = await Product.findByIdAndDelete(product._id);
      product  = await Product.findOneAndUpdate({_id: product._id},{isDelete: true}, {new: true});
       res.status(200).json({product, message: 'Product Deleted...'});
     } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
     }
}