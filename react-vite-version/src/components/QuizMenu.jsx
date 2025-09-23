import React from 'react';

function QuizMenu({
  quizzes,
  selectedQuiz,
  setSelectedQuiz,
  difficulty,
  setDifficulty,
  onStartPractice,
  onStartFull,
  onShowFlashcards,
}) {
  return (
    <main>
      <div className="menu-container">
        <section className="menu-box">
          <h2>Start a Practice Quiz</h2>
          <p>Choose a quiz and difficulty for a quick 10-question quiz.</p>
          <div className="form-group">
            <label htmlFor="quiz-select">Quiz Category:</label>
            <select
              id="quiz-select"
              value={selectedQuiz}
              onChange={(e) => setSelectedQuiz(e.target.value)}
            >
              {quizzes.map((quiz) => (
                <option key={quiz.id} value={quiz.file}>
                  {quiz.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty:</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="mixed">Mixed</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button onClick={onStartPractice}>Start Practice (10 Qs)</button>
        </section>

        <section className="menu-box">
          <h2>The Main Event</h2>
          <p>Simulate a full quiz night with 50 questions from all categories and difficulties.</p>
          <button className="special-button" onClick={onStartFull}>
            Start Full Night Version (50 Qs)
          </button>
        </section>

        <section className="menu-box">
          <h2>Revision Zone</h2>
          <p>Study questions and answers using flashcards without the pressure.</p>
          <button onClick={onShowFlashcards}>Go to Flashcards</button>
        </section>
      </div>
    </main>
  );
}

export default QuizMenu;