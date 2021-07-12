const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SliderSchema = Schema({

          title: {
              type: String,
              required: true
          },
          subtitle:{
            type: String,
            required: true
        },
          image:{
            type: String,
            required: true
        },
        url: {
          type:String,
          default:"/shop-grid-standard"
        }      
});

module.exports = mongoose.model('Slider', SliderSchema);