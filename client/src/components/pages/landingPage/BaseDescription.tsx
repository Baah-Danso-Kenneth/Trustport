import React from 'react'

function BaseDescription() {
  return (
          <div className='flex flex-col gap-5 h-auto'>
             <div className="mt-3 lg:mt-0">
                <p className="font-pop text-base md:text-lg lg:text-2xl dark:text-light font-outfit">
                  Experience fast, secure, and low-cost trade payments with Trustport. Our platform helps importers and exporters settle transactions effortlessly just like traditional payment apps, but powered by blockchain technology.
                </p>
              </div>

              <div className='grid place-content-center'>
                <button className='button-cutout bg-primaryColor p-2 text-[12px] md:px-5  font-outfit text-zinc-800 uppercase md:text-[18px]'>launch app</button>
              </div>
      </div>
  )
}

export default BaseDescription