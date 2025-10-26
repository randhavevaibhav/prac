import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { paths } from "../../constants";


const componentList = [
  {
    id: 1,
    path: paths.sideMenu,
    name: "Side Menu",
  },
  {
    id: 2,
    path: paths.comments,
    name: "Comments",
  },
];

const UIComponent = ({ component ,idx}) => {
  return (<span className="underline text-blue-500">{`${idx}. `}<Link to={component.path}>{component.name}</Link></span>);
};

const UIComponentsList = ({list}) => {
  return (
    <ul className="flex flex-col gap-2">
      {list.map((component,idx) => {
        return <UIComponent component={component} key={component.id} idx={idx+1}/>;
      })}
    </ul>
  );
};

const UIComponentsPage = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl m-3">UI Components</h2>
      <UIComponentsList list={componentList} />
    </div>
  );
};

const UIComponents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnUIComponentsPage = location.pathname === paths.UIComponents;
  return (
    <div>
      {isOnUIComponentsPage ? (
        <UIComponentsPage/>
      ) : (
        <div>
          <button className="px-2 py-1 border rounded my-2" onClick={() => navigate(-1)}>
            Go back
          </button>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default UIComponents;
