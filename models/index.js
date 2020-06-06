const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: String,
  price: {type: Number, default: 0},
  year: Number,
  description: String,
});

module.exports = mongoose.model('Product', ProductSchema)