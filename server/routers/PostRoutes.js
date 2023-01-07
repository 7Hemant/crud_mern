const express = require("express");
const {
  createPost,
  ReadPost,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

const PostRoute = express.Router();

PostRoute.get("/read", ReadPost);
PostRoute.post("/create", createPost);
PostRoute.patch("/update/:id", updatePost);
PostRoute.delete("/delete/:id", deletePost);

module.exports = PostRoute;
