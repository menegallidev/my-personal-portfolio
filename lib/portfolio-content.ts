import type { LucideIcon } from "lucide-react"
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react"

export type NavigationItem = {
  href: string
  label: string
}

export type DetailItem = {
  description: string
  label: string
}

export type HeroContent = {
  description: string
  email: string
  eyebrow: string
  imageAlt: string
  imageSrc: string
  imageNotes: DetailItem[]
  secondaryDescription: string
  title: string
}

export type AboutHighlight = {
  description: string
  title: string
}

export type AboutContent = {
  description: string
  eyebrow: string
  highlights: AboutHighlight[]
  paragraphs: string[]
  title: string
}

export type PortfolioLink = {
  external?: boolean
  href: string
  label: string
  variant?: "default" | "ghost" | "link" | "outline" | "secondary"
}

export type Project = {
  description: string
  featured?: boolean
  imageAlt: string
  imageSrc: string
  links?: PortfolioLink[]
  tech?: string[]
  title: string
}

export type SkillGroup = {
  description: string
  skills: string[]
  title: string
}

export type Certificate = {
  credential: string
  href?: string
  issuer: string
  summary: string
  title: string
  year: string
}

export type SocialLink = {
  href: string
  icon: LucideIcon
  label: string
  value: string
}

export type ContactContent = {
  description: string
  email: string
  eyebrow: string
  notes: DetailItem[]
  title: string
}

export const navigationItems: NavigationItem[] = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#certificates", label: "Certificados" },
  { href: "#contact", label: "Contato" },
]

export const heroContent: HeroContent = {
  eyebrow: "Meu Portfólio",
  title: "Rafael Menegalli",
  description:
    "Sou desenvolvedor full stack e transformo ideias em sistemas web modernos, funcionais e bem estruturados. Tenho experiência com JavaScript, TypeScript, React, Next.js, Node.js e PostgreSQL.",
  secondaryDescription:
    "Além da programação, a música também faz parte de quem eu sou. Toco violão, piano e canto, o que reforça minha criatividade, sensibilidade e atenção aos detalhes em tudo que construo.",
  email: "rafaelmenegalli@gmail.com",
  imageSrc: "/me.jpeg",
  imageAlt: "Foto de Rafael Menegalli",
  imageNotes: [
    {
      label: "Desenvolvedor Full Stack",
      description:
        "Crio interfaces modernas, sistemas completos e soluções web com foco em performance, organização e experiência do usuário.",
    },
    {
      label: "Tecnologia e Criatividade",
      description:
        "Uno lógica, design e sensibilidade criativa para desenvolver projetos que sejam bonitos, funcionais e memoráveis.",
    },
  ],
}

export const aboutContent: AboutContent = {
  eyebrow: "Sobre",
  title: "Criando soluções web personalizadas com visão técnica, estratégia e proximidade com o cliente.",
  description:
    "Sou desenvolvedor full stack e atualmente atuo como freelancer, criando sistemas e sites sob medida para empresas que buscam soluções mais alinhadas à sua realidade. Minha experiência em software house contribuiu para desenvolver uma visão sólida sobre tecnologia, negócios e construção de produtos digitais.",
  paragraphs: [
    "Minha principal especialidade é desenvolver sistemas administrativos personalizados, pensados para atender com precisão as necessidades de cada empresa. Mais do que apenas programar, busco compreender o contexto, os processos e os desafios do cliente para entregar uma solução que realmente gere valor no dia a dia.",
    "Acredito que um bom projeto nasce da combinação entre domínio técnico, comunicação clara e evolução constante. Sou muito comunicativo, valorizo o relacionamento com o cliente e estou sempre estudando, acompanhando novas tecnologias e aprimorando minhas habilidades para entregar trabalhos cada vez mais completos.",
  ],
  highlights: [
    {
      title: "Entendimento do cliente",
      description:
        "Valorizo a comunicação e o alinhamento em cada etapa para transformar necessidades reais em soluções bem construídas.",
    },
    {
      title: "Desenvolvimento sob medida",
      description:
        "Cada projeto é pensado de forma personalizada, com foco no que a empresa realmente precisa para funcionar melhor.",
    },
    {
      title: "Evolução constante",
      description:
        "Estou sempre estudando, acompanhando o mercado e me atualizando para aplicar as melhores tecnologias em cada projeto.",
    },
  ],
}

export const projectsIntro = {
  eyebrow: "Projetos",
  title: "Projetos selecionados que demonstram minha experiência e estilo de desenvolvimento.",
  description:
    "Nesta seção, apresento alguns trabalhos que refletem minha atuação como desenvolvedor full stack, criando soluções web modernas, funcionais e sob medida.",
}

