import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    fullname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
let User = mongoose.model("User", userSchema);
export default User;
