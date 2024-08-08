const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Password:{
        type:String,
        required:true
    },
    isdelete: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{
    versionkey: false,
    timestamps: true
});

module.exports = mongoose.model('Users' , userSchema); 