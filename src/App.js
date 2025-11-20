import React, { useState } from "react";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";
import { TASKS, CATEGORIES } from "./data";


export default function App() {
const [tasks, setTasks] = useState(TASKS);
const [selectedCategory, setSelectedCategory] = useState("All");


const filteredTasks = tasks.filter((task) => {
if (selectedCategory === "All") return true;
return task.category === selectedCategory;
});


function handleDelete(taskText) {
setTasks(tasks.filter((task) => task.text !== taskText));
}

function handleCategorySelect(category) {
setSelectedCategory(category);
}

function handleAddTask(newTask) {
setTasks([...tasks, newTask]);
}

return (
<div className="App p-4">
<CategoryFilter
categories={CATEGORIES}
selectedCategory={selectedCategory}
onSelectCategory={handleCategorySelect}
/>
<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
<TaskList tasks={filteredTasks} onDelete={handleDelete} />
</div>
);
}
