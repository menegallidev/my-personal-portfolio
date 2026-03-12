import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { NavigationItem } from "@/lib/portfolio-content"

type SiteHeaderProps = {
  email: string
  name: string
  navigationItems: NavigationItem[]
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

function SiteHeader({ email, name, navigationItems }: SiteHeaderProps) {
  const initials = getInitials(name) || "YN"

  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-7xl px-6 pt-4 sm:px-8 lg:px-12">
      <Card className="border-border/70 bg-background/80 shadow-[0_24px_60px_-48px_rgba(0,0,0,0.7)] backdrop-blur">
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full border border-border/70 bg-muted/30">
              <span className="font-serif text-lg tracking-tight">
                {initials}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[0.65rem] tracking-[0.32em] text-muted-foreground uppercase">
                Portfolio
              </p>
              <p className="truncate font-serif text-xl tracking-tight">
                {name}
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-1 sm:justify-center"
          >
            {navigationItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full sm:w-auto"
          >
            <a href={`mailto:${email}`}>{email}</a>
          </Button>
        </div>
      </Card>
    </header>
  )
}

export { SiteHeader }
