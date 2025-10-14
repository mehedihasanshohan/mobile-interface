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


// import React from 'react';
// import { BiSolidPhoneCall } from 'react-icons/bi';
// import { useLocation} from 'react-router';

// const Keypad = ({dialNumber, setDialNumber, setCallStatus}) => {
//   const location = useLocation();
//   const isDialRoute = location.pathname === '/dial';

//   const buttons = [
//     <BiSolidPhoneCall className='text-green-400 text-center text-2xl'></BiSolidPhoneCall>,
//     'OK', '📞',
//     '1','2','3',
//     '4','5','6',
//     '7','8','9',
//     '*','0','#'
//   ];

//   // Handler to get button value
//    const handleClick = (value) => {
//     if (value === 'call') {
//       if (dialNumber.length === 11) {
//         setCallStatus('Calling...');
//         setTimeout(() => {
//           setCallStatus('The number is busy, try again later.');
//         }, 5000);
//       } else {
//         setCallStatus('Invalid number!');
//       }
//       return;
//     }

//     if (value === 'OK') {
//       setDialNumber('');
//       setCallStatus('');
//       return;
//     }

//     if(value === '📞'){
//       setDialNumber('');
//       setCallStatus('call ended');
//     }
//     // Add digit
//     setDialNumber(prev => prev + value);
//     setCallStatus('');
//   }

//   return (
//     <div className="w-full max-w-xs mx-auto mt-0">
//       <div className="grid grid-cols-3 gap-4 border-16 border-gray-800 p-4 rounded-b-4xl">
//         {buttons.map((btn, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(btn?.props ? 'call' : btn)}  // handle icon separately if needed
//             className={`
//               text-sm font-bold py-2 rounded-lg shadow transition cursor-pointer
//               ${isDialRoute
//                 ? "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700"
//                 : "bg-gray-800 text-white/10 hover:bg-gray-600 active:bg-gray-400"}
//             `}
//           >
//             {btn}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Keypad;






import React, { useEffect } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { useLocation } from 'react-router';

const Keypad = ({ dialNumber, setDialNumber, callStatus, setCallStatus }) => {
  const location = useLocation();
  const isDialRoute = location.pathname === '/dial';

  const buttons = [
    <BiSolidPhoneCall className="text-green-400 text-center text-2xl" />,
    'OK', '📞',
    '1','2','3',
    '4','5','6',
    '7','8','9',
    '*','0','#'
  ];

  // 👉 Operator detection
  useEffect(() => {
    if (dialNumber.startsWith('017')) setCallStatus('You entered a GP number');
    else if (dialNumber.startsWith('018')) setCallStatus('You entered a Robi number');
    else if (dialNumber.length > 0) setCallStatus('');
  }, [dialNumber]);

  // 👉 Handle button clicks
  const handleClick = (value) => {
    // Call button pressed
    if (value === 'call') {
      if (dialNumber.length === 11) {
        setCallStatus('Calling...');
        setTimeout(() => {
          setCallStatus('The number is busy, try again later.');
        }, 3000);
      } else {
        setCallStatus('Invalid number!');
      }
      return;
    }

    // OK button (reset)
    if (value === 'OK') {
      setDialNumber('');
      setCallStatus('');
      return;
    }

    // End call button
    if (value === '📞') {
      if (callStatus.includes('Calling')) {
        setDialNumber('');
        setCallStatus('Call ended');
      } else {
        setCallStatus('No active call');
      }
      return;
    }

    // Restrict to 11 digits
    if (dialNumber.length >= 11) return;

    // Add digits
    setDialNumber((prev) => prev + value);
    setCallStatus('');
  };

  const isCalling = callStatus === 'Calling...';

  return (
    <div className="w-full max-w-xs mx-auto mt-0">
      <div className="grid grid-cols-3 gap-4 border-16 border-gray-800 p-4 rounded-b-4xl">
        {buttons.map((btn, index) => (
          <button
            key={index}
            disabled={isCalling}
            onClick={() => handleClick(btn?.props ? 'call' : btn)}
            className={`
              ${isCalling ? 'opacity-50 cursor-not-allowed' : ''}
              text-sm font-bold py-2 rounded-lg shadow transition
              ${isDialRoute
                ? 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700'
                : 'bg-gray-800 text-white/10 hover:bg-gray-600 active:bg-gray-400'}
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
