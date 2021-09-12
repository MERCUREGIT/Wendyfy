const mongoose = require('mongoose');
const Order = require('../../models/Orders/Orders');
const ProductComments = require('../../models/Comments/ProductComments');


const Schema = mongoose.Schema;


const ProductVariationSchema = new Schema({

    color: {
        type: String,
        // required:true,
    },
    colorCode:{
        type:String
    },
    image: {type: String, required: true},
    size: [
        {
            name: {
                type: String,
                required: [true, "The product variation size does not have a name"],
            },
            stock: {
                type: Number,
                required: [true, "Quantity was not defined"]
            }
        }
    ]
});


const ProductSchema = new Schema({

    id: Schema.Types.ObjectId,
    sku: {type: String},
    name: {type: String, required: true, unique: true},
    salePrice: {type: Number, default: this.price},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    new: {type: Boolean, default: false},
    offerEnd: {type: Date},
    rating: {type: Number, default: 0},
    usersRating: [{type: Number}],
    saleCount: {type: Number, required: true, default: 0},
    orderHistory:
        [{type: Schema.Types.ObjectId, ref: "Orders"}],
    date: {
        type: Date,
        default: Date.now()
    },
    category:
        [{
            type: String,
            default: "none",
            required: true,
        }],

    tag: [{type: String, default: "none", required: true}],

    variation: [ProductVariationSchema],
    image: [
        {
            type: String,
        }
    ],

    shortDescription: {
        type: String,
        require: true
    },

    fullDescription: {
        type: String,
    },
    allowComments: {
        type: String,
        required: true,
        default: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'ProductComments'
    }]

}, {usePusEach: true});


// middle ware declaration to remove uneeded products

ProductSchema.pre('remove', function (next) {
    this.orderHistory.forEach(element => Order.remove({_id: element._id}).exec());
    this.comments.forEach(element => ProductComments.remove({_id: element._id}));

    next();
});

// create hooks for automatic rating calculation
ProductSchema.pre('save', function (next) {

    if (this.discount) {
        this.salePrice = this.salePrice - (this.price * (this.discount / 100))
    }

    next();
});


module.exports = mongoose.model('Product', ProductSchema);
