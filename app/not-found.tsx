import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Frown className="h-10 w-10" strokeWidth={1} />
      </div>
      <h1 className="mb-2 text-3xl font-bold text-foreground">Page Not Found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or doesn&apos;t exist.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button size="lg">Go Home</Button>
        </Link>
        <Link href="/shop">
          <Button variant="secondary" size="lg">
            Browse Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
