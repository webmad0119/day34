const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ButterflySchema = new Schema({
  name: String,
  color: String
});

module.exports = mongoose.model("Butterfly", ButterflySchema);