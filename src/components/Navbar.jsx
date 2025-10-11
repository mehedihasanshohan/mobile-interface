// components/Navbar.jsx
import React from "react";

const Navbar = ({ battery }) => {

  return (
    <div className="flex justify-between items-center p-2 bg-gray-800">
      <div className="flex items-center gap-2">
        <span className="text-sm">📶 2G</span>
      </div>
      <div className="text-sm">🔋 {battery}%</div>
    </div>
  );
};

export default Navbar;
