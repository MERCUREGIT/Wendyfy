const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SizeNameSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique: true
    }
});


module.exports = mongoose.model('SizeNames', SizeNameSchema);
