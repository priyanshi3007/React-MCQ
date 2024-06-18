import React from 'react';

function QuestionScreen({ question, handleAnswer }) {
  return (
    <div className="question-screen">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionScreen;
