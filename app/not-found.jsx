import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <Mountain className="h-16 w-16 mb-4 text-muted-foreground" />
      <h1 className="text-4xl font-bold mb-2">Trail Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The trek you're looking for seems to be off the map. Let's get you back on the right trail.
      </p>
      <Button asChild>
        <Link href="/">Return to Base Camp</Link>
      </Button>
    </div>
  )
}
