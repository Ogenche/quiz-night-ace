import React, { useState, useEffect } from 'react';

function CategorySelection({ quizzes, onCategoriesSelect, onBackToMenu }) {
  const [selectedCategories, setSelectedCategories] = useState([]); // Start with empty array
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preloadedQuestions, setPreloadedQuestions] = useState({});
  const [loadingPhase, setLoadingPhase] = useState(''); // 'preloading' or 'loading-categories'

  // Preload all quiz JSON files when component mounts
  useEffect(() => {
    const preloadAllQuizzes = async () => {
      setIsLoading(true);
      setLoadingPhase('preloading');
      const loadedQuestions = {};
      
      for (let i = 0; i < quizzes.length; i++) {
        const quiz = quizzes[i];
        try {
          const response = await fetch(`/${quiz.file}`);
          const data = await response.json();
          loadedQuestions[quiz.file] = data;
          setLoadingProgress(Math.round(((i + 1) / quizzes.length) * 100));
        } catch (error) {
          console.error(`Failed to preload ${quiz.file}:`, error);
        }
      }
      
      setPreloadedQuestions(loadedQuestions);
      setIsLoading(false);
      setLoadingPhase('');
    };

    if (quizzes && quizzes.length > 0) {
      preloadAllQuizzes();
    }
  }, [quizzes]);

  // Remove the auto-select all categories effect

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId];
      
      // Update "All" checkbox state
      setIsAllSelected(newSelection.length === quizzes.length);
      return newSelection;
    });
  };

  const handleAllToggle = () => {
    if (isAllSelected) {
      setSelectedCategories([]);
      setIsAllSelected(false);
    } else {
      const allCategoryIds = quizzes.map(quiz => quiz.id);
      setSelectedCategories(allCategoryIds);
      setIsAllSelected(true);
    }
  };

  const loadQuestionsFromCategories = async (categoryIds) => {
    setIsLoading(true);
    setLoadingPhase('loading-categories');
    setLoadingProgress(0);
    
    let allQuestions = [];
    const selectedQuizzes = quizzes.filter(quiz => categoryIds.includes(quiz.id));
    
    for (let i = 0; i < selectedQuizzes.length; i++) {
      const quiz = selectedQuizzes[i];
      try {
        // Use preloaded questions if available, otherwise fetch
        let data;
        if (preloadedQuestions[quiz.file]) {
          data = preloadedQuestions[quiz.file];
        } else {
          const response = await fetch(`/${quiz.file}`);
          data = await response.json();
        }
        
        // Combine all difficulty levels
        const questions = [...(data.easy || []), ...(data.medium || []), ...(data.hard || [])];
        allQuestions = allQuestions.concat(questions);
        
        // Update progress
        setLoadingProgress(Math.round(((i + 1) / selectedQuizzes.length) * 100));
      } catch (error) {
        console.error(`Failed to load ${quiz.file}:`, error);
      }
    }
    
    // Shuffle the combined questions
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setIsLoading(false);
    setLoadingPhase('');
    
    return shuffledQuestions;
  };

  const handleStartFlashcards = async () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category to continue.');
      return;
    }

    const questions = await loadQuestionsFromCategories(selectedCategories);
    if (questions.length > 0) {
      onCategoriesSelect(questions);
    } else {
      alert('No questions found in the selected categories.');
    }
  };

  const getSelectedCategoryNames = () => {
    return quizzes
      .filter(quiz => selectedCategories.includes(quiz.id))
      .map(quiz => quiz.name)
      .join(', ');
  };

  return (
    <div id="quiz-box">
      <a className="back-link" onClick={onBackToMenu} style={{ marginBottom: '20px' }}>
        ← Back to Main Menu
      </a>
      
      <h2>Choose Categories for Flashcards</h2>
      <p style={{ marginBottom: '25px', fontSize: '1.1rem', opacity: 0.9 }}>
        Select which quiz categories you'd like to practice with flashcards:
      </p>

      <div className="category-selection">
        {/* Select All Checkbox */}
        <div className="category-item select-all">
          <label className="category-label">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleAllToggle}
              disabled={isLoading}
            />
            <span className="checkmark"></span>
            <span className="category-name">Select All Categories</span>
            <span className="category-count">({quizzes.length} categories)</span>
          </label>
        </div>

        {/* Individual Category Checkboxes */}
        <div className="categories-list">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="category-item">
              <label className="category-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(quiz.id)}
                  onChange={() => handleCategoryToggle(quiz.id)}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
                <span className="category-name">{quiz.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Categories Summary */}
      {selectedCategories.length > 0 && (
        <div className="selection-summary">
          <p><strong>Selected:</strong> {getSelectedCategoryNames()}</p>
          <p><strong>Categories:</strong> {selectedCategories.length} of {quizzes.length}</p>
        </div>
      )}

      {/* Loading Progress */}
      {isLoading && (
        <div className="loading-container">
          <div className="loading-text">
            {loadingPhase === 'preloading' 
              ? `Preloading quiz data... ${loadingProgress}%`
              : `Loading selected categories... ${loadingProgress}%`
            }
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Start Button */}
      <button 
        onClick={handleStartFlashcards}
        disabled={selectedCategories.length === 0 || isLoading}
        className="start-flashcards-button"
        style={{ marginTop: '20px' }}
      >
        {isLoading ? 'Loading...' : 'Start Flashcards'}
      </button>
    </div>
  );
}

export default CategorySelection;