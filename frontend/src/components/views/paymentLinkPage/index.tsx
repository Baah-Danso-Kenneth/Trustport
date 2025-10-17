'use client'


import TitleAndDescription from '@/components/shared/TitleAndDescription'
import React, { useEffect, useState } from 'react'
import PaymentCard from '../../content/cards/PaymentLinkCard'
import { useTheme } from '../../providers/ThemeProvider'
import Header from '../../layouts/Header'



function PaymentPage() {
    const {theme, toggleTheme} = useTheme()
    const darkMode = theme === 'dark'

  return (
    <React.Fragment>
    <Header/>
    <div className='flex flex-col md:flex-col lg:flex-row   md:mx-5 justify-between'>
       <TitleAndDescription
       title='seamless crypto payments for digital creators'
        description='Accept payments globally without boundaries. Create product links in seconds, share instantly, and receive crypto payments seamlessly. No complex integrations. No coding required.'/>
        <PaymentCard/>
      </div>
      </React.Fragment>
  )
}

export default PaymentPage