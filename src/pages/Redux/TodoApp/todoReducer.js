import { v4 as uuidv4 } from "uuid";

const statusFilters = {
  all: "all",
  completed: "completed",
};

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "Do dishes",
      completed: false,
      color: "red",
    },
    {
      id: uuidv4(),
      name: "Clean room",
      completed: true,
      color: "blue",
    },
  ],
  filters: {
    status: statusFilters.all,
    colors: ["red", "blue"],
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      const newTodo = {
        name: action.payload.name,
        completed: false,
        id: uuidv4(),
      };
      return {
        ...state,
        todos: [newTodo,...state.todos],
      };
    }
    case "todo/remove": {
      const todoId = action.payload.id;

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != todoId),
      };
    }
    case "todo/check": {
      const isChecked = action.payload.isChecked;
      const todoId = action.payload.id;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id == todoId) {
            return {
              ...todo,
              completed: isChecked,
            };
          }
          return todo;
        }),
      };
    }

    case "todo/markAll": {
      const newTodos = state.todos.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

      return {
        ...state,
        todos: newTodos,
      };
    }

    case "todo/removeAllCompleted": {
      const newTodos = state.todos.filter((todo) => !todo.completed);
      return {
        ...state,
        todos: newTodos,
      };
    }

    case "todo/filterChange": {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload.status,
        },
      };
    }

    default:
      return state;
  }
};
