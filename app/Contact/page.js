"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const page = () => {
  const user = useContext(MyContext)
  return (
    <div>
      Welcome {user}
        <h1 className='text-3xl'>This is a contact page</h1>
    </div>
  )
}

export default page