import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const handleToggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <>
        <Header/>
        <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" 
                alt="background" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black/70 text-amber-50 my-36 mx-auto right-0 left-0 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Register"}
            </h1>

            {!isSignInForm && (
                <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-900'/>
            )}

            <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-900'/>
            
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-900'/>
            
            <button className='p-4 myfalse-6 bg-red-700 w-full rounded-lg'>
                {isSignInForm ? "Sign In" : "Create Account"}
            </button>
            
            <p className='py-4 cursor-pointer' onClick={handleToggleForm}>
                {isSignInForm ? "New to Netflix? Register Now" : "Already a member? Sign In Now"}
            </p>
        </form>

    </>
  )
}

export default Login    