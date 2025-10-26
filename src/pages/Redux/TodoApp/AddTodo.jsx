import { useState } from "react";

export const AddTodo = ({ handleAddNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="flex items-center gap-4">
      <span>Add Todo:</span>
      <input
        type="text"
        className="border rounded px-2 py-1"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddNewTodo(newTodo);
              setNewTodo("");
          }
        }}
      />
      <button
        className="border rounded px-2 py-1"
        onClick={() => {
          if (!newTodo || newTodo.length === 0) {
            alert("please add todo");
            return;
          }
          handleAddNewTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};