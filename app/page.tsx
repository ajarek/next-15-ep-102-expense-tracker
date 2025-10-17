import ForGuests from "@/components/ForGuests";


export default function Home() {
  const user=null; // Replace with actual user authentication logic

  if (!user) {
    return <ForGuests />
  }
  return (
    <div className='min-h-[calc(100vh-64px)]   px-4 flex flex-col items-center justify-center  '>
                <h1 className='text-3xl font-bold'>For Logged In Guests</h1>
    </div>
  )
}
