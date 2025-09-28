# Quiz Night Ace 🏆

This repository contains a fun, interactive quiz application built to test your general knowledge. It showcases the evolution of a project from a simple, single-page application into a modern, scalable web app.

---

## Versions

This project exists in two versions, located in separate folders:

### 1. Original Vanilla JS Version

**Folder:** [`/original-vanilla-js`](./original-vanilla-js/)

This is the first version of the application, built with plain HTML, CSS, and JavaScript. All the logic, styling, and questions are contained within three files. It's an example of a functional, self-contained single-page application.

**To Run:**
Simply open the `index.html` file in your browser.

### 2. Modern React + Vite Version

**Folder:** [`/react-vite-version`](./react-vite-version/)
- **[View Live Demo](https://quiz-night-ace.vercel.app)**

This is a complete rebuild of the original application using a modern tech stack to improve scalability, maintainability, and developer experience.

**Key Features & Improvements:**

- **React:** The UI is broken down into reusable components for better organization.
- **Vite:** Provides a blazing-fast development server and optimized builds.
- **Dynamic Data:** Questions are stored in external **JSON** files and fetched on demand.
- **Scalable:** New quiz categories can be added simply by creating a new JSON file and adding an entry to the `quizzes.json` master list, without touching the application code.

**To Run:**

1.  Navigate to the project directory: `cd react-vite-version`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`

---

My Goal for the project: Build application with fundamental web technologies and refactor using modern frameworks like React to create more robust and scalable solutions.
