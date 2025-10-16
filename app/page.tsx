import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className='pt-16 px-4 flex flex-col items-center  '>
      <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg mt-4'>
        <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
        <span className='hidden sm:inline'>
          AI-Powered Financial Management
        </span>
        <span className='sm:hidden'>AI Financial Management</span>
      </div>
      <HeroSection/>
    </div>
  )
}
