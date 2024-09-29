import React, { useState } from "react";

const QuestionForm = ({ onGenerate }) => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [questionType, setQuestionType] = useState("Multiple choice question");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onGenerate === "function") {
      onGenerate(topic, numQuestions, questionType);
    } else {
      console.error("onGenerate is not a function");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Number of questions"
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
        required
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Multiple choice question">
          Multiple choice question
        </option>
        <option value="Assessments">Assessments</option>
        <option value="Case studies">Case studies</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Generate Questions
      </button>
    </form>
  );
};

export default QuestionForm;
