import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce-application")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.error("db connection error", err);
    });
}
