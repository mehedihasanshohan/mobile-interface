import React from "react";
import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <h2 className="text-lg font-semibold mb-3 text-center">
        Connections
      </h2>

      <div className="flex flex-col space-x-4 gap-2 justify-start min-w-max">
        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/settings/display")}
        >
          Call Waiting
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/call-setting")}
        >
          Call divert
        </div>

        <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/security-setting")}
        >
          Sim Name
        </div>

         <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/sim/blacklists")}
        >
          BlackLists
        </div>

      </div>
    </div>
  );
};

export default Settings;
