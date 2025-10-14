import React from 'react'
import { useOutletContext } from 'react-router';

const Dial = () => {
  const { dialNumber } = useOutletContext();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      {/* <h2 className=''>Dialing... </h2> */}
      <p>{dialNumber || 'enters 11 digit number to make a call'}</p>

    </div>
  )
}

export default Dial
