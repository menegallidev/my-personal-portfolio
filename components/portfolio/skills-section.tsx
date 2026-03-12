import { SectionHeading } from "@/components/portfolio/section-heading"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { SkillGroup } from "@/lib/portfolio-content"

type SkillsSectionProps = {
  description: string
  eyebrow: string
  groups: SkillGroup[]
  title: string
}

function SkillsSection({
  description,
  eyebrow,
  groups,
  title,
}: SkillsSectionProps) {
  const totalSkills = groups.reduce(
    (count, group) => count + group.skills.length,
    0
  )

  return (
    <SectionShell id="skills">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <Card className="border-border/70 bg-primary text-primary-foreground shadow-[0_36px_90px_-60px_rgba(0,0,0,0.9)]">
            <CardContent className="flex h-full flex-col justify-between gap-10 p-8">
              <div className="space-y-5">
                <Badge
                  variant="secondary"
                  className="border border-white/10 bg-white/10 text-white"
                >
                  Skill Matrix
                </Badge>
                <p className="max-w-md font-serif text-4xl leading-tight tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="max-w-md text-sm leading-7 text-primary-foreground/78">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-serif text-5xl leading-none">
                    {totalSkills}
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.32em] text-primary-foreground/72 uppercase">
                    Listed Skills
                  </p>
                </div>
                <div>
                  <p className="font-serif text-5xl leading-none">
                    {groups.length}
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.32em] text-primary-foreground/72 uppercase">
                    Groups
                  </p>
                </div>
                <div>
                  <p className="font-serif text-5xl leading-none">01</p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.32em] text-primary-foreground/72 uppercase">
                    Layout
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <Card
                key={group.title}
                className="border-border/70 bg-card/90 shadow-[0_28px_70px_-56px_rgba(0,0,0,0.8)]"
              >
                <CardHeader className="gap-3">
                  <CardTitle className="font-serif text-2xl">
                    {group.title}
                  </CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-3 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

export { SkillsSection }
