import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();
const genAI = new GoogleGenerativeAI("AIzaSyAj47-IYQSlu-2dTbMXbZ8xVeSIQNmMfqk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/", async (req, res) => {
    const { topic, numQuestions } = req.body;

    try {
        if (!topic || !numQuestions) {
            return res.status(400).json({ error: "Topic and number of questions are required." });
        }

        console.log("Using Hardcoded API Key");
        const prompt = `Generate ${numQuestions} questions about ${topic}.`;
        console.log("Generated Prompt:", prompt);

        const result = await model.generateContent(prompt);
        const questions = result.response.text();

        const questionsArray = questions.split('\n').filter(q => q.trim() !== '');

        res.status(200).json({ questions: questionsArray });
    } catch (error) {
        console.error("Error generating questions:", error.message || error);
        res.status(500).json({ error: "Failed to generate questions" });
    }
});

export default router;
