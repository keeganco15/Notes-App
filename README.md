# Personal Notes App

A full-stack note-taking application built with a Node/Express backend and a React frontend.  
Allows creation, editing and deletion of notes — a clean project for CRUD operations.

## Project Overview
  
This is a project that provides a minimal but complete notes management experience:
- Users can create new notes (title + content).  
- View existing notes in a list.  
- Edit or delete notes.  

The goal was to build a maintainable CRUD application while practicing a realistic full-stack setup: frontend in React (with TypeScript), backend in Node.js + Express, and JSON as the data exchange format. 

---

## Tech Stack

| Layer       | Technology         |
|------------|--------------------------|
| Frontend   | React + TypeScript        |
| Styles     | CSS + any custom styling (in `client/src` etc.) |
| Backend    | Node.js + Express         |
| Data Layer | (e.g. JSON files or if you integrate a database — Postgres / SQLite / etc.) |
| Communications | REST API (`fetch` from frontend → backend) |

> Note: The setup uses a REST API at `http://localhost:4000/api/notes` (see `server/`) and the React frontend expects that endpoint by default.  

---

## Installation & Running Locally

Assuming you have Node.js installed:

```bash
# Clone the repo
git clone https://github.com/keeganco15/Notes-App.git
cd Notes-App

# Install dependencies for backend
cd server
npm install

# (Optional) If you have a database or .env, configure it now

# Start backend
npm start         # or whatever your start script is, e.g. `node index.js`

# In a separate terminal: install and start frontend
cd ../client
npm install
npm start         # this should run React in development mode (e.g. on http://localhost:3000)
```

After that:  
- Backend listening on port `4000` (or as configured)  
- Frontend on `3000` (or via CRA default)  
You should be able to open the React UI, create notes, and see them fetched from the backend.

---

## Usage

1. Open the frontend in your browser.  
2. Use the **Create Note** form to add a note (title + content).  
3. After submission, the note list refreshes and shows your new note.  
4. From the note list, you can:
   - **View** — view details of a note.  
   - **Edit** — prefill the form with existing note data, update, and save.  
   - **Delete** — remove a note permanently.  
5. The UI will show notes live, and the backend handles storing/updating/deleting (JSON file or database depending on setup).

---

## Features (current)

- Create new notes (title + content)  
- List all notes  
- Edit existing notes  
- Delete notes  
- React + TypeScript frontend for type safety  
- REST API backend with Node.js + Express  
- Clean, minimal UI — easy to extend  

---

## About Me / Attribution

Built by **Keegan Doherty**.  
Part of my personal portfolio and full-stack development learning journey.  

Feel free to open issues or contribute enhancements if you find something useful or want to extend the app.

---

## 📄 License

This project is provided “as is” — you can feel free to adapt or reuse it for learning or personal projects.  

