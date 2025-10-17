import React from 'react';
import Link from 'next/link';
import UserInformation from './UserInformation';
import DefaultText from '@/components/shared/DefaultTitle';
import PriceInput from '@/components/shared/PriceInput';

function CreateLink() {
  return (
    <div className='dark:text-light min-h-screen py-8 px-4 sm:px-6 lg:px-8'>
      
      {/* User Info Section */}
      <div className='flex items-end justify-end mb-8'>
        <UserInformation />
      </div>

      {/* Main Content Container */}
      <div className='max-w-4xl mx-auto'>
        
        {/* Header Section */}
        <div className='mb-10'>
          <DefaultText 
            className='dark:text-light text-dark text-3xl sm:text-4xl lg:text-5xl font-nowy text-start mb-3' 
            title='Create a Link' 
          />
          <p className='font-pop text-sm sm:text-base text-gray-600 dark:text-gray-400'>
            You can create <span className='font-semibold text-primary'>15 more</span> payflow links this month.{' '}
            <Link href="#" className='text-primary hover:underline font-semibold transition-all'>
              Upgrade for more
            </Link>
          </p>
        </div>

        {/* Form Section */}
        <div className='space-y-6'>
          
          {/* Description & Amount Row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            
            {/* Description Input */}
            <div className='flex-grow'>
              <label htmlFor='description' className='block mb-2'>
                <DefaultText 
                  className='dark:text-light text-dark text-lg sm:text-xl font-pop' 
                  title='Description' 
                />
              </label>
              <input 
                id='description'
                type='text'
                className='w-full bg-gray-200 dark:bg-dark-gray-hue py-4 px-6 rounded-full text-dark dark:text-light 
                          placeholder:font-pop placeholder:text-gray-500 dark:placeholder:text-gray-400 
                          focus:outline-none focus:ring-2 focus:ring-primary transition-all'
                placeholder='E.g., Smart Contract for Dummies Ebook'
              />
            </div>

            {/* Amount Input */}
            <div className='w-full lg:w-64'>
              <label htmlFor='amount' className='block mb-2'>
                <DefaultText 
                  className='dark:text-light text-dark text-lg sm:text-xl font-pop' 
                  title='Amount' 
                />
              </label>
              <PriceInput />
            </div>
            
          </div>

          {/* Wallet Address Section */}
          <div>
            <label htmlFor='wallet' className='block mb-2'>
              <p className='text-start text-base sm:text-lg font-pop dark:text-light text-dark'>
                Wallet Address{' '}
                <span className="italic text-sm text-gray-600 dark:text-gray-400">
                  (Key in wallet address or connect wallet to auto-read)
                </span>
              </p>
            </label>
            
            <div className='flex flex-col sm:flex-row gap-4'>
              
              {/* Wallet Address Input */}
              <input 
                id='wallet'
                type='text'
                className='flex-grow bg-gray-200 dark:bg-dark-gray-hue py-4 px-6 rounded-full text-dark dark:text-light
                          placeholder:font-pop placeholder:text-gray-500 dark:placeholder:text-gray-400
                          focus:outline-none focus:ring-2 focus:ring-primary transition-all'
                placeholder='0xhsdghghsyfffkwtttth'
              />

              {/* Connect Wallet Button */}
              <button
                type='button'
                className='whitespace-nowrap dark:text-light dark:border-light text-dark border-dark
                          rounded-full font-pop capitalize py-4 px-8 text-base sm:text-lg
                          border-2 bg-transparent hover:bg-dark hover:text-light dark:hover:bg-light 
                          dark:hover:text-dark transition-all duration-300 ease-in-out'
              >
                Connect Wallet
              </button>
              
            </div>
          </div>

          {/* Optional: File Upload Section (for digital products) */}
          <div>
            <label htmlFor='file' className='block mb-2'>
              <DefaultText 
                className='dark:text-light text-dark text-lg sm:text-xl font-pop' 
                title='Upload Product (Optional)' 
              />
            </label>
            <div className='relative'>
              <input 
                id='file'
                type='file'
                className='hidden'
              />
              <label 
                htmlFor='file'
                className='flex items-center justify-center w-full bg-gray-200 dark:bg-dark-gray-hue 
                          py-8 px-6 rounded-2xl border-2 border-dashed border-gray-400 dark:border-gray-600
                          cursor-pointer hover:border-primary dark:hover:border-primary transition-all'
              >
                <div className='text-center'>
                  <svg 
                    className='mx-auto h-12 w-12 text-gray-400 dark:text-gray-500' 
                    stroke='currentColor' 
                    fill='none' 
                    viewBox='0 0 48 48' 
                    aria-hidden='true'
                  >
                    <path 
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02' 
                      strokeWidth={2} 
                      strokeLinecap='round' 
                      strokeLinejoin='round' 
                    />
                  </svg>
                  <p className='mt-2 text-sm font-pop text-gray-600 dark:text-gray-400'>
                    <span className='font-semibold text-primary'>Click to upload</span> or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-500'>
                    PDF, EPUB, ZIP up to 100MB
                  </p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Generate Link Button */}
        <div className='mt-10'>
          <button
            type='submit'
            className='w-full bg-greens text-black dark:bg-greens dark:text-black 
                      rounded-full font-pop font-semibold capitalize py-5 px-8 text-base sm:text-lg
                      hover:opacity-90 transition-all duration-300 ease-in-out
                      focus:outline-none focus:ring-4 focus:ring-greens focus:ring-opacity-50
                      shadow-lg hover:shadow-xl'
          >
            Generate Link
          </button>
        </div>

        {/* Info Text */}
        <p className='text-center mt-6 text-sm text-gray-600 dark:text-gray-400 font-pop'>
          By creating a link, you agree to our{' '}
          <Link href='/terms' className='text-primary hover:underline'>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href='/privacy' className='text-primary hover:underline'>
            Privacy Policy
          </Link>
        </p>

      </div>
    </div>
  );
}

export default CreateLink;