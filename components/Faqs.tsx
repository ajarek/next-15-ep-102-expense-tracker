'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is ExpenseTracker AI?',
      answer:
        'ExpenseTracker AI is an intelligent financial management tool that uses artificial intelligence to help you monitor your spending patterns, get smart category suggestions, and receive personalized insights to improve your financial health.',
      icon: '🧠',
    },
    {
      id: 'item-2',
      question: 'How does the AI work?',
      answer:
        'Our AI analyzes your spending data to automatically categorize expenses, detect patterns, and provide personalized recommendations. You can also ask the AI questions about your spending habits and get instant, intelligent responses.',
      icon: '🤖',
    },
    {
      id: 'item-3',
      question: 'Is ExpenseTracker AI free?',
      answer:
        'Yes, ExpenseTracker AI offers a free plan with basic AI features including smart categorization and insights. Premium plans are available for advanced AI analytics and unlimited AI interactions.',
      icon: '💎',
    },
  ]

  return (
    <section className='w-full flex flex-col items-center py-4'>
      <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg mt-4'>
        <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
        <span className='hidden sm:inline'>FAQ</span>
        <span className='sm:hidden'>FAQ</span>
      </div>
      <div className='w-full mx-auto max-w-7xl px-4 md:px-6 '>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='text-balance text-3xl font-bold md:text-4xl lg:text-6xl'>
            Frequently Asked <span className='text-emerald-600'>Questions</span>
          </h2>
          <p className='text-muted-foreground mt-4 text-balance'>
            Everything you need to know about ExpenseTracker AI and how it can
            transform your financial management.
          </p>
        </div>

        <div className='w-full mx-auto mt-12 max-w-4xl '>
          <Accordion
            type='single'
            collapsible
            className='bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0'
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className='border-dashed'
              >
                <AccordionTrigger className=' cursor-pointer  hover:no-underline text-2xl '>
                  <span className='text-2xl gradient p-2 rounded-xl'>
                    {item.icon}
                  </span>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className='text-lg text-gray-600 dark:text-gray-400'>
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
