const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new mongoose.Schema({
  email:{
     type: String,
     unique: true,
     required: true
  }
});

const Product = mongoose.model("DeCodeCafeSubsribers", ProductSchema);
module.exports = Product