import React, { useState } from 'react';

const ToggleSwitch = ({ label = "Present", onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      type="button"
      className="inline-flex items-center text-sm group"
      onClick={handleToggle}
    >
      <span className="relative">
        <div className="mr-1">
          <div className={`w-7 h-4 px-[2px] relative rounded-full flex items-center transition-colors duration-200 ease-in-out ${isChecked ? 'bg-brand-400' : 'bg-gray-400'}`}>
            <input
              type="checkbox"
              className="cursor-pointer appearance-none rounded-full absolute left-px top-px right-px bottom-px focus-visible:ring-4 ring-brand"
              checked={isChecked}
              onChange={() => {}}
              id="toggle-present"
            />
            <span 
              className={`w-3 h-3 block rounded-full shadow-sm border bg-white transition-transform duration-200 ease-in-out ${isChecked ? 'transform translate-x-3' : ''}`}
            ></span>
          </div>
        </div>
      </span>
      {label}
    </button>
  );
};

export default ToggleSwitch;
