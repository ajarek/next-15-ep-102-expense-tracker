import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      className='flex items-center flex-shrink-0 group transition-all duration-300 hover:scale-105 gap-2'
      href='/'
    >
      <span className='      text-xl  sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 gradient   flex items-center justify-center rounded-xl'>
        💰
      </span>

      <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold  gradient bg-clip-text text-transparent'>
        <span className='hidden sm:inline'>ExpenseTracker AI</span>
        <span className='sm:hidden'>ExpenseTracker</span>
      </span>
    </Link>
  )
}

export default Logo
