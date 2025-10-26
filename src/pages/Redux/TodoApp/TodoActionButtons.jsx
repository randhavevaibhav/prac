export const TodoActionButtons = ({
  completedTodosPresent,
  allTodosMarkedCompleted,
  todoPresent,
  handleMarkAll,
  handleRemoveAllCompleted,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Actions:</h2>
      <div className="flex gap-4">
        {todoPresent &&!allTodosMarkedCompleted? (
          <button
            className="border rounded px-2 py-1 self-start"
            onClick={handleMarkAll}
          >
            Mark All Completed
          </button>
        ) : null}
        {completedTodosPresent ? (
          <button
            className="border rounded px-2 py-1 self-start"
            onClick={handleRemoveAllCompleted}
          >
            Remove All Completed
          </button>
        ) : null}
      </div>
    </div>
  );
};
