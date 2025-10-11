import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = getDaysInMonth(currentMonth, currentYear);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const todayDate = today.getDate();
  const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900 text-white
                    overflow-hidden flex flex-col items-center justify-between
                    border-r-12 border-l-12
                  border-gray-800 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-1">
        <button
          onClick={prevMonth}
          className="px-2 py-1 bg-[#1C2541] hover:bg-[#3A506B] rounded text-xs"
        >
          ◀
        </button>
        <div className="text-sm font-semibold text-center">
          {months[currentMonth]} {currentYear}
        </div>
        <button
          onClick={nextMonth}
          className="px-2 py-1 bg-[#1C2541] hover:bg-[#3A506B] rounded text-xs"
        >
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 space-x-6  text-[10px] text-gray-300 mb-1">
        {days.map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 space-x-6 space-y-0.5 text-[11px]">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: totalDays }).map((_, i) => {
          const date = i + 1;
          const isToday = isCurrentMonth && date === todayDate;
          return (
            <div
              key={date}
              className={`text-center py-1 rounded cursor-pointer ${
                isToday
                  ? "bg-green-500 text-black font-bold"
                  : "bg-[#1C2541] hover:bg-[#3A506B]"
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
