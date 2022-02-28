const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    require: true,
  },
  accountNumber: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
