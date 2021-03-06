const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  image: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  timeOfPublich: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  idOwner: {
    type: String,
    required: true,
  },
  vote: { type: Number, required: false },
  comments: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("addBuilding", buildingSchema);
