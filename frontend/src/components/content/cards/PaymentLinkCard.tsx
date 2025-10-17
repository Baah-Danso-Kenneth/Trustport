import Header from '@/components/layouts/Header'
import DefaultText from '@/components/shared/DefaultTitle'
import React from 'react'



function PaymentCard() {
  return (
    <div>
        
        <div  className='md:h-auto py-10 mx-5 md:mx-5 rounded-2xl bg-[#969696] dark:bg-dark-gray-hue p-5'>
          <DefaultText className='text-center text-[18px] text-light font-nowy md:text-[25px] dark:text-light mb-5' title='payment summary'/>
          <DefaultText className='text-start text-[15px] md:font-pop text-light md:text-[14px] mb-5' title='payment summary'/>

          <div className='h-auto rounded-2xl bg-background dark:bg-mouve py-5 px-5'>
              <DefaultText className='text-start text-[13px] md:text-[18px] capitalize text-dark mb-3 font-bold md:font-pop' title='Smart contract for dummies Ebook'/>
              <DefaultText className='text-start text-[13px] md:text-[18px] font-thin text-dark  md:font-pop' title='USDC 100'/>
          </div>

          <div className='flex flex-row justify-between mt-10'>
          <DefaultText className='text-start text-[13px] md:text-[18px] capitalize text-light mb-3 font-bold md:font-pop' title='total'/>
          <DefaultText className='text-start text-[13px] md:text-[18px] font-thin text-light  md:font-pop' title='USDC 100'/>
          </div>

          <div className='md:mt-[5rem] mb-3'>
             <p className='text-light text-[13px] md:text-[16px] font-pop'>By Continuing <span className='text-background dark:text-mouve'>you agree to our terms and conditions</span></p>
          </div>

          <button
          className = "w-full text-[13px]  dark:bg-greens rounded-full dark:text-[#000] font-pop capitalize py-3 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 md:text-[16px] sm:text-[18px] lg:text-[17px] border text-background border-dark shadow-none bg-dark-gray-hue"
        
         >Connect wallet to pay</button>

        </div>
      </div>
  )
}

export default PaymentCard