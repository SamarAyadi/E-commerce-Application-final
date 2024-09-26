import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0, // Minimum discount value
    },
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields
  }
);

export const couponModel = model("coupon", couponSchema);
