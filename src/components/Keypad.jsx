import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Keypad = () => {
  const buttons = [
    <BiSolidPhoneCall className='text-green-400 tect-center text-2xl'></BiSolidPhoneCall>, 'ok', '📞',
    '1','2','3',
    '4','5','6',
    '7','8','9',
    '*','0','#'
  ];

  return (
    <div className="w-full max-w-xs mx-auto mt-0">
      <div className="grid grid-cols-3 gap-4 border-16 border-gray-800 p-4 rounded-b-4xl">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="bg-gray-800 text-sm font-bold py-2 rounded-lg text-white/10 shadow hover:bg-gray-300 active:bg-gray-400 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keypad;

