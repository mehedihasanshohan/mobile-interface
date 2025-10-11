import React from "react";
import { useNavigate } from "react-router";

const DisplaySetting = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <h1 className="text-2xl font-bold mb-4">🖥️ Display Settings</h1>

      {/* Brightness Setting */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Brightness</label>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full"
        />
      </div>

      {/* Dark Mode Setting */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold">Dark Mode</span>
        <input type="checkbox" className="h-5 w-5 accent-green-500" />
      </div>

      {/* Font Size Setting */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Font Size</label>
        <select className="w-full p-2 bg-gray-800 rounded-md">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="mt-4 cursor-pointer" onClick={() => navigate('/settings/display/wallpaper')}>
       Change WallPaper
      </div>

      <div className="mt-4 cursor-pointer" onClick={() => navigate('/settings/display/welcometext')}>
        Welcome Text
      </div>

      <button className="mt-4 w-full bg-green-600 hover:bg-green-300 cursor-pointer py-2 rounded-lg font-semibold">
        Save Changes
      </button>
    </div>
  );
};

export default DisplaySetting;
