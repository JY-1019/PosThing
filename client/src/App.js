import { useState } from "react";
import StickyNote from "./components/sticky-note/StickyNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }

  function removeNote(noteId) {
    setNotes(notes.filter((item) => item.id !== noteId));
  }

  return (
    <div>
      <div className="text-3xl font-bold underline">
        Sticky Note App with React
      </div>
      <button className="sticky-btn" onClick={addNote}>
        Add Note
      </button>
      <div className="absolute items-center justify-center">
        {notes.map((item) => (
          <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
