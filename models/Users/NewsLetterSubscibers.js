const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSubsciberSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"]},
    date:{
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('subscribers', UserSubsciberSchema);