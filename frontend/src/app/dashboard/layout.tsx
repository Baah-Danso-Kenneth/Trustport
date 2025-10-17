'use client';

import { useEffect, useState } from 'react';
import SideNav from '@/components/shared/SideNav';

function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className='flex min-h-screen flex-col md:flex-row bg-gray-100 dark:bg-dark'>
      <aside className='w-full md:w-64 lg:w-72 md:fixed md:inset-y-0 md:left-0 md:z-50 flex-shrink-0'>
        <SideNav/>
      </aside>


      <main className='flex-1 md:ml-64 lg:ml-72 min-h-screen'>
        <div className='w-full h-full bg-[#969696] dark:bg-dark p-4 sm:p-6 lg:p-8'>
          <div className='max-w-7xl mx-auto'>
            {children}
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Layout;