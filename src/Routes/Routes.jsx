import { createBrowserRouter } from "react-router";
import Menu from "../pages/menu/menu";
import Calendar from "../pages/calendar/calendar";
import Stopwatch from "../pages/stopwatch/stopwatch";
import MainLayout from './../MainOutlet/MainLayout';
import HomeDisplay from './../components/HomeDisplay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error...</div>,
    children: [
      {index: true, element: <HomeDisplay></HomeDisplay> },
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
    ]
  },

]);

export default router;