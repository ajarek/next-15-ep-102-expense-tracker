import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
    stars:string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Verified User',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: '“ExpenseTracker has completely transformed my budgeting. The  insights are incredibly helpful and I now have full control over my finances!”.',
        stars:'⭐⭐⭐⭐⭐',
    },
    {
        name: 'Yves Kalume',
        role: 'Verified User',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: '“The powered insights from ExpenseTracker have helped me identify and reduce unnecessary spending. The smart categorization is amazing!”',
        stars:'⭐⭐⭐⭐⭐',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Verified User',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: '“ExpenseTracker  is so intelligent and easy to use. The  recommendations are spot-on and have genuinely improved my financial habits!”',
        stars:'⭐⭐⭐⭐⭐',
    },
    
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function Testimonial() {
    return (
        <section className='w-full flex flex-col items-center py-4'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg mt-4'>
        <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
        <span className='hidden sm:inline'>Testimonials</span>
        <span className='sm:hidden'>Testimonials</span>
      </div>
            <div className="py-8">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="className='text-balance text-3xl font-bold md:text-4xl lg:text-6xl">What Our Users <span className='text-emerald-600'>Say</span></h2>
                        <p className="mt-6">Join thousands of satisfied users who have transformed their financial habits with ExpenseTracker.</p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image, stars }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                    <p className="text-gray-700 dark:text-gray-300">{stars}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                <div className="w-full h-1 gradient mt-16"></div>
                </div>
            </div>
        </section>
    )
}
