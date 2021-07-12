const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    name: {
        type:String,
        default: 'none'
     },
     email: {
        type:String,
        default: 'none'
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    visible: {
        type: Boolean,
        default:true,
    }
});


module.exports = mongoose.model('BlogComments', CommentSchema);