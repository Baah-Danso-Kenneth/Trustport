import React from 'react'
import Image from 'next/image'


import Stack2Image from '../../../../public/images/stak2.png';
import Stack3Image from '../../../../public/images/stak3.png';
import Stack4Image from '../../../../public/images/stak4.png';


export function TrustText() {
  return (
    <div className='container-frame font-poltwaski mb-10 uppercase '>
      <div className='text' style={{ "--j": 0} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>t</span>
        <span style={{"--i":1} as React.CSSProperties}>t</span>
        <span style={{"--i":2} as React.CSSProperties}>t</span>
        <span style={{"--i":3} as React.CSSProperties}>t</span>
      </div>

      <div className='text' style={{ "--j": 1} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>r</span>
        <span style={{"--i":1} as React.CSSProperties}>r</span>
        <span style={{"--i":2} as React.CSSProperties}>r</span>
        <span style={{"--i":3} as React.CSSProperties}>r</span>
      </div>

    <div className='text' style={{ "--j": 2} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>u</span>
        <span style={{"--i":1} as React.CSSProperties}>u</span>
        <span style={{"--i":2} as React.CSSProperties}>u</span>
        <span style={{"--i":3} as React.CSSProperties}>u</span>
      </div>

      <div className='text' style={{ "--j": 3} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>s</span>
        <span style={{"--i":1} as React.CSSProperties}>s</span>
        <span style={{"--i":2} as React.CSSProperties}>s</span>
        <span style={{"--i":3} as React.CSSProperties}>s</span>
      </div>

      <div className='text' style={{ "--j": 4} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>t</span>
        <span style={{"--i":1} as React.CSSProperties}>t</span>
        <span style={{"--i":2} as React.CSSProperties}>t</span>
        <span style={{"--i":3} as React.CSSProperties}>t</span>
      </div>

    </div>
  )
}


export function StackText() {
  return (
    <div className=' container-frame  uppercase'>
      <div className='text' style={{ "--j": 0} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>p</span>
        <span style={{"--i":1} as React.CSSProperties}>p</span>
        <span style={{"--i":2} as React.CSSProperties}>p</span>
        <span style={{"--i":3} as React.CSSProperties}>p</span>
      </div>

      <div className='text' style={{ "--j": 1} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>o</span>
        <span style={{"--i":1} as React.CSSProperties}>o</span>
        <span style={{"--i":2} as React.CSSProperties}>o</span>
        <span style={{"--i":3} as React.CSSProperties}>o</span>

      </div>

      <div className='text' style={{ "--j": 2} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>r</span>
        <span style={{"--i":1} as React.CSSProperties}>r</span>
        <span style={{"--i":2} as React.CSSProperties}>r</span>
        <span style={{"--i":3} as React.CSSProperties}>r</span>
      </div>

    <div className='text text-zinc-800' style={{ "--j": 3} as React.CSSProperties}>
        <span style={{"--i":0} as React.CSSProperties}>t</span>
        <span style={{"--i":1} as React.CSSProperties}>t</span>
        <span style={{"--i":2} as React.CSSProperties}>t</span>
        <span style={{"--i":3} as React.CSSProperties}>t</span>
      </div>

      <div className='text' style={{ "--j": 4} as React.CSSProperties}>
        <Image style={{"--i":0} as React.CSSProperties} src={Stack2Image} alt="money" width={100} height={100}/>
         <Image style={{"--i":3} as React.CSSProperties}  src={Stack2Image} alt="cardano-img" width={100} height={100}/>
        <Image style={{"--i":2} as React.CSSProperties} src={Stack3Image} alt="money" width={100} height={100}/>
        <Image style={{"--i":1} as React.CSSProperties} src={Stack4Image} alt="money" width={100} height={100}/>
      </div>

    </div>
  )
}