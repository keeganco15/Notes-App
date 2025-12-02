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
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const res = await fetch(`${API_URL}/api/notes`);
    const data = await res.json();
    setNotes(data);
  }

  async function deleteNote(id: number) {
    await fetch(`${API_URL}/api/notes/${id}`, {
      method: "DELETE"
    });

    fetchNotes();
  }

  function startEditing(note: Note) {
    // put form in edit mode
    setEditingNoteId(note.id);

    // preload form fields
    setTitle(note.title);
    setContent(note.content);
  }

  async function saveNote() {
    if (!title || !content) return;

    if (editingNoteId === null) {
      // CREATE new note
      await fetch(`${API_URL}/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
      });
    } else {
      // UPDATE existing note
      await fetch(`${API_URL}/api/notes/${editingNoteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
      });
    }

    // Reset
    setEditingNoteId(null);
    setSelectedNote(null);
    setTitle("");
    setContent("");

    fetchNotes();
  }

  function cancelEdit() {
    setEditingNoteId(null);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }



  return (
    <div className="app">

    {/* note creation */}
    <section className="create-note-container">

      <header>
        <h1>My Notes</h1>
      </header>

      <div className="create-note">
          <h2>Create Note</h2>

          <input type="text" placeholder="Title" id="inputTitle" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="Write your note..." value={content} onChange={(e) => setContent(e.target.value)}/>

          <div className="creat-note-actions">
            <button onClick={saveNote}>
              {editingNoteId ? "Save Changes" : "Add Note"}
            </button>

            {editingNoteId && (
              <button className="cancel-btn" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>

      </div>
    </section>

    {/* displaying the notes */}
      <section className="notes-section">

        {/* only show the selected note */}
        {selectedNote ? (
          <div className="single-note-view">
            <h2>{selectedNote.title}</h2>
            <p>{selectedNote.content}</p>

            <button onClick={() => setSelectedNote(null)}>Back</button>
          </div>
        ) : (
          <>
            {notes.length === 0 && (<p className="empty">No notes yet...</p>)}

            {notes.map((note) => (
              <div key={note.id} className={`note ${editingNoteId === note.id ? "editing" : ""}`}>
                
                <div className="note-content">
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                </div>

                <div className="note-actions">
                  <button className="view-btn" onClick={() => {setSelectedNote(note); setEditingNoteId(null);}}>  
                    {/* to ensure we are in view only, not edit */}
                    View </button>
                  <button className="edit-btn" onClick={() => startEditing(note)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                </div>

              </div>
            ))}
          </>
        )}
      </section>


  </div>
  );
}

export default App;
