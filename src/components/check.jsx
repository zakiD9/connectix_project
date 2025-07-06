import { useState } from "react";
const Check = ({ checked, onChange,checkwhat }) => {
  return (
    <label className="flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer appearance-none w-5 h-5 rounded-md border border-gray-300 mr-2
                   checked:bg-[#64D2FF] checked:border-[#64D2FF] transition-all duration-150
                   focus:ring-2 focus:ring-[#64D2FF] relative"
        style={{ outline: 'none' }}
      />
      <svg
        className="absolute w-4 h-4 pointer-events-none ml-0.5 text-white opacity-0 peer-checked:opacity-100 transition"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6 10l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-gray-600 text-base font-medium">{checkwhat}</span>
    </label>
  );
};

export default Check;