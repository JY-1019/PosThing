import { useState, useRef } from "react";
import "./StickyNote.css";

function StickyNote({ onClose }) {
  const [allowMove, setAllowMove] = useState(false);
  const stickyNoteRef = useRef(null);
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  function hanldelMouseDown(e) {
    setAllowMove(true);
    const dimensions = stickyNoteRef.current.getBoundingClientRect();
    setDx(e.clientX - dimensions.x);
    setDy(e.clientY - dimensions.y);
  }

  function handleMouseMove(e) {
    if (allowMove) {
      // Move the sticky note
      console.log("Allow move");
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      console.log("inside mouse move", x, y);
      stickyNoteRef.current.style.left = x + "px";
      stickyNoteRef.current.style.top = y + "px";
    }
  }

  function handleMouseUp() {
    setAllowMove(false);
  }

  return (
    <div className="sticky-note" ref={stickyNoteRef}>
      <div
        className="sticky-note-header"
        onMouseDown={hanldelMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div>Sticky Note</div>
        <div className="close" onClick={onClose}>
          &times;
        </div>
      </div>

      {/* It should be a textEditor */}
      <textarea className="sticky-note-body"></textarea>
    </div>
  );
}

export default StickyNote;
