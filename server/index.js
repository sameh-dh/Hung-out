const express = require("express");
const mongoose = require("mongoose");
const db = require("../database/trips");
var cors = require('cors');
const app = express();


const {trips} = require('../database/trips')
app.use(express.static('/../client/build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



//mongoose connection  
mongoose
  .connect("mongodb://localhost:27017/hung-out", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Hey u are connected To db....");
  })
  .catch((err) => {
    console.log(err);
  });

  app.get('/get', (req, res) =>{
    res.json("index")
});
  app.post('/get',(req,res)=>{
    const newTrips= new trips ({
      destination : req.body.destination,
      price : req.body.price,
      img : req.body.img
    })
    newTrips.save().then((data)=>{
      res.json(data)
    })
    .catch((err)=>{
      res.status(404)
    })
  })

app.get("/read", (req, res) => {
  db.trips.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
})

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.trips.findByIdAndRemove(id).exec()
  db.trips.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
const port =  1337;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
