import React from "react";
import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <h2 className="text-lg font-semibold mb-3 text-center">
        ⚙️ Settings
      </h2>

      <div className="flex flex-col space-x-4 gap-2 justify-start min-w-max">
        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/settings/display")}
        >
          Display Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/phone-setting")}
        >
          Phone Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/call-setting")}
        >
          Call Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/security-setting")}
        >
          Security Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/sound-setting")}
        >
          Sound Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/language-setting")}
        >
          Language Setting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/about-phone")}
        >
          About Phone
        </div>
      </div>
    </div>
  );
};

export default Settings;
