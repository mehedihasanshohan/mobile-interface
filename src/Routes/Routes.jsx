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
import Dial from "../pages/Dial/Dial";
import LowBattery from "../pages/LowBattry/LowBattery";
import BatteryCharge from "../pages/BatteryCharge/BatteryCharge";
import Shutdown from "../pages/Shutdown/Shutdown";
import ScreenLock from "../pages/ScreenLock/ScreenLock";
import Sim from "../pages/Sim/Sim";
import Contacts from "../components/Contacts/Contacts";
import AboutPhone from "../pages/AboutPhone/AboutPhone";
import PhoneDetails from "../pages/AboutPhone/PhoneDetails";
import Developer from "../pages/AboutPhone/Developer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error...</div>,
    children: [
      {index: true, element: <HomeDisplay></HomeDisplay> },
      // {
      //   index: true, element: <ScreenLock></ScreenLock>
      // },
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
      },
      {
        path: '/dial',
        element: <Dial></Dial>
      },
      {
        path: '/low-battery',
        element: <LowBattery></LowBattery>
      },
      {
        path: '/battery-charge',
        element: <BatteryCharge></BatteryCharge>
      },
      {
        path: '/shutdown',
        element: <Shutdown></Shutdown>
      },
      {
        path: '/sim',
        element: <Sim></Sim>
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      },
      {
        path: '/about-phone',
        element: <AboutPhone></AboutPhone>
      },
      {
        path: '/phone',
        element: <PhoneDetails></PhoneDetails>
      },
      {
        path: '/developer',
        element: <Developer></Developer>
      },


    ]
  },


]);

export default router;