import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import type {Record} from "@/types/Record"
import ButtonDeleteRecord from './ButtonDeleteRecord'

interface ExpenseHistoryProps {
  records: Record[]
}

const ExpenseHistory = ({ records }: ExpenseHistoryProps) => {
  return (
    <div className='w-full flex flex-col gap-4 p-4  rounded-xl border-2 shadow-2xl'>
      <section className='flex items-center gap-4 '>
        <span className='text-2xl gradient p-1 rounded-xl'>📉</span>
        <div>
          <h2 className='text-2xl font-bold'>Expense History</h2>
          <p className='text-lg text-gray-700 dark:text-gray-400'>
            Your spending timeline.
          </p>
        </div>
      </section>
     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto cursor-grab"
    >
      <CarouselContent>
        {records.map((record) => (
          <CarouselItem key={record.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className='box-border border-2 border-green-500 shadow-lime-400'>
                <CardContent className="flex flex-col aspect-square items-start justify-between p-2">
                  <div className='w-full flex items-center justify-between'>
                    <span className='text-xl'>{record.createdAt.toLocaleDateString()}</span>
                    <span className='text-2xl font-semibold'>${record.amount.toFixed(2)}</span>
                  </div>
                  <p className='text-xl'>{record.category}</p>
                  <p className="text-xl">{record.text}</p>
                  <div className='w-full flex items-center justify-end'>
                    <ButtonDeleteRecord id={record.id}/>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default ExpenseHistory