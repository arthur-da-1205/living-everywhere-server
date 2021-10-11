const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Feature", featureSchema);
