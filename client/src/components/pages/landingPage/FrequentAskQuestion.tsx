import React from 'react'



import { faqs } from '@/lib/data'
import FrequentAskQuestionCard from '@/components/cards/FrequentCard'


function FrequentAskQuestion() {
  return (
    <div className='bg-accentColor '>
      <div className=' border-zinc-800  border-t border-b'>
        <h1 className='font-poltwaski mb-10 pt-10 text-4xl uppercase text-center md:text-7xl items-center'>
          <span>(</span>faq&apos;s<span className=''>)</span>
        </h1>

        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:pb-20 mx-10'>
          {faqs.map(({question,hovered},index)=>(
            <FrequentAskQuestionCard 
             question={question} 
             hovered={hovered}
             key={index}
            
             />
          ))}
          </div>
        </div>
    </div>
  )
}

export default FrequentAskQuestion