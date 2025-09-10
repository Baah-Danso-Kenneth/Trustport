import React from 'react'



function HowItWork() {
  return (
    <div className='bg-secondaryColor border-t border-b'>
     <div className='mx-10 py-20 md:mx-10  border-l border-r border-zinc-800'>

      <h1 className ="m-10 text-nowrap font-poltwaski text-center text-2xl lg:text-4xl md:text-custom-gradient dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text ">How it works</h1>

      <div className="grid grid-cols-1 gap-4 px-10 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">

<button
className="hover:bg-custom-gradient dark:text-light dark:border-light rounded-full font-poppins capitalize py-3  sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5  text-[12px] lg:text-[16px]  text-nowrap  border text-dark border-dark shadow-none bg-transparent"
>
  create your account
</button>

<button
    className="hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-poppins capitalize py-3 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 text-[12px] lg:text-[16px] lg:text-nowrap border text-dark border-dark shadow-none bg-transparent"
>
 List your shipment or trade order
</button>

<button
    className="hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-poppins capitalize py-3 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 text-[12px] lg:text-[16px] lg:text-nowrap border text-dark border-dark shadow-none bg-transparent"
>
  Confirm shipping & payment terms
</button>

<button
    className="hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-poppins capitalize py-7 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 text-[12px] lg:text-[16px] lg:text-nowrap border text-dark border-dark shadow-none bg-transparent"
>
  Get paid securely via blockchain
</button>

</div>
</div>

    </div>
  )
}

export default HowItWork