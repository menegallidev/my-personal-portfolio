import { AboutSection } from "@/components/portfolio/about-section"
import { CertificatesSection } from "@/components/portfolio/certificates-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { Separator } from "@/components/ui/separator"
import {
  aboutContent,
  certificates,
  certificatesIntro,
  contactContent,
  footerNote,
  heroContent,
  navigationItems,
  projects,
  projectsIntro,
  skillGroups,
  skillsIntro,
  socialLinks,
} from "@/lib/portfolio-content"

export default function Page() {
  return (
    <main id="top" className="relative isolate min-h-svh overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.06),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 dark:opacity-15"
      />

      <SiteHeader
        name={heroContent.title}
        email={heroContent.email}
        navigationItems={navigationItems}
      />

      <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
        <HeroSection content={heroContent} />
        <Separator className="bg-border/70" />
        <AboutSection content={aboutContent} />
        <Separator className="bg-border/70" />
        <ProjectsSection
          eyebrow={projectsIntro.eyebrow}
          title={projectsIntro.title}
          description={projectsIntro.description}
          projects={projects}
        />
        <Separator className="bg-border/70" />
        <SkillsSection
          eyebrow={skillsIntro.eyebrow}
          title={skillsIntro.title}
          description={skillsIntro.description}
          groups={skillGroups}
        />
        {/* <Separator className="bg-border/70" />
        <CertificatesSection
          eyebrow={certificatesIntro.eyebrow}
          title={certificatesIntro.title}
          description={certificatesIntro.description}
          certificates={certificates}
        /> */}
        <Separator className="bg-border/70" />
        <ContactSection
          content={contactContent}
          socialLinks={socialLinks}
          footerNote={footerNote}
        />
      </div>
    </main>
  )
}
