import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import React from 'react'
import HeroSection from './HeroSection'
import WhatWeOffer from './WhatWeOffer'
import GetStarted from './GetStarted'
import FrequentAskQuestion from './FrequentAskQuestion'
import RecommendationSection from './Recommendation'
import HowItWork from './HowItWorks'

function LandingPage() {
  return (
    <div>
        <Header/>
        <main>
          <HeroSection/>
          <HowItWork/>
          <WhatWeOffer/>
          <GetStarted/>
          <FrequentAskQuestion/>
          <RecommendationSection/>
        </main>
        <Footer/>
    </div>
  )
}

export default LandingPage