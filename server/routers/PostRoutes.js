const express = require("express");

const PostRoute = express.Router();

PostRoute.post("/create", () => {});
PostRoute.get("/read", () => {});
PostRoute.patch("/update/:id", () => {});
PostRoute.delete("/delete/:id", () => {});

module.exports = PostRoute;
