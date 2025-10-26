'use client'
import React from 'react'
import { Button } from './ui/button'
import deleteRecord  from '@/lib/actions/deleteRecord'
import { Trash2 } from 'lucide-react'

const ButtonDeleteRecord = ({ id }: { id: string }) => {
  return (
    <form onSubmit={async () => await deleteRecord(id)}>
      <input
        type='hidden'
        name='id'
        value={id}
      />
      <Button
        type='submit'
        variant='destructive'
        size='icon'
      >
        <Trash2 />
      </Button>
    </form>
  )
}

export default ButtonDeleteRecord