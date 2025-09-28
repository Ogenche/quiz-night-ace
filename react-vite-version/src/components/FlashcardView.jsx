import React, { useState, useEffect, useCallback } from 'react';

function FlashcardView({ questions, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [displayedCard, setDisplayedCard] = useState(questions[0]);
  const [isChanging, setIsChanging] = useState(false);
  
  // Precompute next and previous indices
  const nextIndex = (currentIndex + 1) % questions.length;
  const prevIndex = (currentIndex - 1 + questions.length) % questions.length;

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setIsChanging(true);
    setCurrentIndex(nextIndex);
  }, [nextIndex]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setIsChanging(true);
    setCurrentIndex(prevIndex);
  }, [prevIndex]);
  
  // Prefetch next card
  useEffect(() => {
    const img = new Image();
    if (questions[nextIndex]?.question.includes('<img')) {
      const match = questions[nextIndex].question.match(/src="([^"]+)"/);
      if (match) {
        img.src = match[1];
      }
    }
  }, [currentIndex, questions, nextIndex]);

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => {
        setDisplayedCard(questions[currentIndex]);
        setIsChanging(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isChanging, currentIndex, questions]);

  if (!questions || questions.length === 0) {
    return (
      <div id="flashcard-box">
        <a className="back-link" onClick={onBack} style={{ marginBottom: '10px' }}>
          ← Back to Main Menu
        </a>
        <p>No flashcards available.</p>
      </div>
    );
  }



  return (
    <div>
      <a className="back-link" onClick={onBack} style={{ marginBottom: '10px' }}>
        ← Back to Main Menu
      </a>
      <div id="flashcard-box">
        <div
          className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}
          onClick={() => !isChanging && setIsFlipped(!isFlipped)}
        >
          <div className="card-face card-front">
            {/* Use dangerouslySetInnerHTML to render question HTML (like images) */}
            <div dangerouslySetInnerHTML={{ __html: displayedCard.question }} />
          </div>
          <div className="card-face card-back">
            {displayedCard.answer[0]}
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