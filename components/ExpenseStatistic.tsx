import React from 'react'
import getRecords from '@/lib/actions/getRecords'

const ExpenseStatistic = async () => {
const daysAverage = 3
const { records } = await getRecords();
const filterRecords=records?.filter((record,index)=>index<daysAverage)
console.log(filterRecords)

  return (
    <div className='flex flex-col gap-4 p-4  rounded-xl border-2 shadow-2xl'>
      <section className='flex items-center gap-4 '>
        <span className='text-2xl gradient p-1 rounded-xl'>📉</span>
        <div>
          <h2 className='text-2xl font-bold'>Expense Statistic</h2>
          <p className='text-lg text-gray-700 dark:text-gray-400'>
            Your spending insights and ranges.
          </p>
        </div>
      </section>
      <section className='min-h-[180px] flex flex-col justify-between items-center bg-gray-400 dark:bg-gray-700 p-4 rounded-xl'>
        <h1 className='uppercase text-2xl'>Average Daily spending</h1>
        <span className='text-3xl font-bold'>$38.00</span>
        <div className='flex items-center gap-2 bg-primary/50 py-1 px-2 rounded-lg'>
          <span className='text-2xl gradient p-1 rounded-xl'></span>
          <p className=''>Based on {daysAverage} days with expenses</p>
        </div>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='bg-red-300 dark:bg-red-600 rounded-xl p-2'>
          <div className='flex items-center gap-4 '>
            <span className='text-2xl bg-red-400 py-1 px-4 rounded-full'>↑</span>
            <div>
              <h2 className='text-2xl font-bold'>Highest</h2>
              <p className='text-xl text-gray-700 dark:text-gray-300'>
                $50
              </p>
            </div>
          </div>
        </div>
        <div className='bg-green-300 dark:bg-green-600 rounded-xl p-2'>
          <div className='flex items-center gap-4 '>
            <span className='text-2xl bg-green-400 py-1 px-4 rounded-full'>↓</span>
            <div>
              <h2 className='text-2xl font-bold'>Lowest</h2>
              <p className='text-xl text-gray-700 dark:text-gray-300'>
                $15
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpenseStatistic
