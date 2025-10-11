import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className='w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white overflow-hidden flex flex-col items-center justify-between
                    border-r-12 border-l-12 border-gray-800 overflow-y-auto scrollbar-thin
                    scrollbar-thumb-gray-700 scrollbar-track-gray-800'>

      <h2 className="text-lg font-semibold mb-2">⏱️ Stopwatch</h2>
      <div className="text-2xl font-mono mb-3">{formatTime(time)}</div>

      <div className="flex gap-3">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="bg-green-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-green-700">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => { setTime(0); setIsRunning(false); }}
          className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
