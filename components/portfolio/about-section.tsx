import { SectionHeading } from "@/components/portfolio/section-heading"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { AboutContent } from "@/lib/portfolio-content"

type AboutSectionProps = {
  content: AboutContent
}

function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionShell id="about">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <Card className="border-border/70 bg-card/85 shadow-[0_28px_70px_-56px_rgba(0,0,0,0.8)]">
          <CardContent className="grid gap-8 p-6 md:p-8">
            <div className="space-y-4">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-8 text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Separator className="bg-border/70" />

            <div className="grid gap-4 md:grid-cols-3">
              {content.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-[1.6rem] border border-border/70 bg-muted/25 p-5 transition-colors duration-300 hover:bg-muted/45"
                >
                  <p className="font-serif text-2xl tracking-tight">
                    {highlight.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  )
}

export { AboutSection }
