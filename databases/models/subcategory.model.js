import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: [2, "Subcategory name must be at least 2 characters long"],
  },
  slug: {
    type: String,
    lowercase: true,
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'category',  // Reference to the parent category
    required: true
  }
});

export const subCategoryModel = model("subCategory", subCategorySchema);
