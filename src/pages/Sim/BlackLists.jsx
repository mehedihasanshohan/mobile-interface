import React from 'react'
import { useNavigate } from 'react-router'

const BlackLists = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <p>no blacklists number added</p>
      <div
          className="bg-gray-600 px-4 py-2 rounded-xl text-sm cursor-pointer
                     hover:bg-orange-400 hover:text-white transition whitespace-nowrap"
          onClick={() => navigate("/sim/blacklists/addBlacklist")}
        >
          Add a Blacklist Number
        </div>
    </div>
  )
}

export default BlackLists