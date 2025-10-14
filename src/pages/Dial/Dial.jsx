import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';

const Dial = () => {
  const { dialNumber, callStatus, setCallStatus } = useOutletContext();

  // ✅ useEffect ensures this only runs when dialNumber changes
  useEffect(() => {
    if (dialNumber.length === 11) {
      setCallStatus('Press dial button to Make a call');
    } else {
      setCallStatus('');
    }
  }, [dialNumber, setCallStatus]);

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800 text-center">
      {dialNumber ? (
        <>
          <h2 className="text-xl font-mono tracking-widest">{dialNumber}</h2>
          {callStatus && (
            <p className="mt-2 text-green-400 animate-pulse">{callStatus}</p>
          )}
        </>
      ) : (
        <p className="text-gray-400">
          Enter 11 digit number to make a call
        </p>
      )}
    </div>
  );
};

export default Dial;
