import React from 'react'

const Developer = () => {
  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <p className="text-sm text-gray-300 mt-3 text-center">
        I'm <span className="text-green-400 font-semibold">Mehedi Hasan Shohan</span>, a passionate
        <span className="text-blue-400 font-semibold"> React developer</span> who loves building clean,
        modern, and user-friendly web interfaces. I’m deeply interested in
        <span className="text-yellow-400 font-semibold"> frontend development</span> and constantly exploring
        new technologies like <span className="text-teal-400 font-semibold">JavaScript, React, and Tailwind CSS</span>
        to create smooth and engaging user experiences.
      </p>

       <p className="text-sm text-gray-300 text-center mt-3">
        Through this project, I learned how to design clean and modular React components,
        <span className='text-blue-400 font-semibold'> implement realistic
        simulations</span>  like <span className='text-teal-400 font-semibold'>calling and charging</span>, and handle user interactions more efficiently. It helped me improve
        my <span className="text-yellow-400 font-medium">state management</span>,
        <span className="text-blue-400 font-medium"> component communication</span>, and
        <span className="text-teal-400 font-medium"> UI responsiveness</span> — making this one of my most
        valuable frontend learning experiences.
      </p>


    </div>
  )
}

export default Developer