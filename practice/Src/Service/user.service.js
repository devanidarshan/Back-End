const User = require('../Model/user.model');

module.exports = class UserServices {
    // Add User
    addNewUser = async(body) => {
        return await User.create(body);
    };
    
    // Get User
    getUser = async(body) => {
        return await User.findOne(body);
    };

    // Get All Users
    getAllUser = async(body) => {
        return await User.find(body);
    };

    // Get Specific Id
    getUserById = async(id) => {
        return await User.findById(id);
    };

    // update User
    updateUser = async(id ,body) => {
        return await User.findByIdAndUpdate(id ,{$set:body} , {new:true});
    }
    };
