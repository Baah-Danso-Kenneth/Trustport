'use client';

import React, { useState } from 'react';

function PriceInput() {
  const [selectedCurrency, setSelectedCurrency] = useState('STX');
  
  const currencies = [
    { code: 'STX', symbol: 'STX' },
    { code: 'sBTC', symbol: 'sBTC' },
    { code: 'USDA', symbol: 'USDA' },
    { code: 'USDC', symbol: 'USDC' },
  ];

  return (
    <div className='relative'>
      
      {/* Price Input Container */}
      <div className='flex items-center bg-gray-200 dark:bg-dark-gray-hue rounded-full overflow-hidden
                      focus-within:ring-2 focus-within:ring-primary transition-all'>
        
        {/* Currency Dropdown */}
        <div className='relative'>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className='appearance-none bg-transparent text-dark dark:text-light font-pop font-semibold
                      py-4 pl-6 pr-10 cursor-pointer focus:outline-none'
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code} className='bg-white dark:bg-dark-gray'>
                {currency.symbol}
              </option>
            ))}
          </select>
          
          {/* Dropdown Arrow */}
          <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center'>
            <svg 
              className='h-4 w-4 text-gray-600 dark:text-gray-400' 
              fill='none' 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth='2' 
              viewBox='0 0 24 24' 
              stroke='currentColor'
            >
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className='h-8 w-px bg-gray-400 dark:bg-gray-600'></div>

        {/* Amount Input */}
        <input
          type='number'
          step='0.01'
          min='0'
          placeholder='0.00'
          className='flex-grow bg-transparent text-dark dark:text-light font-pop font-semibold
                    py-4 px-4 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none'
        />
      </div>

      {/* USD Conversion (Optional - can be calculated based on live price) */}
      <p className='text-xs text-gray-500 dark:text-gray-400 mt-1 ml-4 font-pop'>
        ≈ $0.00 USD
      </p>
    </div>
  );
}

export default PriceInput;