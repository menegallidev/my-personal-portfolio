import { ProjectCard } from "@/components/portfolio/project-card"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SectionShell } from "@/components/portfolio/section-shell"
import type { Project } from "@/lib/portfolio-content"

type ProjectsSectionProps = {
  description: string
  eyebrow: string
  projects: Project[]
  title: string
}

function ProjectsSection({
  description,
  eyebrow,
  projects,
  title,
}: ProjectsSectionProps) {
  return (
    <SectionShell id="projects">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export { ProjectsSection }
