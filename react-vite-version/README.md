# Quiz Night Ace - React + Vite Version 🚀

A modern, interactive quiz application built with React and Vite. Challenge yourself with various categories of questions and track your progress with a built-in scoring system.

🔗 **[Live Demo](https://quiz-night-ace.vercel.app)**

## ✨ Features

- **Multiple Quiz Categories:**

  - General Knowledge
  - Geography
  - Technology
  - Entertainment
  - Food
  - Music
  - Sports
  - Kenya
  - UK
  - And more!

- **Two Study Modes:**

  - Quiz Mode: Test your knowledge with scored questions
  - Flashcard Mode: Review questions with smooth card transitions

- **Dynamic Difficulty Levels:**

  - Easy
  - Medium
  - Hard
  - Mixed (Random selection)

- **Performance Optimized:**
  - Fast loading times
  - Smooth animations
  - Optimized image loading
  - Efficient state management

## 🛠️ Technical Features

- Built with React and Vite for optimal performance
- Component-based architecture for maintainability
- External JSON data storage for easy content updates
- CSS animations for smooth transitions
- Responsive design for all devices
- Optimized Core Web Vitals metrics

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ogenche/quiz-night-ace.git
   cd quiz-night-ace/react-vite-version
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in your terminal (typically http://localhost:5173)

## 📁 Project Structure

```
react-vite-version/
├── public/           # Static assets and quiz data
│   ├── quizzes.json # Master list of all quizzes
│   └── *.json       # Individual quiz category files
├── src/
│   ├── components/  # React components
│   │   ├── QuizView.jsx
│   │   ├── FlashcardView.jsx
│   │   ├── QuizMenu.jsx
│   │   └── ResultsView.jsx
│   ├── App.jsx     # Main application component
│   └── main.jsx    # Application entry point
└── index.html      # HTML entry point
```

## Features in Detail

### Quiz Mode

- Select from multiple categories
- Choose difficulty level
- Track score as you progress
- Review correct answers
- Final score summary

### Flashcard Mode

- Flip cards to reveal answers
- Smooth transitions between cards
- Progress tracking
- Easy navigation controls

## 🔄 Adding New Quizzes

To add a new quiz category:

1. Create a new JSON file in the `public/` directory
2. Follow the existing quiz file format:
   ```json
   {
     "easy": [...],
     "medium": [...],
     "hard": [...]
   }
   ```
3. Add an entry to `quizzes.json`

## 🌐 Deployment

This project is deployed on Vercel and can be accessed at [https://quiz-night-ace.vercel.app](https://quiz-night-ace.vercel.app)

## 🛠️ Built With

- React
- Vite
- CSS3
- JSON

## 📝 License

This project is MIT licensed.
