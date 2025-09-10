import React from 'react'


import PaymentImage from  '../../../../public/images/instant_payment.svg'
import FeesImage from  '../../../../public/images/decentralized.svg'
import EscrowImage from  '../../../../public/images/updated-escrow.svg'
import DefaultText from '@/components/shared/DefaultText'
import OfferCard from '@/components/cards/OfferCard'


function WhatWeOffer() {
  return (
    <div className='bg-accentColor py-10 border-b'>
      <DefaultText
        className='mb-5 font-poltwaski dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text md:text-[50px] md:pb-10'
        title='Why choose Trustport?'
      />

      <div className='grid overflow-hidden grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mx-5 md:mx-10 lg:mx-10'>

        <OfferCard 
          title="Fast Payments" 
          image={PaymentImage} 
          buttonClassName="mt-10 ml-10"
          imageClassName="top-28 right-20"    
          description="Send and receive international payments instantly without relying on slow bank wires. Keep your trade moving without delays."
        />

        <OfferCard 
          title="Low Fees" 
          image={FeesImage} 
          buttonClassName="mt-[20rem] ml-5"
          imageClassName="top-[10rem] right-[2rem]"    
          description="Cut down high transaction costs when paying suppliers or receiving funds from buyers. Keep more of your profits."
        />

        <OfferCard 
          title="Escrow Security" 
          image={EscrowImage} 
          buttonClassName="mt-[20rem] ml-5"
          imageClassName="top-[2rem] right-[1rem]"    
          description="Protect your deals with escrow-powered payments. Funds are released only after goods are delivered, ensuring trust in trade."
        />

      </div>
    </div>
  )
}

export default WhatWeOffer
