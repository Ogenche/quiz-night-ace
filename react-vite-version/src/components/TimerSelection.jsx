import React from 'react';

function TimerSelection({ onTimerSelect, onBackToMenu }) {
  const timerOptions = [
    { label: '3 Minutes', value: 180, description: 'Quick challenge - 3 minutes to answer as many as possible!' },
    { label: '5 Minutes', value: 300, description: 'Standard challenge - 5 minutes for a balanced experience' },
    { label: '10 Minutes', value: 600, description: 'Extended challenge - 10 minutes to think through each question' },
    { label: 'Unlimited Time', value: null, description: 'No time pressure - take as long as you need' }
  ];

  const handleTimerSelect = (timerValue) => {
    onTimerSelect(timerValue);
  };

  return (
    <div id="quiz-box">
      <a className="back-link" onClick={onBackToMenu} style={{ marginBottom: '20px' }}>
        ← Back to Main Menu
      </a>
      
      <h2>Choose Your Challenge Level</h2>
      <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Select how much time you'd like for the Full Night Version (50 questions):
      </p>

      <div className="timer-options">
        {timerOptions.map((option) => (
          <div key={option.value || 'unlimited'} className="timer-option">
            <button 
              className="timer-button"
              onClick={() => handleTimerSelect(option.value)}
            >
              <div className="timer-label">{option.label}</div>
              <div className="timer-description">{option.description}</div>
            </button>
          </div>
        ))}
      </div>

      <div className="timer-info">
        <p><strong>Note:</strong> The timer starts when you begin the first question and counts down continuously. When time runs out, the quiz ends automatically and shows your final score.</p>
      </div>
    </div>
  );
}

export default TimerSelection;