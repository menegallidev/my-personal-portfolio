import * as React from "react"

import { cn } from "@/lib/utils"

function SectionShell({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("scroll-mt-28 py-12 md:py-16", className)}
      {...props}
    />
  )
}

export { SectionShell }
