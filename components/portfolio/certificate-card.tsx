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
import { Separator } from "@/components/ui/separator"
import type { Certificate } from "@/lib/portfolio-content"

type CertificateCardProps = {
  certificate: Certificate
}

function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden border-border/70 bg-card/90 shadow-[0_28px_70px_-56px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1">
      <div className="border-b border-border/70 bg-muted/30 px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <Badge variant="outline">{certificate.year}</Badge>
          <p className="text-[0.65rem] tracking-[0.32em] text-muted-foreground uppercase">
            {certificate.credential}
          </p>
        </div>
      </div>

      <CardHeader className="gap-3">
        <CardTitle className="font-serif text-2xl">
          {certificate.title}
        </CardTitle>
        <CardDescription>{certificate.summary}</CardDescription>
      </CardHeader>

      <CardContent className="pb-0">
        <Separator className="bg-border/70" />
        <div className="pt-5">
          <p className="text-[0.65rem] tracking-[0.32em] text-muted-foreground uppercase">
            Issuer
          </p>
          <p className="mt-2 text-sm leading-7">{certificate.issuer}</p>
        </div>
      </CardContent>

      {certificate.href ? (
        <CardFooter className="pt-6">
          <Button asChild variant="outline" className="rounded-full">
            <a href={certificate.href} target="_blank" rel="noreferrer">
              View Credential
              <ArrowUpRight />
            </a>
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  )
}

export { CertificateCard }
