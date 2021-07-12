const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColorSchema = new Schema({

    name:{
        type:String,
        required: true,
        unique:true
    },
    color:{
        type:String,
        required: true,
        unique:true
    }
});


module.exports = mongoose.model('Colors', ColorSchema);
