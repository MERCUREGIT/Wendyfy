const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    sku: {type:String},
    name:{type:String, required:true,unique:true},
    price: {type:Number, required:true},
    discount:{type:Number, required:true},
    new: {type:Number, required:true},
    rating: {type:Number, required:true},
    saleCount: {type:Number, required:true},
    orderHistory:{},
    date: {
        type: Date,
        default: Date.now()
    },
   category:
    [
        { name:{type:String,required:true}}
    ],

    tag: [{
        name:{type:String,}
        }
    ],

    variation: [
        {
            color:{type:String,required:true,unique:true},
            image: {type:String, required:true},
            size:[{type: String,required:true,unique:true}]
        }
    ],
    image: [
        {
            type:String,
        }
    ],

    shortDescription:{
        type:String,
        require:true
    },
    
    fullDescription: {
        type:String,
        require:true
    },
    allowComments: {
        type: String,
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'ProductComments'
    }]
 
}, { usePusEach: true });


module.exports = mongoose.model('DeletedProducts', ProductBinsSchema);
