import React, { useState, useEffect } from 'react';

// Utility to normalize strings for answer checking
const normalizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^\w]/g, '');
};

function QuizView({ 
  questions, 
  onQuizEnd, 
  onBackToMenu,
  selectedTimer,
  remainingTime,
  setRemainingTime,
  isTimerActive,
  setIsTimerActive
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[questionIndex];

  // Timer effect - starts the timer when the first question loads
  useEffect(() => {
    if (selectedTimer !== null && !isTimerActive && questionIndex === 0) {
      setIsTimerActive(true);
    }
  }, [selectedTimer, isTimerActive, questionIndex, setIsTimerActive]);

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    
    if (isTimerActive && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(time => {
          if (time <= 1) {
            setIsTimerActive(false);
            // Call onQuizEnd with current score when timer expires
            onQuizEnd(score, questions.length);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (remainingTime === 0) {
      // Call onQuizEnd with current score when timer expires
      onQuizEnd(score, questions.length);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, remainingTime, setRemainingTime, setIsTimerActive, onQuizEnd, score, questions.length]);

  // Format time for display (MM:SS)
  const formatTime = (seconds) => {
    if (seconds === null) return '';
    const minutes = Math.floor(seconds / 60);
    const remainingSecs = seconds % 60;
    return `${minutes}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Focus the input when a new question is displayed
  useEffect(() => {
    const input = document.getElementById('text-answer');
    if (input) {
      input.focus();
    }
  }, [questionIndex]);
  
  const handleCheckAnswer = () => {
    if (userAnswer.trim() === '') {
      setFeedback({ message: 'Please enter an answer!', type: '' });
      return;
    }

    setIsAnswered(true);
    const normalizedUserAnswer = normalizeString(userAnswer);
    const isCorrect = currentQuestion.answer.some(
      (ans) => normalizeString(ans) === normalizedUserAnswer
    );

    if (isCorrect) {
      setScore(score + 1);
      setFeedback({ message: 'Correct! ✅', type: 'correct' });
      setTimeout(handleNextQuestion, 1200);
    } else {
      setFeedback({
        message: `Incorrect. The answer is: ${currentQuestion.answer[0]}`,
        type: 'incorrect',
      });
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setFeedback({ message: '', type: '' });
    } else {
      onQuizEnd(score + (feedback.type === 'correct' ? 1 : 0), questions.length);
    }
  };
  
  // Allows pressing Enter to submit
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        if (!isAnswered) {
            handleCheckAnswer();
        } else {
            handleNextQuestion();
        }
    }
  };

  // Handler to go back to main menu directly
  const handleBackToMenu = () => {
    if (window.confirm('Are you sure you want to go back to the main menu? Your progress will be lost.')) {
      if (typeof onBackToMenu === 'function') {
        onBackToMenu();
      }
    }
  };

  return (
    <div id="quiz-box" style={{ position: 'relative' }}>
      <a className="back-link" onClick={handleBackToMenu} style={{ marginBottom: '10px' }}>
        ← Back to Main Menu
      </a>
      
      {/* Timer Display */}
      {selectedTimer !== null && (
        <div className={`quiz-timer ${remainingTime <= 30 ? 'warning' : ''}`}>
          {remainingTime > 0 ? formatTime(remainingTime) : 'Time\'s Up!'}
        </div>
      )}
      
      <div className="quiz-header">
        <span>Question {questionIndex + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div id="question-text" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <input
        type="text"
        id="text-answer"
        placeholder="Type your answer here"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isAnswered}
      />
      <div id="feedback" className={feedback.type}>
        {feedback.message}
      </div>
      {!isAnswered ? (
        <button onClick={handleCheckAnswer}>Submit</button>
      ) : (
        <button onClick={handleNextQuestion}>Next Question →</button>
      )}
    </div>
  );
}

export default QuizView;