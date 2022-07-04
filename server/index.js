const express = require("express");
const app = express();
const port =  1337;
app.use(express.json());
app.use(express.static("./client/build"));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");


//mongoose connection  
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Hey u are connected To db....");
  })
  .catch((err) => {
    console.log("Cannot connect to DB");
  });

app.get("/", (req, res) => {
  res.render("index");
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
