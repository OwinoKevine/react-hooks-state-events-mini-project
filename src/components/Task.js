export default function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      {text}
      <button className="delete" onClick={() => onDelete(text)}>
        X
      </button>
    </div>
  );
}

