import { Link } from "react-router-dom";
import { pages } from "../constants";

const PageLink = ({ path, title ,idx}) => {
  return (
    <li>
      <Link to={path} className="text-blue-500 underline p-2">
        {`${idx}. ${title}`}
      </Link>
    </li>
  );
};

const Home = () => {
  return (
    <div>
    
      <ul className="flex flex-col gap-4">
        {pages.map((page, i) => {
          return <PageLink path={page.path} title={page.title} key={i} idx={i+1}/>;
        })}
      </ul>
    </div>
  );
};

export default Home;
