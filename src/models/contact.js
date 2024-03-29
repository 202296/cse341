const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
      type:String,
      required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    favoriteColor:{
      type:String,
      required:true,
    },
    birthday:{
      type:String,
      required:true,
    },
});

//Export the model
module.exports = mongoose.model('contact', userSchema);