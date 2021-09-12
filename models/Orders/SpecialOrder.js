const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecialOrder = new Schema({

    productMeasures:{
        epaule: {
            type:Number,
        },
        poitrine: {
            type:Number,
        },
        taille: {
            type:Number,
        },
        bassin: {
            type:Number,
        },
        tourDeManche: {
            type:Number,
        },
        longueurManche: {
            type:Number,
        },
        longueurHaut: {
            type:Number,
        },
        hanche: {
            type:Number,
        },
        cuisse: {
            type:Number,
        },
        fond: {
            type:Number,
        },
        mollet: {
            type:Number,
        },
        pied: {
            type:Number,
        },
        longeurPantalon: {
            type:Number,
        },
        
    }, 
    deliveryStatus:{
        default:false,
        type:Boolean,
        required:true,
    },
   
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        user:{
            type:Schema.Types.ObjectId,
            ref:'users'
        },
        name:{
            type:String
        },
        country:{
            type:String
        },
        city:{
            type:String
        },
        telephone:{
            type:Number
        },
        gender:{
            type:String
        },
        email:{
            type:String
        }
    },
    isPayed: {
        default:false,
        type: Boolean,
        required: true
    },
    cost:{
        type:Number,
    },
    paymentStatus:{
        type:Schema.Types.ObjectId,
        ref:"Transaction",
        // sparse:true,
        // required:false
    }
});

// SpecialOrder.statics.payment = async function (email, password) {
//     console.log(email, password)
//     const user = await this.findOne({email});
//     console.log(user._id, user.username)
//     if(user) {
//      const auth= await  bcrypt.compare(password, user.password)
//      if(auth){
//          return user
//      }
//      throw Error('incorrect password')
//     }
//     throw Error("Incorrect Email") 

// }

module.exports = mongoose.model('SpecialOrder', SpecialOrder);