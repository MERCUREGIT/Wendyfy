const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SizeSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique: true
    },
    stock:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model('Sizes', SizeSchema);