const router = require("express").Router();
const Pin = require("../models/Pins");

//CREATE A PIN
router.post("/", async (req, res) => {
  const newPin = new Pin(res.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (error) {
    res.status(500).json(err);
  }
});

//GETTING A PIN
