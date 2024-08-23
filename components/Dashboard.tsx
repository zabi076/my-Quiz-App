"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {

  const {data :Session} = useSession()
  return (
    <>
    {Session ? (
      <>
        <h1>Welcome back </h1>
      </>
    ) : (
      <>
        <h1 className='text-red-500 text-3xl font-bold'>you are not logged in </h1>
        
        <div className='flex space-x-5'>
        <button onClick={() => signIn("google")} className='border border-black rounded-lg px-5 py-1'>sign in with Google</button>
        <button onClick={() => signIn("github")} className='border border-black rounded-lg px-5 py-1 bg-green-500'>sign in with Github</button>
        </div>
      </>
    )}
    </>
  )
}

export default Dashboard;