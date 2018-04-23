import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  author: String,
  content: String,
  created: { type: Date, default: Date.now }
});

export default mongoose.model("Task", taskShema);
