import React from 'react';

function FinalScore({ score, total, onRestart }) {
  return (
    <div className="final-score">
      <h2>Final Score</h2>
      <p>
        You scored {score} out of {total}
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default FinalScore;
