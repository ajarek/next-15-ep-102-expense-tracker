import ForGuests from '@/components/ForGuests'
import { RecordAddForm } from '@/components/FormNewRecord'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import ExpenseChart from '@/components/ExpenseChart'
import ExpenseStatistic from '@/components/ExpenseStatistic'
import getRecords from '@/lib/actions/getRecords'
import ExpenseHistory from '@/components/ExpenseHistory'

export default async function Home() {
  const { records } = await getRecords();
  const user = await currentUser()
const total = records? records.reduce((acc,record)=>acc+record.amount,0):0
  if (!user) {
    return <ForGuests />
  }

  return (
    <div className='min-h-[calc(100vh-64px)]  px-4 flex flex-col items-center justify-start gap-4 pt-24 pb-8 '>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col  px-4 py-8 rounded-xl border-2 shadow-2xl '>
            <div className='flex items-start justify-start gap-4 '>
              <Image
                src={user.imageUrl}
                alt='image'
                width={80}
                height={80}
                className='rounded-lg max-lg:hidden '
              />
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl gradient p-1 rounded-xl'>👋</span>
                  <h2 className='text-2xl font-bold'>
                    Welcome Back, {user.firstName}!
                  </h2>
                </div>
                <p className='text-gray-700 dark:text-gray-400'>
                  Here&#39;s a quick overview of your recent expense activity.
                  Track your spending, analyze patterns, and manage your budget
                  efficiently!
                </p>
                <div className='flex items-center gap-4 my-8 '>
                  <div className='flex items-center gap-2 border-2 rounded-xl px-2'>
                    <span className='text-lg gradient p-1 rounded-xl'>📅</span>
                    <h2 className='text-lg font-bold'>
                      Joined {new Date(user.createdAt).toLocaleDateString()}
                    </h2>
                  </div>
                  <div className='flex items-center gap-2 border-2 rounded-xl px-2'>
                    <span className='text-lg gradient p-1 rounded-xl'>⚡</span>
                    <h2 className='text-lg font-bold'>
                      Last Active{' '}
                      {user.lastActiveAt
                        ? new Date(user.lastActiveAt).toLocaleDateString()
                        : 'N/A'}
                    </h2>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-green-300 dark:bg-green-600 rounded-xl p-2 '>
          <div className='flex items-center justify-center gap-4 '>
            <span className='text-2xl bg-green-400 p-2 rounded-full'>📈</span>
            <div>
              <h2 className='text-2xl font-bold'>Total Expense</h2>
              <p className='text-xl text-gray-700 dark:text-gray-300'>
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
          </div>

          <RecordAddForm />
        </div>
        <div className='flex flex-col gap-4'>
          <ExpenseChart />
          <ExpenseStatistic />
        </div>
      </div>
      <ExpenseHistory/>
    </div>
  )
}
