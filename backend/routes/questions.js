import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();
const genAI = new GoogleGenerativeAI("AIzaSyAj47-IYQSlu-2dTbMXbZ8xVeSIQNmMfqk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/", async (req, res) => {
    const { topic, numQuestions, questionType } = req.body;

    try {
        // Validate inputs
        if (!topic || !numQuestions || !questionType) {
            return res.status(400).json({ error: "Topic, number of questions, and question type are required." });
        }

        // Log for debugging
        console.log("Using Hardcoded API Key");
        console.log("Received Topic:", topic);
        console.log("Received Question Type:", questionType);

        // Generate prompt based on the question type
        const prompt = `Generate ${numQuestions} ${questionType} about ${topic}.`;
        console.log("Generated Prompt:", prompt);

        // Generate content using Google Generative AI
        const result = await model.generateContent(prompt);
        const questions = result.response.text();

        // Convert the result into an array of questions
        const questionsArray = questions.split('\n').filter(q => q.trim() !== '');

        // Respond with the generated questions
        res.status(200).json({ questions: questionsArray });
    } catch (error) {
        console.error("Error generating questions:", error.message || error);
        res.status(500).json({ error: "Failed to generate questions" });
    }
});

export default router;
