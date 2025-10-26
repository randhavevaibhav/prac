import { useSelector, useDispatch } from "react-redux";
import { TodoDashBoard } from "./TodoDashBoard";
import { TodoActionButtons } from "./TodoActionButtons";
import { TodoFilters } from "./TodoFilters";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const todos = useSelector((state) => state.todoApp.todos);
  const filterStatus = useSelector((state) => state.todoApp.filters.status);
  const dispatch = useDispatch();

  const completedTodos = todos.filter((todo) => todo.completed);
  const totalTodos = todos?.length;
  const totalCompletedTodos = completedTodos?.length;
  const todoPresent = totalTodos > 0 ? true : false;
  const completedTodosPresent = totalCompletedTodos > 0 ? true : false;
  const allTodosMarkedCompleted = totalCompletedTodos === totalTodos;

  const filteredTodos = todos.filter((todos) => {
    if (filterStatus === "all") {
      return true;
    } else if (filterStatus === "completed") {
      return todos.completed;
    }
  });

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "todo/remove",
      payload: {
        id,
      },
    });
  };

  const handleTodoCheck = ({ isChecked, id }) => {
    dispatch({
      type: "todo/check",
      payload: {
        isChecked,
        id,
      },
    });
  };

  const handleAddNewTodo = (newTodo) => {
    dispatch({
      type: "todo/add",
      payload: {
        name: newTodo,
      },
    });
    dispatch({
      type: "todo/filterChange",
      payload: {
        status: "all",
      },
    });
  };

  const handleMarkAll = () => {
    dispatch({
      type: "todo/markAll",
    });
  };

  const handleRemoveAllCompleted = () => {
    dispatch({
      type: "todo/removeAllCompleted",
    });
  };
  const handleFilterChange = (status) => {
    dispatch({
      type: "todo/filterChange",
      payload: { status },
    });
  };


  return (
    <div className="flex flex-col gap-4">
      <h2 className="mr-10 my-4 font-semibold text-2xl">Todo:</h2>
      <TodoDashBoard
        totalCompletedTodos={totalCompletedTodos}
        totalTodos={totalTodos}
      />

      <div className="flex md:justify-between md:flex-row flex-col max-w-[800px] gap-2">
        <TodoActionButtons
          allTodosMarkedCompleted={allTodosMarkedCompleted}
          completedTodosPresent={completedTodosPresent}
          todoPresent={todoPresent}
          handleRemoveAllCompleted={handleRemoveAllCompleted}
          handleMarkAll={handleMarkAll}
        />
        <TodoFilters
          onFilterChange={handleFilterChange}
          todoPresent={todoPresent}
          completedTodosPresent={completedTodosPresent}
        />
      </div>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      {todoPresent ? (
        <TodoList
          todos={filteredTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleTodoCheck={handleTodoCheck}
        />
      ) : (
        "No todos present"
      )}
    </div>
  );
};
