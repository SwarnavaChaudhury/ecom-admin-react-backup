import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className='h-screen'>

      <section className='bg-[#F9FAFB] h-full flex flex-col items-center justify-center'>

        <img src="/imgs/wscube-tech-logo-2.svg" alt="" className='w-50 mb-5' />

        <div className='p-5 shadow-lg border-1 border-stone-100 w-[500px] bg-white rounded-xl'>

          <form action="">
            <h2 className='text-2xl font-bold'>
              Sign in to your account
            </h2>

            <label htmlFor="email" className='block mt-5 font-bold mb-2'>
              Email
            </label>
            <input type="email" name="email" id="email" placeholder='Enter Email' className='w-full h-12 rounded-md bg-[#F9FAFB] border-1 border-stone-300' />

            <label htmlFor="password" className='block mt-5 font-bold mb-2'>
              Password
            </label>
            <input type="password" name="password" id="password" placeholder='Enter Password' className='w-full h-12 rounded-md bg-[#F9FAFB] border-1 border-stone-300' />

            <Link to={'/dashboard'}>
              <button className='bg-blue-600 text-white w-full h-10 rounded-md mt-5 cursor-pointer font-bold'>
                Sign In
              </button>
            </Link>

          </form>

        </div>

      </section>

    </div>
  )
}
