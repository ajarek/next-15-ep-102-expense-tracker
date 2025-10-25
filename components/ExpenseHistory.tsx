import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const ExpenseHistory = () => {
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
      className="w-full max-w-4xl mx-auto cursor-grab"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
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