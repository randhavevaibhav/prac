export const Todo = ({ id, name, completed, onRemoveTodo, onTodoCheck }) => {
  return (
    <li className="flex gap-4 items-center max-w-[500px]">
      <label
        className={`cursor-pointer select-none ${
          completed ? `line-through` : null
        }`}
        htmlFor={`todo_${id}`}
      >
        <input
          type="checkbox"
          id={`todo_${id}`}
          name={`todo_${id}`}
          checked={completed}
          onChange={(e) =>
            onTodoCheck({
              isChecked: e.target.checked,
              id,
            })
          }
        />

        <span className="ml-2">{name}</span>
      </label>
      <button
        onClick={() => onRemoveTodo(id)}
        className="border rounded px-2 py-1 ml-auto"
      >
        Remove
      </button>
    </li>
  );
};