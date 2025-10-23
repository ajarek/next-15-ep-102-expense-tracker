import React from 'react'
import { BarChartExpense } from './BarChartExpense'
import getRecords from '@/lib/actions/getRecords'


const ExpenseChart = async () => {
  const { records } = await getRecords();

  // Normalize records to the shape expected by BarChartExpense: { date: string, amount: number }
  const chartRecords =
    records?.map((record) => ({
      date:
        // Ensure date is a string (ISO date) so it serializes safely to the client
        record.date instanceof Date
          ? record.date.toISOString().split('T')[0]
          : typeof record.date === 'number'
          ? new Date(record.date).toISOString().split('T')[0]
          : String(record.date),
      amount: Number(record.amount),
    })) || [];

  // Aggregate amounts by date (sum amounts for identical dates)
  const aggregatedMap = new Map<string, number>();
  for (const r of chartRecords) {
    const prev = aggregatedMap.get(r.date) || 0;
    aggregatedMap.set(r.date, prev + r.amount);
  }

  const aggregatedRecords = Array.from(aggregatedMap.entries()).map(
    ([date, amount]) => ({ date, amount })
  );

  // Sort chronologically ascending so the chart X axis reads right-> left
  aggregatedRecords.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='flex flex-col gap-4 p-4  rounded-xl border-2 shadow-2xl'>
      <BarChartExpense records={aggregatedRecords} />
    </div>
  )
}

export default ExpenseChart
