const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name must be Insert"],
    },
    description: {
      type: String,
      default: "",
    },
    keypoints: {
      type: [String],
      required : [true, "Enter the keypoints of the Products"]
    },
    sell_price: {
      type: Number,
      required: [true, "Product Sell Price must be Insert"],
    },
    thumbnail: {
      type: String,
      required: [true, "Product must have thumbnail"],
    },
    thumbnailUrl: {
      type: String,
      default: "",
    },

    image1: {
      type: String,
      required: [true, "Product must have image1"],
    },
    image1Url: {
      type: String,
      default: "",
    },
    image2: {
      type: String,
      required: [true, "Product must have image2"],
    },
    image2Url: {
      type: String,
      default: "",
    },
    
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Item must have the Category"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
