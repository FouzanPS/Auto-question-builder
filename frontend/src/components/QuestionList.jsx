import React from "react";

// Helper function to parse bold (**) and heading (##) markers in the text
const parseBoldText = (text) => {
  // Replace ## at the start of a sentence with a bold heading style
  const headingRegex = /##\s*(.*)/g;
  text = text.replace(
    headingRegex,
    (match, p1) => `<h2 class='font-bold text-xl'>${p1}</h2>`
  );

  // Replace **text** with bold text
  const boldRegex = /\*\*(.*?)\*\*/g;
  text = text.replace(boldRegex, (match, p1) => `<strong>${p1}</strong>`);

  return text;
};

const QuestionList = ({ questions }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Generated Questions</h2>
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li key={index} className="text-gray-800 font-medium">
            {/* Apply parseBoldText to each question */}
            <span
              dangerouslySetInnerHTML={{ __html: parseBoldText(question) }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
