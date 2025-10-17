import React from 'react'

function Information() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-10 lg:items-center">
    
      <div className="mt-5 mb-3 lg:mt-10 lg:mb-5">
        <h1 className="font-poltwaski text-2xl md:text-3xl lg:text-5xl leading-tight md:leading-snug lg:leading-tight text-foreground dark:text-custom-gradient">
          Borderless Bitcoin Payments for the Global Creator Economy
        </h1>
      </div>

      <div className="mt-3 lg:mt-0">
        <p className="text-base md:text-lg lg:text-xl dark:text-light">
          Empower your business to accept Bitcoin and Stacks payments instantly with auto-conversion, transparent settlements, and built-in accounting tools. 
          No banks, no borders, no 3% fees. Just fast, secure payments you control.
        </p>
      </div>
    </div>
  );
}

export default Information;
