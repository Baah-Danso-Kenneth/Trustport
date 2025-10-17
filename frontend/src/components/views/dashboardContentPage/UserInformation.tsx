'use client'

import { abbreviateAddress } from '@/lib/address'
import { useStacks } from '@/useStack'
import React from 'react'

function UserInformation() {
    const {userData} = useStacks()

  return (
    <div>
        <h1>{abbreviateAddress(userData?.profile?.stxAddress?.testnet)}</h1>
    </div>
  )
}

export default UserInformation