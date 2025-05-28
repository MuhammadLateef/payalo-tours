import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Mountain, Users, ArrowRight, ChevronLeft } from "lucide-react"
import { treks } from "@/lib/treks-data"



export async function generateStaticParams() {
    return treks.map((trek) => ({
        slug: trek.slug,
    }))
}

export default function TrekPage({ params }) {
    const trek = treks.find((trek) => trek.slug === params.slug)

    if (!trek) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            <main className="">
                {/* Hero Section */}
                <section className="relative pt-20">
                    <div className="relative h-[50vh] w-full overflow-hidden">
                        <Image
                            src={trek.mainImage || "/placeholder.svg"}
                            alt={`${trek.title} landscape view`}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="container px-4 md:px-6 text-center">
                                <Badge
                                    variant={
                                        trek.difficulty === "Extreme" || trek.difficulty === "Hard"
                                            ? "destructive"
                                            : trek.difficulty === "Moderate"
                                                ? "secondary"
                                                : "default"
                                    }
                                    className="mb-4"
                                >
                                    {trek.difficulty}
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                                    {trek.title}
                                </h1>
                                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">{trek.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trek Details */}

                <section className="py-12 md:py-16 max-w-[90%] mx-auto">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Main Content */}
                            <div className="flex-1 space-y-8">
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                        <Clock className="h-4 w-4" />
                                        {trek.duration}
                                    </div>
                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                        <Mountain className="h-4 w-4" />
                                        {trek.elevation}
                                    </div>
                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                        <Users className="h-4 w-4" />
                                        {trek.difficulty}
                                    </div>
                                </div>

                                <div className="prose prose-gray max-w-none dark:prose-invert">
                                    <p className="text-lg leading-relaxed">{trek.description}</p>

                                    <div className="my-8">
                                        <Image
                                            src={trek.secondaryImage || "/placeholder.svg"}
                                            alt={`${trek.title} scenic view`}
                                            width={800}
                                            height={500}
                                            className="rounded-lg object-cover w-full"
                                        />
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Experience</h2>
                                    {trek.content.split("\n\n").map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Highlights</h2>
                                    <ul className="space-y-4">
                                        {trek.highlights.map((highlight, index) => (
                                            <li key={index} className="flex flex-col">
                                                <strong>{highlight.title}:</strong> {highlight.description}
                                            </li>
                                        ))}
                                    </ul>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Best Time to Visit</h2>
                                    <p>{trek.bestTimeToVisit}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                    <Link href="/contactus">
                                        <Button size="lg">
                                            Book This Trek
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Button variant="outline" size="lg">
                                        Download Trek Guide
                                    </Button>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-full md:w-1/3 space-y-6">
                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-lg font-semibold mb-4">Related Treks</h3>
                                    <div className="space-y-4">
                                        {treks
                                            .filter((relatedTrek) => relatedTrek.id !== trek.id)
                                            .slice(0, 3)
                                            .map((relatedTrek) => (
                                                <Link
                                                    key={relatedTrek.id}
                                                    href={`/treks/${relatedTrek.slug}`}
                                                    className="flex items-center gap-3 group"
                                                >
                                                    <div className="w-16 h-16 relative rounded-md overflow-hidden">
                                                        <Image
                                                            src={relatedTrek.mainImage || "/placeholder.svg"}
                                                            alt={relatedTrek.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium group-hover:text-primary transition-colors">
                                                            {relatedTrek.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground">{relatedTrek.difficulty}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                    <Button variant="link" asChild className="mt-4 w-full">
                                        <Link href="/">View All Treks</Link>
                                    </Button>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-lg font-semibold mb-4">Need Help Planning?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Our expert guides can help you plan the perfect trekking adventure tailored to your needs.
                                    </p>
                                    <a target="_blank" href="https://wa.me/923554229889?text">
                                        <Button className="w-full">Contact a Guide</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t">
                            <Button variant="outline" asChild>
                                <Link href="/">
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Back to All Treks
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
