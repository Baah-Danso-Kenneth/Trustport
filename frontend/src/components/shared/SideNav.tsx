'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/logo/logo.png'

import ThemeToggle from './ThemeToggle';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ThemeToggleProps } from '@/types/ui.dt';
import navLinks from '@/lib/data';
import LightLogo from '../../../public/images/hex-logo.svg';
import DarkLogo from '../../../public/images/dark-hex.svg';
import { useTheme } from '../providers/ThemeProvider';



const  SideNav=()=> {
  const pathname = usePathname();
  const {theme, toggleTheme} = useTheme()
  const darkMode = theme === 'dark'

  return (
    <div className='h-full dark:text-light dark:bg-[#222]'>
      <div className='mx-10 pt-3 mb-3'>
        <Link href="/" className='flex flex-row items-center space-x-2 mb-5'>
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

        <div className='flex flex-col mb-20  '>
        {navLinks.map(({name,icon: Icon,href}) => {
            return (
              <Link 
                href={href}
                key={name}
                className={clsx(
                  'flex flex-row md:gap-5 mb-10 font-pop rounded-md',
                  {
                    'dark:bg-dark-gray-hue px-3 bg-[#969696] border-l-4 dark:border-greens text-light py-3': pathname === href
                  }
                )}
              >
                <Icon className=' text-2xl'/>
                <h1>{name}</h1>
              </Link>
            );
          })}
        </div>

        <Link href="/dashboard/createLink">
                <button className="dark:text-[#000] w-full dark:border-light dark:bg-greens rounded-full font-pop capitalize py-3 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[18px] border text-dark border-dark shadow-none">
          create new
        </button>
        </Link>


        <div className='mt-44'>
          <ThemeToggle darkMode={false} toggleDarkMode={toggleTheme} />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
