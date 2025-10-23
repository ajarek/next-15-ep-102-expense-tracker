'use client'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className='fixed z-20 w-full mx-auto max-w-7xl '
      >
        <div
          className={cn(
            'mx-auto   px-4 transition-all duration-300  ',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className='relative h-16 flex flex-wrap items-center justify-between gap-6  lg:gap-0 border-b-2 '>
            <div className='flex w-full justify-between lg:w-auto'>
              <Logo />

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
              </button>
            </div>

            <div className='absolute inset-0 m-auto hidden size-fit lg:block'>
              <ul className='flex gap-8 text-sm'>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className='text-xl text-muted-foreground  block  hover:text-emerald-500 transition duration-300 ease-in-out '
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
              <div className='lg:hidden'>
                <ul className=' text-base'>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-xl text-muted-foreground  block  hover:text-emerald-500 transition duration-300 ease-in-out'
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center gap-4'>
                        <div className='hidden sm:block'>
              <SignedOut>
                <SignInButton>
                  <button className='relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95'>
                    <div className='relative z-10 flex items-center gap-1 sm:gap-2'>
                      <span>Sign In</span>
                      <svg
                        className='w-3 h-3 sm:w-4 sm:h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='p-1  rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
                <AnimatedThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
