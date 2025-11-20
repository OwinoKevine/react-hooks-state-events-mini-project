// === components/CategoryFilter.js ===
import React from "react";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
return (
<div className="flex gap-2 p-2">
{categories.map((cat) => (
<button
key={cat}
className={`px-3 py-1 rounded border ${selectedCategory === cat ? "selected bg-blue-500 text-white" : ""}`}
onClick={() => onSelectCategory(cat)}
>
{cat}
</button>
))}
</div>
);
}
