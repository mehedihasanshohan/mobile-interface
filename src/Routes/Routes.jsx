import { createBrowserRouter } from "react-router";
import Menu from "../pages/menu/menu";
import Calendar from "../pages/calendar/calendar";
import Stopwatch from "../pages/stopwatch/stopwatch";
import MainLayout from './../MainOutlet/MainLayout';
import HomeDisplay from './../components/HomeDisplay';
import Settings from "../pages/Settings/Settings";
import DisplaySetting from "../pages/DisplaySetting/DisplaySetting";
import WallPaperSetting from "../pages/DisplaySetting/WallPaperSetting";
import WelcomeText from "../pages/DisplaySetting/WelcomeText";

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
      },
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/settings/display',
        element: <DisplaySetting></DisplaySetting>
      },
      {
        path: '/settings/display/wallpaper',
        element: <WallPaperSetting></WallPaperSetting>
      },
      {
        path: '/settings/display/welcometext',
        element: <WelcomeText></WelcomeText>
      }
    ]
  },

]);

export default router;