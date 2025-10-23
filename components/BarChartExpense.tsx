'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A bar chart'





export function BarChartExpense({records}:{records:{date:string, amount:number}[]}

) {
  const chartData = records.map((record) => ({
  date: record.date,
  amount: Number(record.amount),
}))

const chartConfig = {
  amount: {
    label: 'Amount',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

    return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-2xl'>
          <span className='text-2xl gradient p-1 rounded-xl'>📊</span>
          Expense Chart
        </CardTitle>
        <CardDescription className='text-lg text-gray-700 dark:text-gray-400'>
          Visual representation of your spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey='amount'
              fill='var(--color-amount)'
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
