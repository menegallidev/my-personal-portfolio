import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden border-border/70 bg-card/90 shadow-[0_28px_70px_-56px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_36px_90px_-52px_rgba(0,0,0,0.85)]",
        project.featured && "lg:col-span-2"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-border/70 bg-muted/40",
          project.featured ? "aspect-[16/9]" : "aspect-[16/11]"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.18))] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.4))]" />
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover grayscale transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <CardTitle className="font-serif text-2xl sm:text-[1.8rem]">
              {project.title}
            </CardTitle>
            <CardDescription className="max-w-2xl text-sm leading-7">
              {project.description}
            </CardDescription>
          </div>

          {project.featured ? (
            <Badge variant="secondary">Featured</Badge>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pb-5">
        {project.tech?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>

      {project.links?.length ? (
        <CardFooter
          className={cn(
            "flex flex-wrap gap-3",
            project.tech?.length ? "border-t border-border/70 pt-5" : "pt-0"
          )}
        >
          {project.links.map((link) => (
            <Button
              key={link.label}
              asChild
              variant={link.variant ?? "default"}
              className="rounded-full"
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
                <ArrowUpRight />
              </a>
            </Button>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  )
}

export { ProjectCard }
