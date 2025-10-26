export const TodoDashBoard = ({ totalTodos, totalCompletedTodos }) => {
  return (
    <>
      <span>
        Total todos :<span className="ml-2">{totalTodos}</span>
      </span>
      <span>
        Completed todos :<span className="ml-2">{totalCompletedTodos}</span>
      </span>
    </>
  );
};
