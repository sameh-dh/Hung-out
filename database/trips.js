const mongoose = require ('mongoose')


// create schema





const UserSchema = new mongoose.Schema({
    destination: {
      type: String,
    },
    price: {
      type: Number,
    },
    img: {
      type: String,
    },
  });




  module.exports = mongoose.model('database',UserSchema)