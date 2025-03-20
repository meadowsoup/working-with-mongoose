import express from "express";
import Grade from "../models/Grade.js";

const router = express.Router();

// 🔹 GET all grades
router.get("/", async (req, res, next) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

// 🔹 GET a single grade by ID
router.get("/:id", async (req, res, next) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

// 🔹 POST: Create a new grade
router.post("/", async (req, res, next) => {
  try {
    const newGrade = await Grade.create(req.body);
    res.status(201).json(newGrade);
  } catch (error) {
    next(error);
  }
});

// 🔹 PUT: Update a grade by ID
router.put("/:id", async (req, res, next) => {
  try {
    const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedGrade) return res.status(404).json({ message: "Grade not found" });

    res.status(200).json(updatedGrade);
  } catch (error) {
    next(error);
  }
});

// 🔹 DELETE: Remove a grade by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedGrade = await Grade.findByIdAndDelete(req.params.id);
    if (!deletedGrade) return res.status(404).json({ message: "Grade not found" });

    res.status(200).json({ message: "Grade successfully deleted" });
  } catch (error) {
    next(error);
  }
});

export default router;
