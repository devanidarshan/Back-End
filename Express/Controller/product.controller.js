const products = require('../Public/Product.json');

exports.addProduct = (req,res) =>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});             // Spread Operator
    res.status(201).json({message:'Product is added successfully'});
};

exports.getAllProduct = (req,res) =>{            // All
    res.status(200).json(products);
};

exports.getProduct = (req,res) =>{               // Single Product
    const id = +req.query.id;                    // Convert Number Method (+ Or Number)
    // console.log(id);
    let product = products.find((item) => item.id === id);
    res.status(200).json(product);
};

exports.replaceProduct = (req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    products.splice(productIndex, 1 , {...req.body});
    // console.log(product);
    res.status(200).json({message:'Product is Replaced Successfully'});
};

exports.updateProduct = (req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    let item = products.splice(productIndex, 1 , {...product, ...req.body});
    // console.log(product);
    res.status(200).json({message:'Product is Update Successfully'});
};

exports.deleteProduct = (req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    let item = products.splice(productIndex, 1);
    console.log(product);
    res.status(200).json({message:'Product Delete Successfully'});
};