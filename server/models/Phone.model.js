const { Schema, model } = require("mongoose");

const phoneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 200,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageFileName: {
    type: String,
  },
  screen: {
    type: String,
  },
  processor: {
    type: String,
  },
  ram: {
    type: String,
  },
});

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