export const projects: Project[] = [
  {
    title: "Placeholder Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.",
    imageSrc: "/placeholders/project-editorial.svg",
    imageAlt: "Editorial style placeholder project cover",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "Live Preview",
        href: "https://example.com",
        external: true,
      },
      {
        label: "Repository",
        href: "https://github.com/example/project-one",
        external: true,
        variant: "outline",
      },
    ],
  },
  {
    title: "Placeholder Project Two",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.",
    imageSrc: "/placeholders/project-frame.svg",
    imageAlt: "Framed placeholder project cover",
    tech: ["React", "Vite", "CSS"],
    links: [
      {
        label: "Case Study",
        href: "https://example.com",
        external: true,
        variant: "outline",
      },
    ],
  },
  {
    title: "Placeholder Project Three",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in.",
    imageSrc: "/placeholders/project-grid.svg",
    imageAlt: "Grid placeholder project cover",
    tech: ["Node.js", "Express", "UI"],
    links: [
      {
        label: "Preview",
        href: "https://example.com",
        external: true,
      },
      {
        label: "Source",
        href: "https://github.com/example/project-three",
        external: true,
        variant: "ghost",
      },
    ],
  },
]

export const skillsIntro = {
  eyebrow: "Skills",
  title: "Tecnologias e habilidades que utilizo para criar soluções completas.",
  description:
    "Reuni aqui as principais tecnologias com as quais trabalho, além de habilidades que fazem parte da minha forma de desenvolver: comunicação, visão de negócio, organização e foco em entregar soluções bem construídas.",
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Desenvolvo interfaces modernas, responsivas e bem estruturadas, com foco em usabilidade, performance e experiência do usuário.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Shadcn/ui",
      "RSuite",
      "UI/UX",
      "Responsividade",
    ],
  },
  {
    title: "Backend & Infraestrutura",
    description:
      "Construo aplicações completas no backend com autenticação, regras de negócio, integrações e organização de ambientes para desenvolvimento, homologação e produção.",
    skills: [
      "Node.js",
      "APIs REST",
      "JWT",
      "Integrações com APIs externas",
      "PostgreSQL",
      "Prisma",
      "Python",
      "PHP",
      "Docker",
      "Vercel",
      "Neon",
      "Git",
      "GitHub",
      "Ambientes de Produção e Homologação",
    ],
  },
  {
    title: "Produto & Colaboração",
    description:
      "Além da parte técnica, valorizo comunicação, organização e entendimento de negócio para criar soluções bem planejadas, funcionais e alinhadas à necessidade de cada cliente.",
    skills: [
      "Comunicação",
      "Organização",
      "IA",
      "SEO",
      "Performance",
      "Código limpo",
      "Arquitetura de software",
      "WordPress",
      "Inglês intermediário",
    ],
  },
]

export const certificatesIntro = {
  eyebrow: "Certificates",
  title: "Placeholder credentials in a simple structure that scales cleanly.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
}

export const certificates: Certificate[] = [
  {
    title: "Certificate Placeholder One",
    issuer: "Placeholder Academy",
    year: "2026",
    credential: "Credential ID 0001",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
    href: "https://example.com",
  },
  {
    title: "Certificate Placeholder Two",
    issuer: "Placeholder Institute",
    year: "2025",
    credential: "Credential ID 0002",
    summary:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.",
    href: "https://example.com",
  },
  {
    title: "Certificate Placeholder Three",
    issuer: "Placeholder School",
    year: "2024",
    credential: "Credential ID 0003",
    summary:
      "Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.",
    href: "https://example.com",
  },
]

export const contactContent: ContactContent = {
  eyebrow: "Contato",
  title: "Vamos conversar sobre o seu projeto?",
  description:
    "Se você está procurando alguém para desenvolver um site, sistema web ou uma solução personalizada para o seu negócio, entre em contato comigo. Será um prazer entender sua necessidade e transformar sua ideia em algo real.",
  email: "rafaelmenegalli@gmail.com",
  notes: [
    {
      label: "Resposta",
      description:
        "Procuro responder o mais rápido possível para entender seu projeto, alinhar os objetivos e encontrar a melhor solução.",
    },
    {
      label: "Disponibilidade",
      description:
        "Atuo como desenvolvedor freelancer e estou disponível para novos projetos, melhorias em sistemas existentes e criação de soluções sob medida.",
    },
  ],
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    value: "",
    href: "https://www.instagram.com/_raffort/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    value: "",
    href: "https://www.facebook.com/rafael.menegalli",
    icon: Facebook,
  },
  {
    label: "WhatsApp",
    value: "+55 19 99628-2121",
    href: "https://wa.me/5519996282121",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/rafael-menegalli-970a23248/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "",
    href: "https://github.com/menegallidev",
    icon: Github,
  },
  {
    label: "Email",
    value: "rafaelmenegalli@gmail.com",
    href: "mailto:rafaelmenegalli@gmail.com",
    icon: Mail,
  },
]

export const footerNote =
  "Desenvolvido por Rafael Menegalli com foco em qualidade, performance e boas experiências digitais.";
