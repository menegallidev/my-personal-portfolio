import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

import { SectionHeading } from "@/components/portfolio/section-heading"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { ContactContent, SocialLink } from "@/lib/portfolio-content"

type ContactSectionProps = {
  content: ContactContent
  footerNote: string
  socialLinks: SocialLink[]
}

function ContactSection({
  content,
  footerNote,
  socialLinks,
}: ContactSectionProps) {
  return (
    <SectionShell id="contact" className="pb-20">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <Card className="border-border/70 bg-primary text-primary-foreground shadow-[0_36px_90px_-60px_rgba(0,0,0,0.95)]">
            <CardHeader className="gap-4 p-6 sm:p-8">
              <Badge
                variant="secondary"
                className="w-fit border border-white/10 bg-white/10 text-white"
              >
                Email
              </Badge>
              <CardTitle className="max-w-lg font-serif text-3xl leading-tight tracking-tight break-all sm:text-5xl sm:break-normal">
                {content.email}
              </CardTitle>
              <CardDescription className="max-w-md text-primary-foreground/75">
                {content.description}
              </CardDescription>
            </CardHeader>

            <div className="space-y-8 px-6 pb-6 sm:px-8 sm:pb-8">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-auto w-full max-w-full justify-start rounded-full border border-white/10 bg-white px-4 py-3 text-left break-all whitespace-normal text-black hover:bg-white/90 sm:h-11 sm:w-fit sm:justify-center sm:break-normal sm:whitespace-nowrap"
              >
                <a href={`mailto:${content.email}`}>
                  <Mail />
                  {content.email}
                </a>
              </Button>

              <Separator className="bg-white/10" />

              <div className="grid gap-4 sm:grid-cols-2">
                {content.notes.map((note) => (
                  <div
                    key={note.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-[0.65rem] tracking-[0.32em] text-primary-foreground/72 uppercase">
                      {note.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-primary-foreground/84">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              const isEmail = item.href.startsWith("mailto:")

              return (
                <Card
                  key={item.label}
                  className="group border-border/70 bg-card/90 shadow-[0_28px_70px_-56px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20"
                >
                  <Link
                    href={item.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="flex h-full flex-col"
                  >
                    <CardHeader className="gap-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full border border-border/70 bg-muted/35">
                          <Icon className="size-4" />
                        </div>
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <div className="min-w-0 space-y-2 break-words">
                        <CardTitle className="font-serif text-2xl">
                          {item.label}
                        </CardTitle>
                        <CardDescription className="break-words">
                          {item.value}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>

        <Card className="border-border/70 bg-background/70 shadow-none">
          <CardFooter className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              {footerNote}
            </p>
            <Button asChild variant="ghost">
              <Link href="#top">Voltar ao Topo</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionShell>
  )
}

export { ContactSection }
