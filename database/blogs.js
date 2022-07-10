const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({

  user: String,
  userImage:String,
  blog: String,
  picture:String,
  picture2:String,
  picture3:String,
  picture4:String,
  like:String

});


const blogs = mongoose.model('blogs', blogsSchema);



module.exports = blogs;