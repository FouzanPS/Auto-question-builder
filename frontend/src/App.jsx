import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

const App = () => {
  const [questions, setQuestions] = useState([]);

  const handleGenerate = async (topic, numQuestions) => {
    try {
      const res = await fetch(
        "https://auto-question-builder.vercel.app/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic, numQuestions }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await res.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error generating questions:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Question Generator
      </h1>
      <QuestionForm onGenerate={handleGenerate} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
