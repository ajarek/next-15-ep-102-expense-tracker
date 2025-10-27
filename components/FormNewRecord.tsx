/* eslint-disable react/no-children-prop */
'use client'

import * as React from 'react'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { addExpenseRecord } from '@/lib/actions/addExpenseRecord'

const formSchema = z.object({
  text: z
    .string()
    .min(5, 'Expense description must be at least 5 characters.')
    .max(32, 'Expense description must be at most 32 characters.'),
  date: z.date(),
  category: z.enum(
    [
      'food',
      'transportation',
      'shopping',
      'entertainment',
      'bills',
      'healthcare',
      'other',
    ] as const,
    {
      message: 'Please select a category.',
    }
  ),
  amount: z.string().min(1, 'Amount is required.'),
})

export function RecordAddForm() {
  const form = useForm({
    defaultValues: {
      text: '',
      date: new Date(),
      category: 'other',
      amount: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData()
      formData.append('text', value.text)
      formData.append('date', value.date.toISOString())
      formData.append('category', value.category)
      formData.append('amount', value.amount)
      await addExpenseRecord(formData)
      toast('You submitted the following values:', {})
      form.reset()
    },
  })

  return (
    <Card className='w-full bg-transparent space-y-8'>
      <CardHeader className='flex items-center '>
        <span className='text-2xl gradient p-1 rounded-xl'>💳</span>
        <div>
          <CardTitle className='text-2xl'>Add New Expense</CardTitle>
          <CardDescription className='text-lg text-gray-700 dark:text-gray-400'>
            Track your expenses with the help of a smart app.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form
          id='bug-report-form'
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className='space-y-8 '
        >
          <FieldGroup>
            <div className='flex items-center gap-2'>
              <form.Field
                name='text'
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid} >
                      <FieldLabel htmlFor={field.name} className='text-lg'>
                        Expense Description
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder='Coffee, groceries ...'
                        autoComplete='off'
                        
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              <form.Field
                name='date'
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className='text-lg'>Expense Date</FieldLabel>
                      <Input
                        type='date'
                        id={field.name}
                        name={field.name}
                        value={
                          field.state.value instanceof Date
                            ? field.state.value.toISOString().split('T')[0]
                            : ''
                        }
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(new Date(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        placeholder=''
                        autoComplete='on'
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </div>
            <div className=' flex items-center gap-2 '>
              <form.Field
                name='category'
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor='form-tanstack-select-category' className='text-lg'>
                        Category
                      </FieldLabel>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}

                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                        
                      >
                        <SelectTrigger
                          id='form-tanstack-select-category'
                          aria-invalid={isInvalid}
                          className='min-w-[120px] '
                        >
                          <SelectValue placeholder='Select' />
                        </SelectTrigger>
                        <SelectContent position='item-aligned'>
                          <SelectItem value='food'>🍔 Food</SelectItem>
                          <SelectItem value='transportation'>
                            🚗 Transportation
                          </SelectItem>
                          <SelectItem value='shopping'>🛍️ Shopping</SelectItem>
                          <SelectItem value='entertainment'>
                            🎉 Entertainment
                          </SelectItem>
                          <SelectItem value='bills'>💰 Bills</SelectItem>
                          <SelectItem value='healthcare'>
                            🏥 Healthcare
                          </SelectItem>
                          <SelectItem value='other'>🔧 Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  )
                }}
              />
              <form.Field
                name='amount'
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className='text-lg'>Amount</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder='50.00'
                        autoComplete='off'
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='vertical'>
          <Button
            type='submit'
            form='bug-report-form'
            className='text-xl'
            size={'xl'}
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
