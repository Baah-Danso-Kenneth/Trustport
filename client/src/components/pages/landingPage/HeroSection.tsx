// import { Heading } from '@/components/shared/Heading'
import React from 'react'
// import { PayText, JustText } from './AnimateText'
import BaseDescription from './BaseDescription'
import { TrustText, StackText } from './AnimatedText'


function HeroSection() {
  return (
 <div 
  className="relative bg-softBlend overflow-hidden bg-primaryColor bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/container-bg.jpg')" }}
>
  <div className=" bg-black/50">
    <h1 className="font-poltwaski capitalize pb-3 lg:pb-20 text-3xl max-w-5xl text-center md:place-self-center md:text-5xl lg:text-7xl py-10 text-white">
      Seamless payments for global shipping
    </h1>

    <div className="flex p-10 flex-col lg:flex-row gap-10 text-white">
      <div className="hidden lg:block">
        <TrustText />
        <StackText />
      </div>
      <BaseDescription />
    </div>
  </div>
</div>


  )
}

export default HeroSection