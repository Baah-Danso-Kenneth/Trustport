'use client'

import React from 'react';

import Image from 'next/image';

import LightLogo from '../../../public/images/hex-logo.svg';
import DarkLogo from '../../../public/images/dark-hex.svg';
import { ThemeToggleProps } from '@/types/ui.dt';
import ThemeToggle from '../shared/ThemeToggle';
import { useRouter } from 'next/navigation';
import { useStacks } from '@/useStack';
import { useTheme } from '../providers/ThemeProvider';
import Link from 'next/link';




const Header=() => {
  const {userData, connectWallet, disconnectWallet}= useStacks()
  const {theme, toggleTheme} = useTheme()
  const darkMode = theme === 'dark'

  return (
    <div className='dark:bg-dark bg-grayTint p-3 sm:p-5 sticky top-0 z-50 '>
      <div className='flex flex-row items-center justify-between'>
        <Link href="/" className='flex flex-row items-center space-x-2'>
          <Image 
            src={darkMode ? DarkLogo : LightLogo} 
            alt="app-logo" 
            width={50} 
            height={50} 
            className='w-[30px] sm:w-[40px]'
          />
          <h1 className='font-poltwaski uppercase  dark:text-light text-dark text-[18px] md:font-nowy md:text-[28px]'>
            kinetic
          </h1>
        </Link>
        <div className='flex flex-row items-center gap-5'>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleTheme} />
      
         {userData ?
          (
          <button 
            onClick={disconnectWallet}
          className='capitalize cursor-pointer bg-greens px-5 py-2 rounded-full text-[#000]'>
            disconnect
          </button>
          ) 
          : 
          
          (
            <button 
            onClick={connectWallet}
          className='capitalize cursor-pointer bg-greens px-5 py-2 rounded-full text-[#000]'>
            connect
          </button>
          )
          
          }

         
        </div>
      </div>
    </div>
  );
}

export default Header;