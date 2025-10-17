'use client'

import React from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';

function Empowering() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 lg:pb-20">
      <div className="max-w-3xl">
        <h1 className="font-poltwaski text-[1.8rem] md:text-[3rem] lg:text-[3.5rem] leading-tight text-dark dark:text-custom-gradient">
          Empowering creators worldwide with{" "}
          <span className="relative inline-block text-white dark:text-custom-gradient bg-black dark:bg-transparent px-6 py-2 md:px-10 md:py-3 rounded-full font-nowy">
            Bitcoin-native
            {isDark && (
              <span className="absolute inset-0 border-2 border-primary rounded-full animate-pulse-border"></span>
            )}
          </span>
          {" "}
          payments built on Stacks
        </h1>

        <p className="font-pop text-darkGrayHue dark:text-light mt-6 md:mt-8 text-base md:text-lg leading-relaxed">
          Seamlessly accept payments in{" "}
          <span className="font-semibold">Bitcoin (via Stacks)</span> and{" "}
          <span className="font-semibold">STX tokens</span>.  
          Experience instant settlement, low fees, and the transparency of Bitcoin secured by smart contracts on Stacks.
        </p>
      </div>
    </section>
  );
}

export default Empowering;