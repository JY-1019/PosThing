import { useState, useEffect, useRef } from "react";
import registDragEvent from "./Drag";
import ReSize from "./Resize";
import QuillEditor from "../editor/QuillEditor";

import { inrange } from "../../utils/index";
import { DEFAULT_W, DEFAULT_H, BOUNDARY_MARGIN } from "../../config";

import "./StickyNote.css";

export default function StickyNote({ onClose }) {
  const stickyNoteRef = useRef(null);
  const [{ x, y, w, h }, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const centerX = window.innerWidth / 2 - 80;
    const centerY = window.innerHeight / 2 - 100;

    setPosition({ x: centerX, y: centerY, w: DEFAULT_W, h: DEFAULT_H });
  }, []);

  return (
    <div
      className="absolute"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <div
        className="sticky-note"
        ref={stickyNoteRef}
        style={{ width: w, height: h, left: x, top: y }}
        {...registDragEvent((deltaX, deltaY) => {
          setPosition({
            x: inrange(
              x + deltaX,
              BOUNDARY_MARGIN,
              window.innerWidth - w - BOUNDARY_MARGIN
            ),
            y: inrange(
              y + deltaY,
              BOUNDARY_MARGIN,
              window.innerHeight - h - BOUNDARY_MARGIN
            ),
            w,
            h,
          });
        }, true)}
      >
        <div className="flex justify-between mx-1">
          <div className="px-1 cursor-pointer" onClick={onClose}>
            &times;
          </div>
        </div>
      </div>
      <ReSize props={{ x, y, w, h, setPosition }} />
    </div>
  );
}
