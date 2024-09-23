import express from 'express';
import cors from 'cors'; // Import the CORS package
import questionsRouter from './routes/questions.js'; // Adjust the path as necessary

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/generate', questionsRouter); // Mount the questions router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
