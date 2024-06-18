import React, { useState } from 'react';
import './App.css'; // Import custom styles
import QuestionScreen from './QuestionScreen';
import FinalScore from './FinalScore';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Who wrote 'To be, or not to be'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
    answer: "Shakespeare",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowFinalScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowFinalScore(false);
  };

  return (
    <div className="App">
      <header>
        <h1>MCQ Game</h1>
      </header>
      <main>
        {showFinalScore ? (
          <FinalScore score={score} total={questions.length} onRestart={handleRestart} />
        ) : (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        )}
      </main>
    </div>
  );
}

export default App;
