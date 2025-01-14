import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aakash Gujar",
  initials: "AG",
  url: "https://example.com",
  location: "Mumbai, In",
  locationLink: "https://www.google.com/maps/place/india",
  description: "",
  summary:
    "I aim to create websites that make a positive impact on people's lives, staying updated with the changing tech landscape, and constantly learning how to build scalable and efficient websites",
  avatarUrl: "/me.png",
  skills: {
    frontend: [
      "NextJS",
      "ReactJS",
      "TypeScript",
      "JavaScript",
      "Redux",
      "TailwindCSS",
      "HTML5",
      "CSS3",
    ],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: ["Git", "GitHub", "Jest", "Postman", "Figma", "RESTful APIs"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aakashgujar2001@gmail.com",
    tel: "(+91)9588665152",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AakashGujar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aakashgujar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imaakashgujar",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aakashgujar2001@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "CAITS",
      badges: [],
      href: "#",
      location: "Mumbai, IN",
      title: "Freelance Web Developer",
      logoUrl: "/Caits.png",
      start: "May 2023",
      end: "October 2024",
      description:
        "Built UI/UX designs, including wireframes, prototypes, and API integrations. Enhanced server performance and streamlined data systems for improved efficiency.",
    },
    {
      company: "Devtown",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/devtown.jpg",
      start: "June 2022",
      end: "October 2022",
      description:
        "Engineered a secure authentication module, improving system security. Revamped UI/UX design, enhancing user satisfaction.",
    },
    {
      company: "L&T",
      href: "#",
      badges: [],
      location: "Mumbai, IN",
      title: "Student Intern",
      logoUrl: "/L&T.png",
      start: "May 2019",
      end: "June 2019",
      description:
        "Designed and developed authentication forms in VB.NET to improve login efficiency. Engineered a user-friendly login system to enhance student access management.",
    },
  ],
  education: [
    {
      school: "Universal College of Engineering, Kaman",
      href: "https://universalcollegeofengineering.edu.in/",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "/ucoe.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Bhausaheb Vartak Polytechnic College, Vasai",
      href: "https://ibo.org",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/bvp.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Disposable Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Web 3.0 Wallet",
      href: "https://www.google.com",
      dates: null,
      active: false,
      description:
        "Developed a Web3 wallet supporting Solana and Ethereum with HD Wallet functionality.",
      technologies: [
        "ReactJS",
        "Vite",
        "TailwindCSS",
        "@solana/web3.js",
        "ethers.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.google.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/orion.png",
      video: null,
    },
    {
      title: "zipp2",
      href: "https://zipp2.vercel.app/",
      dates: "",
      active: true,
      description:
        "Allows users to shorten long URLs, track usage analytics, and manage their links effectively.",
      technologies: [
        "React.js",
        "Vite",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "NeonDB",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "NodeJS",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://zipp2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/zipp2.png",
      video: "",
    },
  ],
  testimonials: [
    {
      text: "Aakash is an exceptional developer with a keen eye for detail. His work on our project was outstanding.",
      name: "John Doe",
      position: "CTO, Tech Corp",
      avatar: "/john-doe-avatar.png",
    },
    {
      text: "Working with Aakash was a pleasure. He consistently delivered high-quality code and innovative solutions.",
      name: "Jane Smith",
      position: "Lead Developer, Innovate Inc",
      avatar: "/jane-smith-avatar.png",
    },
  ],
  openSourceContributions: [
    {
      project: "React",
      description:
        "Implemented a new feature for handling async rendering in React components.",
      link: "https://github.com/facebook/react/pull/1234",
    },
    {
      project: "Next.js",
      description: "Fixed a bug in the routing system for dynamic routes.",
      link: "https://github.com/vercel/next.js/pull/5678",
    },
  ],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
