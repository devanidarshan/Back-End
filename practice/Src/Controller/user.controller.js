const UserServices = require('../Service/user.service');
const userService = new UserServices;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register User
exports.registerUser = async (req , res) => {
    try {
        let user = await userService.getUser({ email: req.body.email });
        console.log(user);
        if(user){
            res.status(400).json({message:"User Already Registered..."});
        }
        let hashpassword = await bcrypt.hash(req.body.Password , 10);
        console.log(hashpassword);
        user = await userService.addNewUser({
            ...req.body,
            Password:hashpassword,
        });
        res.status(201).json({user , message:"User Registered SuccessFully..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// Login User
exports.loginUser = async (req , res) => {
    try {
        let user = await userService.getUser({email:req.body.email});
    console.log(user);
    if(!user){
        res.status(400).json({message:"Email Not Found..."});
    }
    let checkpassword = await bcrypt.compare(req.body.Password , user.Password);
    console.log(checkpassword);
    if(!checkpassword){
        res.status(400).json({message:"Password Not Match..."});
    }
    let token = jwt.sign({userId:user._id} , "User");
    console.log(token);
    res.status(201).json({ token , message:"User Login SuccessFully..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// Get All User
exports.getAllUser = async (req , res) => {
    try {
        let user = await userService.getAllUser();
        console.log(user);
        if(!user){
            res.status(400).json({message:"User's data not found..."});
        }
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// Get Specific Id
 exports.getUserById = async (req , res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        console.log(user);
        if(!user) {
            res.status(400).json({message:"User Not found..."});
        }
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// Update User
exports.updateUser = async (req , res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        console.log(user);
        if(!user){
            res.status(400).json({message: "User Not Found..."});
        }
        user = await userService.updateUser(user._id , {...req.body});
        res.status(201).json({user , message:"User Upadte successFully..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// Delete User
exports.deleteUser = async (req , res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        console.log(user);
        if(!user){
            res.status(400).json({message:"user Not Found..."});
        }
        user = await userService.updateUser(user._id , { isdelete:true });
        res.status(201).json({user , message:"User delete succsessFully..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};





