// import React from "react";

// const Navbar = ({ battery }) => {

//   return (
//     <div className="flex justify-between items-center p-2 bg-gray-800">
//       <div className="flex items-center gap-2">
//         <span className="text-sm">📶 2G</span>
//       </div>
//       <div className="text-sm">🔋 {battery}%</div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Navbar = ({ battery}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (battery === 20) {
      navigate("/low-battery");
    } else if (battery <= 10) {
      navigate("/shutdown");
    }
  }, [battery, navigate]);

  return (
    <div className="flex justify-between items-center p-2 bg-gray-800 text-white">
      <div className="flex items-center gap-2">
        <span className="text-sm">📶 2G</span>
      </div>
      <div className="text-sm">🔋 {battery}%</div>
    </div>
  );
};

export default Navbar;
