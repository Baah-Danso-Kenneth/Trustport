'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';
import { connect, disconnect, getLocalStorage } from '@stacks/connect';
import { UserData } from '@/types/service.dt';

function Header() {
    const pathname = usePathname();
    const [connected, setConnected] = useState(false);
    const [stxAddress, setStxAddress] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted to true after component mounts (client-side only)
        setMounted(true);
        
        // Only run on client side after mounting
        if (typeof window !== 'undefined') {
            try {
                const userData = getLocalStorage() as UserData;
                if (userData?.addresses?.stx?.length && userData.addresses.stx[0].address) {
                    setStxAddress(userData.addresses.stx[0].address);
                    setConnected(true);
                }
            } catch (error) {
                console.error('Error accessing localStorage:', error);
            }
        }
    }, []);

    const handleClick = async () => {

        if (!mounted) return;
        
        try {
            if (connected) {
                disconnect();
                setConnected(false);
                setStxAddress(null);
            } else {
                await connect(); // will trigger wallet popup
                const userData = getLocalStorage() as UserData;
                if (userData?.addresses?.stx?.length && userData.addresses.stx[0].address) {
                    setStxAddress(userData.addresses.stx[0].address);
                    setConnected(true);
                }
            }
        } catch (error) {
            console.error('Wallet connection error:', error);
        }
    };

    return (
        <div>
            <div className={clsx(
                'hidden lg:block border border-zinc-800 border-b-0 border-l-0 border-r-0 transition-colors duration-300',
                {
                    'bg-primaryColor': !connected,
                    'bg-green-100': connected
                }
            )}>
                <div className='grid grid-cols-3 items-center mt-1 border border-zinc-800 border-l-0 text-zinc-800'>
                    
                    {/* Left Section - Logo */}
                    <div className="flex items-center justify-start pl-4">
                        <Link href="/" className='absolute'>
                            <Image 
                                src="/images/logo.svg" 
                                className='h-20 lg:h-44 w-80 lg:scale-200 object-contain' 
                                alt="app-img" 
                                width={100} 
                                height={100}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Middle Section - Navigation */}
                    <div className="flex justify-center">
                        <div className='flex items-center text-[18px] font-poppins capitalize border-l border-r border-zinc-800'>
                            {navLinks.map((items, index) => (
                                <Link 
                                    className={clsx(
                                        'py-5 px-6 border-r text-nowrap border-zinc-800 font-extralight last:border-r-0 transition-colors hover:bg-softBlend/50',
                                        {
                                            'bg-softBlend uppercase': pathname === items.href
                                        }
                                    )} 
                                    href={items.href} 
                                    key={index}
                                >
                                    {items.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Connect Button */}
                    <div className='flex justify-center pr-4'>
                        <div className='flex items-center gap-4'>
                            {/* Address Display - only show when mounted and connected */}
                            {mounted && connected && stxAddress && (
                                <div className='bg-green-50 border-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-mono border transition-colors'>
                                    {stxAddress.slice(0, 6)}...{stxAddress.slice(-4)}
                                </div>
                            )}

                            {/* Connect/Disconnect Button */}
                            <button 
                                onClick={handleClick}
                                disabled={!mounted}
                                className={clsx(
                                    'px-6 py-2 rounded-md font-poppins font-medium transition-all duration-300 border',
                                    {
                                        'bg-zinc-800 text-primaryColor border-zinc-800 hover:bg-zinc-700': !connected,
                                        'bg-red-600 text-white border-red-600 hover:bg-red-700': connected,
                                        'opacity-50 cursor-not-allowed': !mounted
                                    }
                                )}
                            >
                                {!mounted ? 'Loading...' : (connected ? 'Disconnect' : 'Connect')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header