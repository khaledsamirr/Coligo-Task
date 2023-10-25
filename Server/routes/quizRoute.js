import express from "express";
import { createQuiz, deleteQuiz, getAllQuizzes, getQuiz, updateQuiz } from "../controllers/quizController.js";

const router= express.Router();


router.get("/",getAllQuizzes)
router.get("/:id",getQuiz)
router.post("/",createQuiz)
router.delete("/:id",deleteQuiz)
router.put("/:id",updateQuiz)


export default router;