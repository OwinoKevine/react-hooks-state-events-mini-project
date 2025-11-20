// === components/TaskList.js ===
import React from "react";
import Task from "./Task";


export default function TaskList({ tasks, onDelete }) {
return (
<div className="mt-4 grid gap-2">
{tasks.map((task) => (
<Task key={task.text} text={task.text} category={task.category} onDelete={onDelete} />
))}
</div>
);
}
