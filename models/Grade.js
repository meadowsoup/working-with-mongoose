import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
  studentName: { type: String, required: true , trim: true},
  subject: { type: String, required: true, trim: true },
  score: { type: Number, required: true, min: 0, max: 100 },
  date: { type: Date, default: Date.now },
}, 
{timestamps: true}
);


export default mongoose.model("Grade", GradeSchema);
