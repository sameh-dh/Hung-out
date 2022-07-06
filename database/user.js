const mongoose = require('mongoose')
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({

    username: String,

    password: String

});
// userSchema.pre("save", (next) => {
//     const user = this;
//     if (user.isModified("password") || user.isNew) {
//         bcrypt.genSalt(10, (saltError, salt) => {
//             if (saltError) {
//                 return next(saltError)
//             }
//             else {
//                 bcrypt.hash(user.password, salt, (hashError, hash) => {
//                     if (hashError) {
//                         return next(hashError)
//                     }
//                     user.password = hash
//                     next()
                   
//                 })
//             }
//         })
//          console.log(user.password);
//     }
    
//     else {
//         return next()
//     }

// })


const User = mongoose.model('User', userSchema);



module.exports.User = User;
