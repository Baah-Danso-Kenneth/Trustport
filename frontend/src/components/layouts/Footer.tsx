import React from 'react'

function Footer() {
  return (
    <div className='hidden md:block  md:py-5 bg-[#000] lg:py-10 text-[#BBAA89] dark:text-[#fff]'>
      <div className='mx-10'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-light font-pop'>&copy; {''} 2025-Copyright</h1>

        <div>
          <ul className='flex flex-row space-x-5 font-pop text-light uppercase'>
            <li>ger</li>
            <li>spa</li>
            <li>swe</li>
            <li>eng</li>
            <li>rus</li>
          </ul>
        </div>

      </div>
      </div>

      <div className='mt-5 tm-gradient h-5  mx-10'/>
 </div>
  )
}

export default Footer