import React from "react";

const QuestionList = ({ questions }) => {
  return (
    <ul className="bg-white p-4 rounded-lg shadow-md w-full max-w-md space-y-2">
      {questions.map((question, index) => (
        <li key={index} className="text-gray-800 font-medium">
          {question}
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
