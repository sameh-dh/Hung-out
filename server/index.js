const express = require("express");
const bcrypt = require("bcryptjs");
const JsonWebToken = require("jsonwebtoken")
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"

const mongoose = require("mongoose");
const db = require("../database/trips");
var cors = require('cors');
const app = express();
const port = 1337;


const { trips } = require('../database/trips');
const { User } = require('../database/user')

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

//test get
app.get('/get', (req, res) => {
  res.json("index")
});

//add data to database
app.post('/get', (req, res) => {
  const newTrips = new trips({
    destination: req.body.destination,
    price: req.body.price,
    img: req.body.img
  })
  newTrips.save().then((data) => {
    res.json(data)
  })
    .catch((err) => {
      res.status(404)
    })
})
// read data from database
app.get("/read", (req, res) => {
  trips.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
})
// delete data from database
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  trips.findByIdAndRemove(id).exec()
  trips.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});



//update data from database 
app.put("/update", (req, res) => {
  const price = req.body.price
  const destination = req.body.destination;
  const img = req.body.img;
  const id = req.body._id

  const test = () => {
    if (id === undefined) {
      return { destination: destination }
    } else {
      return { _id: id }
    }
  }
  //using update one u can choose how to to search for element and then what to set into it 
  trips.updateOne(test(), {
    $set: {
      price: price,
      destination: destination,
      img: img

    }
  },
    //upsert will check if the id doesn't already exist it will add new data to the database
    { upsert: true }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("updated successfully")

      }
    })

}
)
//creating new user with hashed password
app.post('/user/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, error: "send needed params" })
    return
  }
  const newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  })
  newUser.save().then((user) => {
    const token = JsonWebToken.sign({ id: user._id, username: user.username }, SECRET_JWT_CODE)
    res.json({ success: true, token: token })
  }).catch((err) => {
    res.json({ success: false, error: err })
  })

})
//user login and check if user exist or not
app.post('/user/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, error: "send needed params" })
    return
  }
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.json({ success: false, error: "User does not exist" })
      }
      else {
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ success: false, error: "Wrong password" })
        }
        else {
          const token = JsonWebToken.sign({ id: user._id, username: user.username }, SECRET_JWT_CODE)
          res.json({ success: true, token: token, })
        }
      }
    })
    .catch((err) => {
      res.json({ success: false, error: err })
    })
})
 //check if the token is valid
// function fetchUserByToken(req) {
//   return new Promise((resolve, reject) => {
//     if (req.headers && req.headers.authorization) {
//       let authorization = req.headers.authorization
//       let decoded
//       try {
//         decoded = JsonWebToken.verify(authorization, SECRET_JWT_CODE)
//       }
//       catch (e) {
//         reject("Token not valid")
//         return
//       }
//       let userId = decoded.id
//       User.findOne({ _id: userId })
//         .then((user) => {
//           resolve(user)
//         })
//         .catch((err) => {
//           reject("Token error")
//         })
//     }
//     else {
//       reject("No token found")
//     }
//   })
// }
// app.get("/token",(req,res)=>{
//   fetchUserByToken(req)
//   .then((user)=>{
//     res.json(user)
//     console.log(user);
//   })
//   .catch((err)=>{
//     res.status(401).json({ message: 'Invalid token' })
//   })
// })
//listening to port 1337
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
