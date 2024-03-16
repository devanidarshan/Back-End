const  User = require('../Model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER USER
exports.registerUser = async (req, res) => {
     try {
        const {firstName, lastName, gender, email, password, age} = req.body;
        let user = await User.findOne({email:email,isDelete:false});
        if(user){
         return res.status(400).json({message:'User is already registered...'});
        }

      // Hash Password  
      let hashPassword = await bcrypt.hash(password,10);
      // console.log(hashPassword);
      
      user = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password:hashPassword,
            age,
            gender
        });
        user.save();
        res.status(201).json({user: user , message:'New User is Added'});
     } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
     }
}

// LOGIN USER
exports.loginUser = async (req, res) => {
   try {
      let user = await User.findOne({email:req.body.email,isDelete:false});
      if (!user) {
         return res.status(404).json({message : 'User is not found'});
      }
      let ckeckPassword = await bcrypt.compare(req.body.password,user.password);
      if(!ckeckPassword) {
         return res.status(400).json({message : 'Password is incorrect'});
      }
      let token = jwt.sign({userId:user._id},'Darshan');
      res.status(200).json({token,message: 'Login Successfully'});
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});  
   }
}

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
   try {
      let users = await User.find({isDelete: false});
      res.status(200).json(users);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
};

// GET SPECIFIC USER
exports.getUser = async (req, res) => {
   try {
      let userId = req.user._id;
      let user = await User.findById(userId);
      // let user = await User.findOne({_id: userId, isDelete : false});
      if (!user) {
         return res.status(404).json({message : 'User not found'});
      }
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
}

// UPDATE USER
exports.updateUser = async (req, res) => {
   try {
     let userId = await req.user._id;
     let user = await User.findById(userId);
     if (!user) {
       return res.status(404).json({message : 'User not found'});
      }
      // user = await User.findByIdAndUpdate(user._id, {set: {...req.body}}, {new:true});
      user = await User.findOneAndUpdate({_id:user.id}, {$set: {...req.body}}, {new:true});
     res.status(200).json({user,message: 'User Updated...'});
   } catch (error) {
    console.log(error);
    res.status(500).json({message:'Internal Server Error'});
   }
}

// DELETE USER
exports.deleteUser = async (req, res) => {
     try {
       let userId = req.user._id;
       let user = await User.findById(userId);
       console.log(user);
       console.log(userId)
       if (!user) {
         return res.status(404).json({message : 'User not found'});
       }
      //  user = await User.findByIdAndDelete(user._id);
      user  = await User.findOneAndUpdate({ _id: userId},{isDelete: true},{new : true});
       res.status(200).json({user,message: 'User Deleted...'});
     } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
     }
};

// ADD NEW USER
exports.addNewUser = async (req, res) => {
   try {
      let {firstName, lastName, gender, email, password, age, profileImage} = req.body;
      let user = await User.findOne({email:email,isDelete:false});
      if(user){
       return res.status(400).json({message:'User is already registered...'});
      }
      if(req.file){
         console.log(req.file);
         profileImage = req.file.path.replace(/\\/g, "/");
      }
      user = await User.create({
         ...req.body,
         profileImage
      });
      user.save();
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
}