const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv").config();
const ConnectedDB = require("./config/db");
const mongoose = require("mongoose");
const PostRoute = require("./routers/PostRoutes");
const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use("/api/v1", PostRoute);
mongoose.set("strictQuery", true);
ConnectedDB().then(
  app.listen(5000, () => {
    console.log("running");
  })
);
