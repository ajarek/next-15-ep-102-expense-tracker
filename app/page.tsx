import ForGuests from "@/components/ForGuests";
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  

   const user = await currentUser();
   
  if (!user) {
    return <ForGuests />;
  }
  return (
    <div className='min-h-[calc(100vh-64px)]  px-4 flex flex-col items-center justify-center  '>
                <h1 className='text-3xl font-bold'>For Logged In Guests {user.firstName}</h1>
    </div>
  )
}
