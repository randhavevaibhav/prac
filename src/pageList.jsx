import { paths } from "./constants";
import ClassCompo from "./pages/ClassCompo/ClassCompo";
import Comments from "./pages/Comments/Comments";
import CustomFetch from "./pages/CustomFetch/CustomFetch";
import Home from "./pages/Home";
import Layouts from "./pages/Layouts/Layouts";
import WaitList from "./pages/Layouts/WaitList/WaitList";
import NotFound from "./pages/NotFound";
import Pomodoro from "./pages/Pomodoro/Pomodoro";
import { Counter } from "./pages/Redux/Counter/Counter";
import Redux from "./pages/Redux/Redux";
import { TodoApp } from "./pages/Redux/TodoApp/TodoApp";
import Restaurant from "./pages/Restaurant/Restaurant";
import Test from "./pages/Test/Test";
import SideMenu from "./pages/UIComponents/SideMenu";
import UIComponents from "./pages/UIComponents/UIComponents";




export const pageList = [
  {
    id: 1,
    path: paths.home,
    title: "Home page",
    element: <Home/>,
  },
  {
    id: 2,
    path: paths.notFound,
    title: "404 NotFound",
    element: <NotFound/>,
  },
  {
    id: 3,
    path: paths.restaurantP,
    title: "Restaurant Booking",
    element: <Restaurant/>,
  },
  {
    id: 4,
    path: paths.customFetch,
    title: "Custom Fetch hook",
    element: <CustomFetch/>,
  },
  {
    id: 5,
    path: paths.pomodoro,
    title: "Pomodoro - Productivity App",
    element: <Pomodoro/>,
  },
  {
    id: 6,
    path: paths.redux,
    title: "Redux App",
    element: <Redux/>,
    nestedPages: [
      {
        id: 1,
        path: paths.reduxTodo,
        title: "Todo APP",
        element: <TodoApp/>,
      },
      {
        id: 2,
        path: paths.reduxCounter,
        title: "Counter",
        element: <Counter/>,
      },
    ],
  },
  {
    id: 7,
    path: paths.classCompo,
    title: "Class component",
    element: <ClassCompo/>,
  },
  {
    id: 8,
    path: paths.UIComponents,
    title: "UI Components",
    element: <UIComponents/>,
    nestedPages: [
      {
        id: 1,
        element: <SideMenu/>,
        path: paths.sideMenu,
        title: "Side Menu",
      },
       {
        id: 2,
        element: <Comments/>,
        path: paths.comments,
        title: "Comments",
      },
    ],
  },
  {
    id: 9,
    path: paths.layouts,
    title: "Layouts",
    element: <Layouts/>,
     nestedPages: [
      {
        id: 1,
        element: <WaitList/>,
        path: paths.waitListLayout,
        title: "Wait list",
      },
    ],
  },
  {
    id: 10,
    path: paths.test,
    title: "Test",
    element: <Test/>,
  },
];
