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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
  title: z
    .string()
    .min(5, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  date: z.date(),
  category: z.enum(['auto', 'en'] as const, { message: 'Please select a category.' }),
})

export function RecordAddForm() {
  const form = useForm({
    defaultValues: {
      title: '',
      date: new Date(),
      category: 'auto',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast('You submitted the following values:', {})
      form.reset()
    },
  })

  return (
    <Card className='w-full bg-transparent'>
      <CardHeader className='flex items-center '>
        <span className='text-lg gradient p-1 rounded-xl'>💳</span>
        <div>
          <CardTitle>Add New Expense</CardTitle>
          <CardDescription>
            Track your spending with AI assistance.
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
        >
          <FieldGroup>
            <div className='flex items-center gap-2'>
              <form.Field
                name='title'
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Expense Description</FieldLabel>
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
                      <FieldLabel htmlFor={field.name}>Expense Date</FieldLabel>
                      <Input
                        type='date'
                        id={field.name}
                        name={field.name}
                        value={field.state.value instanceof Date ? field.state.value.toISOString().split('T')[0] : ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(new Date(e.target.value))}
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
            <div>
              <form.Field
  name="category"
  children={(field) => {
    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
    return (
      <Field orientation="responsive" data-invalid={isInvalid}>
        <FieldContent>
          <FieldLabel htmlFor="form-tanstack-select-category">
            Category
          </FieldLabel>
          
          {isInvalid && <FieldError errors={field.state.meta.errors} />}
        </FieldContent>
        <Select
          name={field.name}
          value={field.state.value}
          onValueChange={field.handleChange}
        >
          <SelectTrigger
            id="form-tanstack-select-category"
            aria-invalid={isInvalid}
            className="min-w-[120px]"
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
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
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
