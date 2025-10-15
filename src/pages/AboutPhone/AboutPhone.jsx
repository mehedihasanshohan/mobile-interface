import React from 'react'
import { useNavigate } from 'react-router'

const AboutPhone = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <button onClick={() => navigate('/phone')} className='btn btn-info mt-2'>About This Phone</button>
      <button onClick={() => navigate('/developer')} className='btn btn-accent mt-4' >About Developer</button>
    </div>
  )
}

export default AboutPhone