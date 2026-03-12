import { CertificateCard } from "@/components/portfolio/certificate-card"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SectionShell } from "@/components/portfolio/section-shell"
import type { Certificate } from "@/lib/portfolio-content"

type CertificatesSectionProps = {
  certificates: Certificate[]
  description: string
  eyebrow: string
  title: string
}

function CertificatesSection({
  certificates,
  description,
  eyebrow,
  title,
}: CertificatesSectionProps) {
  return (
    <SectionShell id="certificates">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export { CertificatesSection }
