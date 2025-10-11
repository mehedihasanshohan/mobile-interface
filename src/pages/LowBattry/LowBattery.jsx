import React from "react";
import { useNavigate } from "react-router";

const LowBattery = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <h1 className="text-2xl font-bold mb-4">⚠️ Low Battery</h1>
      <p>Please connect your charger to continue.</p>
      <button className="btn btn-info" onClick={()=> navigate('/battery-charge')}>Connet to Charger</button>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg"
      >
        Go Home
      </button>
    </div>
  );
};

export default LowBattery;
