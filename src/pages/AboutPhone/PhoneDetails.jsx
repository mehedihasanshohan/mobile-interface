import React from 'react'

const PhoneDetails = () => {
  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
                      <p>Features</p>
      <ol type='1' className="list-decimal list-inside text-sm text-gray-300 space-y-1 mt-3">
        <li>Live Battery Indicator with charging percantage</li>
        <li>Detect low battery and automatic charging simulation</li>
        <li>Contact List with delete and search features</li>
        <li>Dial a contact from contact list</li>
        <li>Enter a valid 11 digit number and make a calling simulation</li>
        <li>Set your Name in Homepage as welcome text from settings</li>
        <li>Built-in calendar for quick date viewing</li>
        <li>Functional calculator for basic math operations</li>
        <li>Stopwatch with start, stop, and reset controls</li>
        <li>Modern, responsive interface with realistic phone experience</li>
        <li></li>
      </ol>
    </div>
  )
}

export default PhoneDetails