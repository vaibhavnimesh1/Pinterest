var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const likesModel = require("./likes");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

router.get("/", async function (req, res, next) {

  res.send("home page");
});
router.get("/like", async function (req, res, next) {
  const likes = await likesModel.create({
    dp: "vaibhavbbggb",
    like: 5,
  });
  res.send(likes);
});

router.get("/post", async (res, req) => {
  const post = await postModel.create({
    postText: "yoyoyo",

    likes: [1],
  
  });
});

router.get("/user", async function (req, res) {
  const createdUser = await userModel.create({
    username: "vikalpnimesh6",
    password: "vikalp",
    fullname: "Vikalp Nimesh",
    email: "vikalp16@gmail.com",
 
  });
  res.send(createdUser);
});

module.exports = router;
