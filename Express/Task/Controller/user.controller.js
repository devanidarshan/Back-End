const users = require('../../Public/User.json');

exports.addUser = (req,res) =>{
    // console.log(req.body);
    const user = req.body;
    users.push(user);
    // products.push({...req.body});           // Spread Operator
    res.status(201).json({message:'User added successfully'});
};

exports.getAllUser = (req,res) =>{             // All
    res.status(200).json(users);
};

exports.getUser = (req,res) =>{               // Single Product
    const id = +req.query.id;                 // Convert Number Method (+ Or Number)
    // console.log(id);
    let user = users.find((item) => item.id === id);
    res.status(200).json(user);
};

exports.replaceUser = (req,res) =>{
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    users.splice(userIndex, 1 , {...req.body});
    // console.log(user);
    res.status(200).json({message:'User Replaced Successfully'});
};

exports.updateUser = (req,res) =>{
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    let item = users.splice(userIndex, 1 , {...user, ...req.body});
    // console.log(user);
    res.status(200).json({message:'User Update Successfully'});
};

exports.deleteUser = (req,res) =>{
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    let item = users.splice(userIndex, 1);
    console.log(user);
    res.status(200).json({message:'User Delete Successfully'});
};