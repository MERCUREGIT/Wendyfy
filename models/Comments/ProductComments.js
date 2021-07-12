const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    name: {
       type:String,
       default: 'none'
    },
    comment: {
        type: String,
        default:'',
        required: true
    },
    email: {
        type:String,
        default: 'none'
    },
    visible: {
        type:Boolean,
        default:true}
});


module.exports = mongoose.model('ProductComments', CommentSchema);