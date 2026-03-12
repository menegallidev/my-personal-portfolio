import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import type { HeroContent } from "@/lib/portfolio-content"

type HeroSectionProps = {
  content: HeroContent
}

function HeroSection({ content }: HeroSectionProps) {
  return (
    <SectionShell className="pt-10 md:pt-14">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,430px)] xl:items-center">
        <div className="space-y-8 motion-safe:animate-in motion-safe:duration-700 motion-safe:fade-in motion-safe:slide-in-from-bottom-4">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 tracking-[0.32em] uppercase"
            >
              {content.eyebrow}
            </Badge>
            <div className="w-fit rounded-full border border-border/70 bg-background/80 px-4 py-2 backdrop-blur">
              <p className="text-sm leading-6 text-muted-foreground">
                Pressione{" "}
                <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.72rem] text-foreground">
                  D
                </kbd>{" "}
                para alternar o tema do site.
              </p>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {content.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {content.description}
              </p>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {content.secondaryDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-11 rounded-full px-5">
              <a href={`mailto:${content.email}`}>
                <Mail />
                {content.email}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-full px-5"
            >
              <Link href="#projects">
                Ver Projetos
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.imageNotes.map((note) => (
              <Card
                key={note.label}
                className="border-border/70 bg-card/80 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <CardHeader className="gap-1 p-5">
                  <p className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                    {note.label}
                  </p>
                  <CardDescription className="text-sm leading-7">
                    {note.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card className="group overflow-hidden rounded-[2rem] border-border/70 bg-card/85 p-4 shadow-[0_32px_90px_-52px_rgba(0,0,0,0.8)] backdrop-blur transition-transform duration-500 hover:-translate-y-1 motion-safe:animate-in motion-safe:duration-700 motion-safe:fade-in motion-safe:slide-in-from-right-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-border/70 bg-muted/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.18))] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.45))]" />
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill
              priority
              className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <CardContent className="mt-4 grid gap-3 px-0 sm:grid-cols-2">
            {content.imageNotes.map((note) => (
              <div
                key={`${note.label}-image`}
                className="rounded-[1.4rem] border border-border/70 bg-muted/30 p-4"
              >
                <p className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                  {note.label}
                </p>
                <p className="mt-2 text-sm leading-7">{note.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  )
}

export { HeroSection }
