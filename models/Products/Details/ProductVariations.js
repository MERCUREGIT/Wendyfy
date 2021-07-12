const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductVariationSchema = new Schema({
    color:{
        type: Schema.Types.ObjectId,
        required:true,
        unique:true, 
        ref:"Colors"},
    image: {type:String, required:true},
    size:[{
        type: Schema.Types.ObjectId,
        required:true,
        unique:true, 
        ref:"Sizes"}]
});


module.exports = mongoose.model("ProductVariations",ProductVariationSchema)