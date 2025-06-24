/*
MIT License

Copyright (c) 2025 Jean Carlos <jeancarlos.ingenieria@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import React, { useState } from "react";

/**
 * Props for the Form component.
 * @property onAdd - Function to add a new task, receives the task text.
 */
interface FormProps {
  onAdd: (taskText: string) => void;
}

// UI text constants for accessibility and clarity
const INPUT_PLACEHOLDER = "Add a new task";
const INPUT_ARIA_LABEL = "Task name";
const FORM_ARIA_LABEL = "Add new task";
const BUTTON_TITLE = "Add task";
const BUTTON_ARIA_LABEL = "Add task";
const BUTTON_TEXT = "+";

/**
 * Form component for adding new tasks.
 * Handles input state and calls onAdd when a new task is submitted.
 */
export function Form({ onAdd }: FormProps) {
  const [value, setValue] = useState("");

  // Handles form submission and resets input if valid
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <form
      className="input-section"
      autoComplete="off"
      aria-label={FORM_ARIA_LABEL}
      onSubmit={handleSubmit}
    >
      <input
        autoFocus
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        aria-label={INPUT_ARIA_LABEL}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="add-btn"
        title={BUTTON_TITLE}
        aria-label={BUTTON_ARIA_LABEL}
        type="submit"
      >
        {BUTTON_TEXT}
      </button>
    </form>
  );
}
