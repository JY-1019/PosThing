import React, { useCallback } from "react";
import Quil from "quill";
import "quill/dist/quill.snow.css";

import "./Editor.css";

export default function QuillEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quil(editor, { theme: "bubble" });
  }, []);

  return <div ref={wrapperRef}></div>;
}
