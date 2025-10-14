import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

const BatteryCharge = () => {
  const [charge, setCharge] = useState(0);
  const navigate = useNavigate();
  const {  setBattery} = useOutletContext();

  // useEffect(() => {
  //   // Simulate charging process
  //   const interval = setInterval(() => {
  //     setCharge((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //   setBattery(100);
  //         setTimeout(() => {
  //           navigate("/");
  //         }, 1000);
  //         return 100;
  //       }
  //       return prev + 10;
  //     });
  //   }, 500); // increase 10% every 500ms

  //   return () => clearInterval(interval);
  // }, [navigate, setBattery]);

   useEffect(() => {
    // Simulate charging process
    const interval = setInterval(() => {
      setCharge((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          //  move setBattery and navigate OUTSIDE the state setter
          setTimeout(() => {
            setBattery(100);
            navigate("/");
          }, 1000);

          return 100;
        }
        return prev + 10;
      });
    }, 500); // increase 10% every 500ms

    return () => clearInterval(interval);
  }, [navigate, setBattery]);

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <p className="text-lg font-semibold mb-4 animate-pulse">⚡ Self Charging Mode On...</p>

      {/* Battery container */}
      <div className="relative w-40 h-16 border-4 border-green-500 rounded-lg overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-300"
          style={{ width: `${charge}%` }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {charge}%
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-300">
        Please wait while device is charging...
      </p>
    </div>
  );
};

export default BatteryCharge;
