// components/WelcomeText.jsx
import React, { useState } from 'react';
import { useOutletContext } from 'react-router';

const WelcomeText = () => {
  const { setUserName } = useOutletContext();
  const [tempName, setTempName] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!tempName.trim()) return; // prevent empty save
    setUserName(tempName);
    setTempName('');       // clear input
    setSaved(true);        // disable button
    setTimeout(() => setSaved(false), 1000); // optional: re-enable after 1 sec
  };

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800 flex flex-col items-center justify-center">
      <input
        type="text"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 text-white rounded mb-2"
      />
      <button
        className='btn btn-accent w-full'
        onClick={handleSave}
        disabled={!tempName.trim() || saved} // disable if empty or just saved
      >
        {saved ? 'Saved!' : 'Save Changes'}
      </button>
    </div>
  );
};

export default WelcomeText;
