'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = async () => {
    const res =  await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(res.data)
    toast("Fetching Users")
  }
  return (
    <div className='p-5'>
      <h1 className='text-3xl'>This is a home page</h1>
      <div>
        <a href='/Contact'>Contact</a>
        <ToastContainer />

        <button className='mt-5 bg-green-500 text-white block px-4 py-2 rounded' onClick={getUsers}>Get Users</button>
        <div className='bg-blue-200 p-4 w-1/2 mx-auto'>
          <ul>
            {users.map((e, index)=>{
              return <li>{e.username} -- <a href={`/${e.id}`}>Explore</a></li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page