'use client'

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header'
import React, { useEffect, useState } from 'react'
import Information from './Information';
import Kinetic from './Kinetic';
import SpiralImage from './SpiralImage';
import MoveUp from './MoveUp';
import GetStarted from './GetStarted';
import Empowering from './Empower';
import KineticSVG from './Kinetic';
import ChoosePayFlow from './ChooseFlow';
import { useTheme } from '@/components/providers/ThemeProvider';


function LandingPage() {
 const {theme, toggleTheme} = useTheme()
 const darkMode = theme === 'dark'
  return (
    <React.Fragment>
        <Header/>
        <main>
            <Information/>
            <KineticSVG/>
            <ChoosePayFlow/>
            <Empowering/>
            <GetStarted/>
            <SpiralImage/>
            <MoveUp darkMode={darkMode}/>
        </main>
        <Footer/>
    </React.Fragment>
  )
}

export default LandingPage