const mongoose = require ('mongoose')

// create schema
const UserSchema = new mongoose.Schema({
    destination:String ,
    price: Number ,
    img: String
  });


  const trips = mongoose.model('trips',UserSchema);



  module.exports.trips = trips;
