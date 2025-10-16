
import { recommend } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

function RecommendationSection() {
  return (
    <div>
        <div className='mx-10 border bg-wineTexture border-t-0 border-b-0 border-zinc-800  py-10 h-auto md:py-20 font-poppins '>
    <div className='flex justify-center text-center mb-20 font-poltwaski capitalize'>
        <h1 className='max-w-4xl text-zinc-800 text-3xl  md:text-5xl'>
            what they say about us
        </h1>
        </div>


        <div className='flex overflow-hidden space-x-10 group'>
            <div className=' animate-loop-scroll group-hover:paused'>
              <div className='flex space-x-10 text-zinc-800  font-dmMono'>
                 {recommend.map(({firstName,lastName,info,occupation,img},index)=>(
                    <div key={index}  className=' shadow-md bg-primaryColor md:py-10 p-5 border-zinc-800 rounded-md w-[300px] md:w-[500px]'>
                        <div>
                            <Image src="/images/quotes.png" className='w-10 md:w-20  object-contain' alt="quotes" width={200} height={200}/>
                        </div>

                        {/* <h1 className='text-center mb-3 '>My take</h1> */}
                        <div className='flex justify-center items-center'>
                            <p className='text-wrap text-[12px] md:text-[18px]'>{info}</p>
                        </div>

                        <div className='grid place-content-end space-y-2 mt-2 font-outfit text-sm'>
                             <Image src={img} className='rounded-full object-cover w-10 h-10 md:w-20 md:h-20' width={100} height={100} alt={`${index}+1`}/>
                            <h3 className='text-nowrap'>{firstName} {lastName}</h3>
                            <p className='font-bold'>{occupation}</p>
                        </div>
                    </div>
                 ))}
              </div>
            </div>


            <div className=' animate-loop-scroll group-hover:paused'>
              <div className='flex space-x-10 text-zinc-800  font-dmMono'>
                 {recommend.map(({firstName,lastName,info,occupation,img},index)=>(
                    <div key={index}  className=' bg-primaryColor shadow-md md:py-10 p-5 border-zinc-800 rounded-md w-[300px] md:w-[500px]'>
                        <div>
                            <Image src="/images/quotes.png" className='w-10 md:w-20  object-contain' alt="quotes" width={200} height={200}/>
                        </div>

                        {/* <h1 className='text-center mb-3 '>My take</h1> */}
                        <div className='flex justify-center items-center'>
                            <p className='text-wrap text-[12px] md:text-[18px]'>{info}</p>
                        </div>

                        <div className='grid place-content-end space-y-2 mt-2 text-sm font-outfit'>
                             <Image src={img} className='rounded-full object-cover w-10 h-10 md:w-20 md:h-20' width={100} height={100} alt={`${index}+1`}/>
                            <h3 className='text-nowrap'>{firstName} {lastName}</h3>
                            <p className='font-bold'>{occupation}</p>
                        </div>
                    </div>
                 ))}
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default RecommendationSection