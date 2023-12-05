const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/pinterests");

const postSchema = mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default:Date.now
  },

  likes: {
    type: Array,
    default:[]
  },
  user: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
 
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
