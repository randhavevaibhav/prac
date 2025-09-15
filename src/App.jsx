import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Restaurant from "./pages/Restaurant/Restaurant";
import Pomodoro from "./pages/Pomodoro/Pomodoro";
import CustomFetch from "./pages/CustomFetch/CustomFetch";
// components
import { MainLayout } from "./components/common/MainLayout";

import { paths } from "./constants";
import Test from "./pages/Test/Test";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.notFound} element={<NotFound />} />
          <Route path={paths.restaurantP} element={<Restaurant />} />
          <Route path={paths.customFetch} element={<CustomFetch />} />
          <Route path={paths.pomodoro} element={<Pomodoro />} />
          <Route path={paths.test} element={<Test />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
