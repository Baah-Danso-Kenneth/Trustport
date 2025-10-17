import Link from 'next/link'
import React from 'react'
import UserInformation from './UserInformation'

function EmptyLinks() {
  return (
    <div>
      <div className='flex items-end justify-end mb-5'>
        <UserInformation/>
      </div>

      <div>
        <h1 className='font-nowy text-4xl capitalize mb-3 dark:text-light'>dashboard</h1>
        <p className='font-pop dark:text-white'>you have no links yet, <span className='dark:text-greens text-[#ccc] underline'><Link href="/dashboard/createLink/">click here to create one instantly</Link></span></p>
      </div>
      </div>
  )
}

export default EmptyLinks