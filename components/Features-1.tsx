import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

export default function Features() {
    return (
        
            <div className="w-full @container mx-auto max-w-7xl px-6 ">
                
                <div className=" @min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center ">
                    <Card className="group shadow-zinc-950/5 ">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                               <span className='text-4xl gradient p-2 rounded-xl'>🤖</span>
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl font-semibold">AI Insights</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">Smart analysis of your spending patterns.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <span className='text-4xl gradient p-2 rounded-xl '>✨</span>
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl font-semibold">Auto Categories</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-lg">Intelligent expense categorization.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <span className='text-4xl gradient p-2 rounded-xl'>📊</span>
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl font-semibold">Smart Dashboard</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-lg">Beautiful, intuitive financial overview.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
       
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
