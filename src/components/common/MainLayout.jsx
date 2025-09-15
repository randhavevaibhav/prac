import { Link, useLocation } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();

  const currentPath = location.pathname;
  const isHomePage = currentPath === "/";

  return (
    <main className="max-w-[1280px] border border-black md:mx-auto p-2 mt-10  mx-2 min-h-[350px] rounded-md">
      {!isHomePage ? (
        <Link to={-1} className="text-blue-500 underline p-2">
          Go back
        </Link>
      ) : null}

      {children}
    </main>
  );
};
