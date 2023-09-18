'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const {id} = params
    console.log(id)
    
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    
    const getUsers = async () => {
        const {data} =  await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        console.log("User Data: ", data)
        setUserData(data)
    }
  
    
  return (
    <div className='p-4'>
    <div>UserPage {id}</div>
    {JSON.stringify(userData)}
    </div>
  )
}

export default page