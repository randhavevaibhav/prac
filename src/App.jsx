import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/common/MainLayout";
import { pageList } from "./pageList";

const gePageRoutes = ({ page }) => {
  if (page?.nestedPages?.length > 0) {
    return (
      <Route path={page.path} element={page.element} key={page.id}>
        {page.nestedPages.map((page) => {
          return gePageRoutes({ page });
        })}
      </Route>
    );
  }

  return <Route path={page.path} element={page.element} key={page.id} />;
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {pageList.map((page) => {
            return gePageRoutes({ page });
          })}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
