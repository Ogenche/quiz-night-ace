import React, { useState } from 'react';

function FlashcardView({ questions, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div id="flashcard-box">
        <p>No flashcards available.</p>
        <button onClick={onBack}>Back to Menu</button>
      </div>
    );
  }

  const handleNext = () => {
    setIsFlipped(false); // Show the front of the next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrev = () => {
    setIsFlipped(false); // Show the front of the previous card
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  const currentCard = questions[currentIndex];

  return (
    <div>
      <a onClick={onBack} className="back-link">
        ← Back to Main Menu
      </a>
      <div id="flashcard-box">
        <div
          className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card-face card-front">
            {/* Use dangerouslySetInnerHTML to render question HTML (like images) */}
            <div dangerouslySetInnerHTML={{ __html: currentCard.question }} />
          </div>
          <div className="card-face card-back">
            {currentCard.answer[0]}
          </div>
        </div>
        <div className="flashcard-nav">
          <button onClick={handlePrev}>← Prev</button>
          <span>{currentIndex + 1} / {questions.length}</span>
          <button onClick={handleNext}>Next →</button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardView;