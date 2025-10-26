import { Todo } from "./Todo";

export const TodoList = ({ todos, handleRemoveTodo, handleTodoCheck }) => {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => {
        return (
          <Todo
            name={todo.name}
            completed={todo.completed}
            key={todo.id}
            id={todo.id}
            onRemoveTodo={handleRemoveTodo}
            onTodoCheck={handleTodoCheck}
          />
        );
      })}
    </ul>
  );
};
