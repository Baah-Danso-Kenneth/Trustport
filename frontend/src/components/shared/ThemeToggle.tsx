import { HiMoon, HiSun } from 'react-icons/hi';
import React from 'react';
import { ThemeToggleProps } from '@/types/ui.dt';



const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-16 h-8 flex items-center bg-[#000] dark:bg-dark-gray-hue cursor-pointer rounded-full p-1 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <HiMoon
        className={`z-10 transition-colors duration-300 ${
          darkMode ? 'text-[#000]' : 'text-[#fff]'
        } text-2xl`}
      />
      
      <div
        className="absolute bg-[#9be77f] dark:bg-[#9be77f] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
        style={{
          transform: darkMode ? 'translateX(-2px)' : 'translateX(30px)',
        }}
      />
      
      <HiSun
        className={`ml-auto z-10 transition-colors duration-300 ${
          darkMode ? 'text-[#fff]' : 'text-[#000]'
        } text-2xl`}
      />
    </button>
  );
};

export default ThemeToggle;