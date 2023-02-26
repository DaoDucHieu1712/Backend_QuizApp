import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    option1: {
      type: String,
    },
    option2: {
      type: String,
    },
    option3: {
      type: String,
    },
    option4: {
      type: String,
    },
    solution: {
      type: Number,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);
