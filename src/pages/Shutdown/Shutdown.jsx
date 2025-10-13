
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Shutdown = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/battery-charge');
    }, 3000);

    return () => clearTimeout(timeout); // cleanup to prevent
  }, [navigate]);

  return (
    <div
      className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                 text-white border-r-12 border-l-12 border-gray-800
                 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                 scrollbar-track-gray-800 flex items-center justify-center text-center"
    >
      The system detected low power and initiated Auto Charge Mode.
    </div>
  );
};

export default Shutdown;
