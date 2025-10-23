'use server';
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addExpenseRecord(data: FormData) {
  const user = await currentUser()
  if (!user) {
    throw new Error('User not authenticated');
  }

  const email = user.emailAddresses[0]?.emailAddress ||  `${user.id}@clerk`;

  const dbUser = await db.user.upsert({
    where: { clerkUserId: user.id },
    update: {
      email,
     
      name: user.firstName ?? 
        user.lastName ?? undefined,
      
      imageUrl: user.imageUrl ?? undefined,
    },
    create: {
      clerkUserId: user.id,
      email,
      
      name: user.firstName ?? 
        user.lastName ?? undefined,
      
      imageUrl: user.imageUrl ?? undefined,
    },
  });

  const text = data.get('text') as string;
  const date = new Date(data.get('date') as string);
  const category = data.get('category') as string;
  const amount = parseFloat(data.get('amount') as string);

  if (Number.isNaN(amount)) {
    throw new Error('Invalid amount');
  }
  try{
  await db.record.create({
    data: {
      userId: dbUser.clerkUserId,
      text,
      date,
      category,
      amount,
    },
  });

  revalidatePath('/dashboard');
}catch (error) {
    console.error('Error adding expense record:', error);
    return {
      error: 'An unexpected error occurred while adding the expense record.',
    };
  }
}
