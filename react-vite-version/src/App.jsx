import React, { useState, useEffect } from 'react';
import QuizMenu from './components/QuizMenu';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView'; // <-- 1. IMPORT the new component
import TimerSelection from './components/TimerSelection';

function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'timer-select', 'quiz', 'flashcards', 'results'
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');

  // Timer-related state
  const [selectedTimer, setSelectedTimer] = useState(null); // null for unlimited, number for seconds
  const [remainingTime, setRemainingTime] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        // Add priority fetch hint
        const quizzesPromise = fetch('/quizzes.json', {
          priority: 'high'
        }).then(r => r.json());

        // Preload common quiz files
        const preloadPromises = ['general.json', 'flags.json'].map(file => 
          fetch(`/${file}`, { priority: 'low' }).then(r => r.json())
        );

        const [data] = await Promise.all([quizzesPromise, ...preloadPromises]);
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

  // New function to load all questions from all quiz files
  const loadAllQuizQuestions = async (difficulty, count) => {
    let allQuestions = [];
    for (const quiz of quizzes) {
      try {
        const response = await fetch(`/${quiz.file}`);
        const data = await response.json();
        if (difficulty === 'mixed') {
          allQuestions = allQuestions.concat(data.easy, data.medium, data.hard);
        } else {
          allQuestions = allQuestions.concat(data[difficulty] || []);
        }
      } catch (error) {
        console.error(`Skipping file ${quiz.file} due to error:`, error);
        continue;
      }
    }
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const questionsToLoad = shuffled.slice(0, count);
    if (questionsToLoad.length === 0) {
      alert("Sorry, no questions were found for the selected difficulty.");
      return false;
    }
    setQuestions(questionsToLoad);
    return true;
  };

  const handleStartPractice = async () => {
    const success = await loadQuizQuestions(selectedQuiz, difficulty, 10);
    if (success) setGameState('quiz');
  };

  const handleStartFull = async () => {
    console.log('Main Event button clicked');
    if (!quizzes || quizzes.length === 0) {
      alert("Quiz list is still loading. Please wait a moment and try again.");
      return;
    }
    // Instead of directly starting the quiz, go to timer selection
    setGameState('timer-select');
  };

  const handleTimerSelect = async (timerValue) => {
    setSelectedTimer(timerValue);
    setRemainingTime(timerValue);
    setIsTimerActive(false); // Timer will start when quiz begins
    
    const success = await loadAllQuizQuestions('mixed', 50);
    if (success) setGameState('quiz');
  };

  const handleShowFlashcards = async () => {
    console.log('Revision Zone (Flashcards) button clicked');
    if (!quizzes || quizzes.length === 0) {
      alert("Quiz list is still loading. Please wait a moment and try again.");
      return;
    }
    const success = await loadAllQuizQuestions('mixed', 5000); // Load all questions
    if (success) setGameState('flashcards');
  };

  const handleQuizEnd = (score, total) => {
    setIsTimerActive(false); // Stop the timer
    setFinalScore(score);
    setTotalQuestions(total);
    setGameState('results');
  };

  const handlePlayAgain = () => {
    // Reset all timer-related state
    setSelectedTimer(null);
    setRemainingTime(null);
    setIsTimerActive(false);
    setGameState('menu');
  };

  const renderGameState = () => {
    switch (gameState) {
      case 'timer-select':
        return (
          <TimerSelection 
            onTimerSelect={handleTimerSelect} 
            onBackToMenu={handlePlayAgain} 
          />
        );
        
      case 'quiz':
        return (
          <QuizView 
            questions={questions} 
            onQuizEnd={handleQuizEnd} 
            onBackToMenu={handlePlayAgain}
            selectedTimer={selectedTimer}
            remainingTime={remainingTime}
            setRemainingTime={setRemainingTime}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
          />
        );

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

  // Handler to go back to main menu
  const handleGoHome = () => setGameState('menu');

  return (
    <div className="container">
      <header>
        <h1 style={{ cursor: 'pointer' }} onClick={handleGoHome} title="Go to Home Page">
          Quiz Night Ace
        </h1>
        <p id="header-subtitle">Your personal trainer for Nairobi's ultimate trivia challenge.</p>
      </header>
      {renderGameState()}
    </div>
  );
}

export default App;