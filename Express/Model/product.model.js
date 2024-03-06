const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    title: String,
    productDescription: {
        type : String
    },
    productPrice : {
        type : Number,
    },
    prodcuctCategory : [{
        type : String
    }],
    isDelete : {
        type : Boolean,
        default : false 
    }

});

module.exports = mongoose.model('products', productsSchema);