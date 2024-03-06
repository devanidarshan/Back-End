const  User = require('../Model/user.model');
const bcrypt = require('bcrypt');

// Add User
exports.addUser = async (req, res) => {
     try {
        const {firstName, lastName, gender, email, password, age} = req.body;
      //   console.log(req.body);
      let hashPassword = await bcrypt.hash(password,10);
      // console.log(hashPassword);
        let newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password:hashPassword,
            age,
            gender
        });
        newUser.save();
        res.status(201).json({User: newUser , message:'New User Added'});
     } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
     }
}

// Get All Users
exports.getAllUsers = async (req, res) => {
   try {
      let users = await User.find({isDelete: false});
      res.status(200).json(users);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
};

// Get Specific User
exports.getUser = async (req, res) => {
   try {
      let userId = req.query.userId;
      // let user = await User.findById(userId);
      let user = await User.findOne({_id: userId, isDelete : false});
      if (!user) {
         return res.status(404).json({message : 'User not found'});
      }
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
   }
}
// Update User
exports.updateUser = async (req, res) => {
   try {
     let userId = await req.query.userId;
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

// Delete User
exports.deleteUser = async (req, res) => {
     try {
       let userId = await req.query.userId;
       let user = await User.findById(userId);
       if (!user) {
         return res.status(404).json({message : 'User not found'});
       }
      //  user = await User.findByIdAndDelete(user._id);
      user  = await User.findOneAndUpdate({_id: user._id},{isDelete: true}, {new: true});
       res.status(200).json({user,message: 'User Deleted...'});
     } catch (error) {
      console.log(error);
      res.status(500).json({message:'Internal Server Error'});
     }
}