import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (topic, numQuestions, questionType) => {
    setLoading(true); //set loading to true when starting the fetch
    try {
      const res = await fetch(
        "https://auto-question-builder.vercel.app/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic, numQuestions, questionType }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await res.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setLoading(false); //set loading to false when fetch is completed
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#e4e9fd",
        backgroundImage:
          "-webkit-linear-gradient(65deg, #1f3a8a 50%, #e4e9fd 50%)",
        minHeight: "1000px",
      }}
      className="min-h-screen flex flex-col items-center p-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-black head">
        Question Generator
      </h1>
      {/* passing the loading state as a prop to QuestionForm */}
      <QuestionForm onGenerate={handleGenerate} loading={loading} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
