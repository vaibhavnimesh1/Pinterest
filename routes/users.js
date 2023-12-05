const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:false
    
  },
  password: {
    type: String,
    required: true,
    unique:false
  },
  fullname: {
    type: String,
    required: true,
    unique:false
  },
  email: {
    type: String,
    required: true,
    unique:false
  },
  dp: {
    type: String,
  },
  post: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  
});
const User = mongoose.model("User", userSchema);
module.exports = User;
