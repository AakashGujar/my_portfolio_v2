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
    "I'm currently working as a freelance engineer while actively seeking new opportunities. My current focus is on expanding my knowledge in Web3.",
  avatarUrl: "/meXD.jpg",
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
    DevOps: ["AWS", "Docker", "CI/CD"],
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
      title: "Freelance Engineer",
      logoUrl: "/Caits.png",
      start: "May 2023",
      end: "October 2024",
      description:
        "Built UI/UX designs, including wireframes, prototypes, and API integrations. Enhanced server performance and streamlined data systems for improved efficiency.",
    },
    {
      company: "Devtown",
      badges: [],
      href: "#",
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
      degree: "Bachelor of Engineering",
      field: "Information Technology",
      logoUrl: "/ucoe.png",
      start: "2020",
      end: "2023",
      desc: "Obtained CPGA 9.13",
    },
    {
      school: "Bhausaheb Vartak Polytechnic College, Vasai",
      href: "https://ibo.org",
      degree: "Diploma",
      field: "Computer Engineering",
      logoUrl: "/bvp.png",
      start: "2017",
      end: "2020",
      desc: "Obtained Percentage 89.90%",
    },
  ],
  projects: [
    {
      title: "terminate-d-chat",
      href: "https://trmnt-d-cht.vercel.app",
      dates: null,
      active: true,
      description:
        "A real-time chat server where users can send anonymous messages, and each room has a timer that auto-destructs after a set time.",
      technologies: [
        "Next.js",
        "JavaScript",
        "Socket.io",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trmnt-d-cht.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/AakashGujar/chatapp",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/trmnt-d-cht.png",
      video:
        "",
    },
    {
      title: "Web 3.0 Wallet",
      href: "https://orion-wallet.netlify.app/",
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
          href: "https://orion-wallet.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/AakashGujar/web3wallet",
          icon: <Icons.github className="size-3" />,
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
        {
          type: "Code",
          href: "https://github.com/AakashGujar/zipp2",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/zipp2.png",
      video: "",
    },
  ],
  contributions: [
    {
      title: "Sanity",
      description:
        "Contributed to the Sanity, a go-to open-source tool for managing esports platforms.",
      technologies: [
        { name: "NextJS", color: "#383c3d" },
        { name: "TypeScript", color: "#1e7dbc" },
        { name: "MongoDb", color: "#57AA51" },
        { name: "Node.js", color: "#339933" },
      ],
      tags: ["#UI", "#refactor", "#revamp"], // Dynamic tags
      href: "https://github.com/dinxsh/sanity/pull/230",
    },
  ],
  testimonials: [
    {
      name: "George Fernandes",
      designation: "Administrator",
      company: "Exports hvac",
      testimonial:
        "Aakash delivered an exceptional prototype with remarkable attention to detail. Working with him was a pleasure due to his quick responsiveness and politeness. Highly recommended.",
      image: "/john-doe.jpg",
      platform: "LinkedIn", // New platform field
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
  publications: [
    {
      title: "Web-3 Music Player on Blockchain",
      dates: "April 2023",
      description:
        "A web3-based music platform that utilizes NFTs to empower artists, shedding light on the future of the music industry.",
      publication: "IEEE",
      link: "https://www.researchgate.net/publication/370178652_Web-3_Music_Player_on_Blockchain",
    },
  ],
} as const;
