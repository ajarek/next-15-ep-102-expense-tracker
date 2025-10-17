import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ChevronRight } from 'lucide-react'


const HeroSection = () => {
  return (
    <main className='w-full overflow-hidden min-h-[400px]   relative rounded-xl  flex flex-col items-center justify-center '>
       <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg mt-4'>
                  <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
                  <span className='hidden sm:inline'>
                    AI-Powered Financial Management
                  </span>
                  <span className='sm:hidden'>AI Financial Management</span>
                </div>
        
      <section>
        <div className='relative p-4  '>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className='absolute inset-0 -z-20'
          >
            {/* No children needed here, so just an empty fragment */}
            <></>
          </AnimatedGroup>
          <div className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)] '></div>
          <div className='mx-auto max-w-7xl px-6  min-h-[400px] lg:min-h-[250px] flex flex-col items-center justify-center  '>
            <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
              <TextEffect
                preset='fade-in-blur'
                speedSegment={0.3}
                as='h1'
                className=' font-bold text-balance text-3xl md:text-5xl   '
              >
                Welcome  to Expense Tracker AI
              </TextEffect>
              <TextEffect
                per='line'
                preset='fade-in-blur'
                speedSegment={0.3}
                delay={0.5}
                as='p'
                className='mx-auto mt-8 max-w-[550px] font-bold text-xl text-primary text-shadow-2xl '
              >
                Track your expenses, manage your budget, and get AI-powered insights to take control of your finances with intelligent automation.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 1.2,
                        type: 'spring',
                        bounce: 0.3,
                      },
                    },
                  },
                }}
                className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'
              >
                <div
                  key={1}
                  className='flex items-center gap-8'
                >
                  <Button
                    asChild
                    size='xl'
                    className='rounded-xl gradient '
                  >
                    <Link href='/menu'>
                      <span className='text-nowrap text-white  text-xl space-x-2 flex items-center hover:text-gray-200'>
                        Get Started Free
                        <ChevronRight />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size='xl'
                    variant='outline'
                    className='rounded-xl px-5 text-base '
                  >
                    <Link href='/menu'>
                      <span className='text-nowrap text-xl'>Learn More</span>
                    </Link>
                  </Button>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </section>
      
      
    </main>
  )
}
export default HeroSection