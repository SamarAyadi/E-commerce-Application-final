import { Schema, model } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields
  }
);

export const brandModel = model("brand", brandSchema);
