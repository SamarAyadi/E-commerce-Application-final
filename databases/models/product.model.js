import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: [10, "Title must be at least 10 characters long"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
      min: 0, // Calculated price after discount
    },
    description: {
      type: String,
      required: true,
      maxlength: [100, "Description must not exceed 100 characters"],
      minlength: [10, "Description must be at least 10 characters long"],
      trim: true,
    },
    stock: {
      type: Number,
      min: 0,
      default: 0, // Stock quantity
    },
    sold: {
      type: Number,
      default: 0, // Number of items sold
      min: 0,
    },
    imgCover: {
      type: String, // URL or path to the cover image
      required: true,
    },
    images: {
      type: [String], // Array of additional images (URLs or paths)
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category", // Reference to the category
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: "subCategory", // Reference to the subcategory
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand", // Reference to the subcategory
    },
    ratingAvg: {
      type: Number,
      min: 1,
      max: 5,
    },
    discount: {
      type: Number, // Discount percentage (optional)
      min: 0,
      max: 100,
    },
    ratingCount: {
      type: Number,
      min: 0,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user", // Reference to the user who created the product
      required: true,
    },
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields
  }
);

export const productModel = model("product", productSchema);
