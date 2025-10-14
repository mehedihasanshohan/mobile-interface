// import React from 'react';
// import { BiSolidPhoneCall } from 'react-icons/bi';
// import { useLocation } from 'react-router';

// const Keypad = () => {
//   const location = useLocation();

//   const isDialRoute = location.pathname === '/dial';

//   const buttons = [
//     <BiSolidPhoneCall className='text-green-400 text-center text-2xl'></BiSolidPhoneCall>, 'OK', '📞',
//     '1','2','3',
//     '4','5','6',
//     '7','8','9',
//     '*','0','#'
//   ];

//   return (
//     <div className="w-full max-w-xs mx-auto mt-0">
//       <div className="grid grid-cols-3 gap-4 border-16 border-gray-800 p-4 rounded-b-4xl">
//         {buttons.map((btn) => (
//           <button
//           className={`
//             text-sm font-bold py-2 rounded-lg shadow transition cursor-pointer
//             ${isDialRoute
//               ? "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700"
//               : "bg-gray-800 text-white/10 hover:bg-gray-300 active:bg-gray-400"}
//           `}
//         >
//           {btn}
//         </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Keypad;


import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { useLocation} from 'react-router';

const Keypad = ({ setDialNumber}) => {
  const location = useLocation();
  const isDialRoute = location.pathname === '/dial';

  const buttons = [
    <BiSolidPhoneCall className='text-green-400 text-center text-2xl'></BiSolidPhoneCall>,
    'OK', '📞',
    '1','2','3',
    '4','5','6',
    '7','8','9',
    '*','0','#'
  ];

  // Handler to get button value
  const handleClick = (value) => {
    console.log("Button clicked:", value);
    if (value === 'OK') {
      setDialNumber(''); // Clear dial
    } else {
      setDialNumber(prev => prev + value);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-0">
      <div className="grid grid-cols-3 gap-4 border-16 border-gray-800 p-4 rounded-b-4xl">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn?.props ? 'call' : btn)}  // handle icon separately if needed
            className={`
              text-sm font-bold py-2 rounded-lg shadow transition cursor-pointer
              ${isDialRoute
                ? "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700"
                : "bg-gray-800 text-white/10 hover:bg-gray-300 active:bg-gray-400"}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keypad;




