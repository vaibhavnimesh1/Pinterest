const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  dp: {
    type: String,
  },
  like: {
    default: 0,
    type: Number,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
});

module.exports = mongoose.model("like", likeSchema);
