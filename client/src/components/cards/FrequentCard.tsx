import React from 'react'

import { GoArrowDownRight } from "react-icons/go";

function FrequentAskQuestionCard({
  question, hovered}:{question:string; hovered:string}) {

  return (
    <div className='question-card-container font-poppins text-zinc-800 mb-5 md:mb-20 place-self-center'>
      <div className="card">

      <div className='card-front grid p-5'>
        <div className="place-self-start ">
          <p className='text-wrap mt-3 flex font-outfit '>{question}</p>
        </div>

        <div className='place-self-end text-3xl'>
        <GoArrowDownRight/>
        </div>
      </div>

      <div className='card-back p-5'>
          <p className='font-outfit'>{hovered}</p>
      </div>

      </div>
    </div>
  )
}

export default FrequentAskQuestionCard