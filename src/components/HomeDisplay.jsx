// components/HomeDisplay.jsx
import React, { useState, useEffect } from "react";
import HomeMenu from './HomeMenu';
import { useOutletContext } from "react-router";

const HomeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { userName } = useOutletContext()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1 sec update

    return () => clearInterval(interval);
  }, []);

  const dayName = currentTime.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="w-full max-w-xs mx-auto border-r-12 border-l-12  border-gray-800 h-[160px] p-4 bg-gray-900 text-white rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="text-semibold text-xl">
        {userName}
      </div>
      <div className="text-xl font-bold">
        {currentTime.toLocaleTimeString()}
      </div>
      <div className="text-sm mt-1">
        {dayName}, {currentTime.toLocaleDateString()}
      </div>
    </div>
  );
};

export default HomeDisplay;
