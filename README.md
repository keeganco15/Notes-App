# Personal Notes App

A full-stack note-taking application built with a Node/Express backend and a React frontend.  
Allows creation, editing and deletion of notes - a clean project for CRUD operations.

## Project Overview
  
This is a project that provides a minimal but complete notes management experience:
- Users can create new notes (title + content).  
- View existing notes in a list.  
- Edit or delete notes.  

The goal was to build a maintainable CRUD application while practising a realistic full-stack setup: frontend in React (with TypeScript), backend in Node.js + Express, and JSON as the data exchange format. 

---

## Tech Stack
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-FF6C37?style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
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

# Run build
npm run build

# Start backend
npm start         # or whatever your start script is, e.g. `node index.js`

# In a separate terminal: install and start frontend
cd ../client
npm install
npm run dev         #  (e.g. on http://localhost:3000)
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
   - **View** - view details of a note.  
   - **Edit** - prefill the form with existing note data, update, and save.  
   - **Delete** - remove a note permanently.  
5. The UI will show notes live, and the backend handles storing/updating/deleting (JSON file or database depending on setup).

---

## Features

- Create new notes (title + content)  
- List all notes  
- Edit existing notes  
- Delete notes  
- React + TypeScript frontend for type safety  
- REST API backend with Node.js + Express  
- Clean, minimal UI 

---


## License

MIT

