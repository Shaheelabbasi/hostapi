const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: ['dell', 'apple', 'samsung', 'mi'], // Corrected the enum definition
    message: '{VALUE} is not supported', // Use {VALUE} as a placeholder for the invalid value
  },
});

const product = mongoose.model("Product", schema);

module.exports = product;
