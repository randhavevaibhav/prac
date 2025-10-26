import { useSelector } from "react-redux";

export const TodoFilters = ({
  onFilterChange,
  completedTodosPresent,
  todoPresent,
}) => {

const filterStatus = useSelector((state) => state.todoApp.filters.status);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Filter:</h2>
      <div className="flex gap-2" >
        {todoPresent ? (
          <button
            className={`border rounded px-2 py-1 self-start ${filterStatus===`all`?`bg-green-500`:``}`}
            onClick={() => onFilterChange("all")}
           
          >
            All
          </button>
        ) : null}
        {completedTodosPresent ? (
          <button
            className={`border rounded px-2 py-1 self-start ${filterStatus===`completed`?`bg-green-500`:``}`}
            onClick={() => onFilterChange("completed")}
           
          >
            Completed
          </button>
        ) : null}
      </div>
    </div>
  );
};