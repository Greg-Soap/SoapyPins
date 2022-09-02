const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//MONGO_DB CONNECTION
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch((err) => console.log(err));

app.listen(8500, () => {
  console.log("backend server running");
});
