import express from 'express';
import cors from 'cors';
import questionsRouter from './routes/questions.js';

const app = express();
app.use(cors());
app.use(express.json()); 
app.use('/generate', questionsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
