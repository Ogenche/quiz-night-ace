import React, { useState, useEffect } from 'react';
import QuizMenu from './components/QuizMenu';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView'; // <-- 1. IMPORT the new component

function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'quiz', 'flashcards', 'results'
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');

  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/quizzes.json');
        const data = await response.json();
        setQuizzes(data);
        if (data.length > 0) {
          setSelectedQuiz(data[0].file);
        }
      } catch (error) {
        console.error("Failed to fetch quizzes list:", error);
      }
    };
    fetchQuizzes();
  }, []);

  const loadQuizQuestions = async (fileName, difficulty, count) => {
    try {
      const response = await fetch(`/${fileName}`);
      const data = await response.json();

      let filteredQuestions = [];
      if (difficulty === 'mixed') {
        filteredQuestions = [...data.easy, ...data.medium, ...data.hard];
      } else {
        filteredQuestions = data[difficulty] || [];
      }

      const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
      const questionsToLoad = shuffled.slice(0, count);

      if (questionsToLoad.length === 0) {
        alert("Sorry, no questions were found for the selected category and difficulty.");
        return false;
      }

      setQuestions(questionsToLoad);
      return true;
    } catch (error) {
      console.error(`Failed to load quiz: ${fileName}`, error);
      return false;
    }
  };

  const handleStartPractice = async () => {
    const success = await loadQuizQuestions(selectedQuiz, difficulty, 10);
    if (success) setGameState('quiz');
  };

  const handleStartFull = async () => {
    const success = await loadQuizQuestions(selectedQuiz, 'mixed', 50);
    if (success) setGameState('quiz');
  };

  const handleShowFlashcards = async () => {
    const success = await loadQuizQuestions(selectedQuiz, 'mixed', 500); // Load all questions
    if (success) setGameState('flashcards');
  };

  const handleQuizEnd = (score, total) => {
    setFinalScore(score);
    setTotalQuestions(total);
    setGameState('results');
  };

  const handlePlayAgain = () => {
    setGameState('menu');
  };

  const renderGameState = () => {
    switch (gameState) {
      case 'quiz':
        return <QuizView questions={questions} onQuizEnd={handleQuizEnd} />;

      // --- 2. ADD the case for flashcards ---
      case 'flashcards':
        return <FlashcardView questions={questions} onBack={handlePlayAgain} />;

      case 'results':
        return (
          <div id="quiz-box">
            <h2>Quiz Complete!</h2>
            <p style={{ fontSize: '1.5rem' }}>Your final score is:</p>
            <p style={{ fontSize: '3rem', color: 'var(--accent-color)' }}>
              {finalScore} / {totalQuestions}
            </p>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        );
      case 'menu':
      default:
        return (
          <QuizMenu
            quizzes={quizzes}
            selectedQuiz={selectedQuiz}
            setSelectedQuiz={setSelectedQuiz}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            onStartPractice={handleStartPractice}
            onStartFull={handleStartFull}
            onShowFlashcards={handleShowFlashcards}
          />
        );
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Quiz Night Ace 🏆</h1>
        <p id="header-subtitle">Your personal trainer for Nairobi's ultimate trivia challenge.</p>
      </header>
      {renderGameState()}
    </div>
  );
}

export default App;