/*
MIT License

Copyright (c) 2025 Jean Carlos <jeancarlos.ingenieria@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
 */

import { useState } from "react";

/**
 * Props for the TaskItem component.
 */
interface TaskItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

const CHECKBOX_TYPE = "checkbox";
const DELETE_TITLE = "Delete task";
const DELETE_ARIA_LABEL = "Delete task";
const DELETE_SYMBOL = "×";

/**
 * Renders a single task item with edit, toggle,
 * and delete functionality.
 */
export function TaskItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onUpdate,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdate(id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type={CHECKBOX_TYPE}
        id={id}
        checked={completed}
        onChange={() => onToggle(id)}
      />
      {isEditing ? (
        <>
          <input
            className="edit-task-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            onBlur={handleSave}
            autoFocus
          />
        </>
      ) : (
        <>
          <span
            className={completed ? "completed" : ""}
            style={{
              textDecoration: completed ? "line-through" : "none",
              cursor: completed ? "default" : "pointer",
              color: completed ? "#888" : "inherit",
            }}
            onDoubleClick={() => {
              if (!completed) setIsEditing(true);
            }}
          >
            {text}
          </span>
        </>
      )}
      <button
        className="delete-btn"
        title={DELETE_TITLE}
        aria-label={DELETE_ARIA_LABEL}
        onClick={() => onDelete(id)}
      >
        {DELETE_SYMBOL}
      </button>
    </li>
  );
}
