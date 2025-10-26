import { Link, useLocation, useNavigate } from "react-router-dom";


import { Outlet } from "react-router-dom";
import { paths } from "../../constants";

const layoutsList = [
  {
    id: 1,
    path: paths.waitListLayout,
    name: "Wait List layout",
  },
];

const LayoutListItem = ({ idx,to, name }) => {
  return (
    <li>
      <span className="mx-2">{idx}.</span>
      <Link to={to} className="text-blue-500 underline">
        {name}
      </Link>
    </li>
  );
};

const LayoutsList = () => {
  return (
    <ul>
      {layoutsList.map((item,i)=>{
        return(<LayoutListItem idx={i+1} to={item.path} name={item.name} key={item.id}/>)
      })}
    </ul>
  );
};

const Layouts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnLayoutPage = location.pathname === paths.layouts;

  return (
    <div>
      <h3 className="font-semibold text-2xl">Layouts</h3>

      <div>
        {isOnLayoutPage ? (
         <LayoutsList/>
        ) : (
          <button onClick={() => navigate(-1)} className="border px-2 py-1 rounded" type="button">Go back</button>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
