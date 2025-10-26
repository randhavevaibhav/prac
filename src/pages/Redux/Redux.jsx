import { Provider } from "react-redux";
import { store } from "./store";
import { Link, Outlet } from "react-router-dom";
import { paths } from "../../constants";

const Redux = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col gap-2">
        <Link to={paths.reduxCounter} className="text-blue-500 underline">
          1.Counter
        </Link>
        <Link to={paths.reduxTodo} className="text-blue-500 underline">
          2.Todo
        </Link>
      </div>

      <Outlet />
    </Provider>
  );
};

export default Redux;
