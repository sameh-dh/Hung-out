const mongoose = require('mongoose')

// create schema
const tripsSchema = new mongoose.Schema({

  destination: String,
  description: String,
  price: Number,

  img: String



});


const trips = mongoose.model('trips', tripsSchema);



module.exports.trips = trips;
