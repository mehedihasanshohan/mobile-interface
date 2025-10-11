import { createBrowserRouter } from "react-router";
import Menu from "../pages/menu/menu";
import Calendar from "../pages/calendar/calendar";
import Stopwatch from "../pages/stopwatch/stopwatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: '/menu',
    element: <Menu></Menu>
  },
  {
    path: '/calendar',
    element: <Calendar></Calendar>
  },
  {
    path: '/stopwatch',
    element: <Stopwatch></Stopwatch>
  }
]);

export default router;