import React from 'react';

function ResultsView({ score, totalQuestions, onPlayAgain }) {
  // Calculate percentage, handling the case of 0 questions to avoid errors.
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  // Determine a message based on the score
  const getResultMessage = () => {
    if (percentage === 100) return "Perfect Score! You're a true Ace! 🏆";
    if (percentage >= 80) return "Excellent Job! You really know your stuff. 🎉";
    if (percentage >= 50) return "Good effort! You're on your way to becoming a pro. 👍";
    return "Nice try! Keep practicing to improve your score. 🧠";
  };

  return (
    <div id="quiz-box">
      <a className="back-link" onClick={onPlayAgain} style={{ marginBottom: '10px' }}>
        ← Back to Main Menu
      </a>
      <h2>Quiz Complete!</h2>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.9 }}>
        {getResultMessage()}
      </p>
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>Your final score is:</p>
      <p style={{ fontSize: '3.5rem', color: 'var(--accent-color)', margin: '10px 0', fontWeight: 'bold' }}>
        {score} / {totalQuestions}
      </p>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
        That's {percentage}%!
      </p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}

export default ResultsView;