import { useEffect, useState } from "react";
import "./App.css";


type Note = {
  id: number;
  title: string;
  content: string;
};

const API_URL = "http://localhost:4000";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const res = await fetch(`${API_URL}/api/notes`);
    const data = await res.json();
    setNotes(data);
  }

  async function createNote() {
    if (!title || !content) return;

    await fetch(`${API_URL}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    });

    setTitle("");
    setContent("");
    fetchNotes();
  }

  async function deleteNote(id: number) {
    await fetch(`${API_URL}/api/notes/${id}`, {
      method: "DELETE"
    });

    fetchNotes();
  }

  return (
    <div className="app">

    {/* Create Note */}
    <section className="create-note-container">

      <header>
        <h1>My Notes</h1>
      </header>

      <section className="create-note">
          <h2>Create Note</h2>

          <input
            type="text"
            placeholder="Title"
            id="inputTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={createNote}>
            Add Note
          </button>
      </section>
    </section>

    {/* Notes */}
    <section className="notes">

      {notes.length === 0 && (
        <p className="empty">No notes yet. Write one above.</p>
      )}

      {notes.map((note) => (
        <div key={note.id} className="note">

          <div className="note-content">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>

          <div className="note-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}> Delete </button>
          </div>

        </div>
      ))}
    </section>

  </div>
  );
}

export default App;
