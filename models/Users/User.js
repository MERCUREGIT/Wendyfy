const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true,"User name required"],
        unique: [true, "User name taken"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "User email taken"]
    },
    telephone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userRole:{
        type: String,
        default:"normalUser",
        required: true
    }

});

UserSchema.statics.login = async function (email, password) {
    console.log(email, password)
    const user = await this.findOne({email});
    console.log(user._id, user.username)
    if(user) {
     const auth= await  bcrypt.compare(password, user.password)
     if(auth){
         return user
     }
     throw Error('incorrect password')
    }
    throw Error("Incorrect Email")

}

// hash  user password before storing it
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})


module.exports = mongoose.model('users', UserSchema);
