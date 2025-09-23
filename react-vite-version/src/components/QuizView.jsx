import React, { useState, useEffect } from 'react';

// Utility to normalize strings for answer checking
const normalizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^\w]/g, '');
};

function QuizView({ questions, onQuizEnd }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[questionIndex];

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

  return (
    <div id="quiz-box">
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