const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pin");
const userRoute = require("./routes/user");
dotenv.config();

app.use(express.json());

//MONGO_DB CONNECTION
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/user", userRoute);

app.listen(8500, () => {
  console.log("backend server running");
});
