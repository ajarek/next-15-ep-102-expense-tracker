'use client'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { LogIn, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'

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
                <Button
                  asChild
                  className={'gradient '}
                >
                  <Link
                    href='#'
                    className='flex items-center text-white  '
                  >
                    <span className='font-semibold '>Sign In</span>
                    <LogIn className='font-semibold' />
                  </Link>
                </Button>
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
