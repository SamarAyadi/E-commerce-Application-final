import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product", // Reference to the Product model
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user", // Reference to the User model
      required: true,
    },
    rate: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const reviewModel = model("review", reviewSchema);


