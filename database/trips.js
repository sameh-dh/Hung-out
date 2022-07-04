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





 
  const trips = mongoose.model('trip',UserSchema);
  module.exports.trips = trips;
