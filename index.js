import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import gradeRoutes from "./routes/grades.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Stop app if DB connection fails
  }
};

// Routes
app.get("/", (req, res) => res.send("Welcome to the API."));
app.use("/grades", gradeRoutes);

// Global Error Handling
app.use((err, _req, res, _next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ message: "Something went wrong, please try again later." });
});

// Start Server Only After DB Connection
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
