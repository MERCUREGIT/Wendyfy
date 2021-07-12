const mongoose = require('mongoose');
 

const Schema = mongoose.Schema

const TokenSchema = Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        // unique: true
    },
    token: {
        type: String,
        required: true,
        // unique: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '58m' },
      },
});


module.exports = mongoose.model('RefreshTokens', TokenSchema);
