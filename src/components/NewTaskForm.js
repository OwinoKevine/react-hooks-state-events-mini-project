// === components/NewTaskForm.js ===
import React, { useState } from "react";

export default function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(
    categories.find((cat) => cat !== "All") || ""
  ); // default to first actual category

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return; // prevent empty tasks

    const newTask = {
      text,
      category,
    };

    onTaskFormSubmit(newTask);

    // Reset form
    setText("");
    setCategory(categories.find((cat) => cat !== "All") || "");
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="new-task-form"
      className="p-4 border rounded grid gap-2 mt-4">
      
      <label>
        Task:
        <input
          type="text"
          placeholder="New task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </label>

      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>

      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
