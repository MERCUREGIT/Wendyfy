const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({

    category: [{
        type: String,
    }],
    tags: [{
        type: String,
    }],
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Public',
    },
    allowComments: {
        type: Boolean,
        default:true,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true
    }, file: {
        type: String,
        required:true
    },
    /*body2: {
        type: String,
    },
    body3: {
        type: String,
    },
    bodyQuote: {
        type: String,
    },
    file: {
        type: String,
        required:true
    },
    file2: {
        type: String,
        required:true
    },*/
    date: {
        type: Date,
        default: Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'BlogComments'
    }]

}, { usePusEach: true });


module.exports = mongoose.model('BlogPosts', PostSchema);
