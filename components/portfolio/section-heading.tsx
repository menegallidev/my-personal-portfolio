import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  className?: string
  description: string
  eyebrow: string
  title: string
  titleClassName?: string
}

function SectionHeading({
  className,
  description,
  eyebrow,
  title,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Badge
        variant="outline"
        className="rounded-full px-3 py-1 tracking-[0.32em] uppercase"
      >
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2
          className={cn(
            "max-w-3xl font-serif text-3xl leading-none tracking-tight sm:text-4xl lg:text-5xl",
            titleClassName
          )}
        >
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export { SectionHeading }
