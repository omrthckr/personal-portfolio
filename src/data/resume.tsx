import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ömer Taha Çakır",
  initials: "ÖTÇ",
  url: "https://personal-portfolio.vercel.app",
  location: "France (Geneva Border)",
  locationLink: "https://www.google.com/maps/search/Saint-Genis-Pouilly,+France",
  description: "Computer Engineer | Backend Systems, Data Pipelines & Automation",
  summary:
    "I am a Computer Engineer focused on backend systems, data pipelines, and automation. I enjoy building practical software that connects data, APIs, infrastructure, and real-world problems. My technical background includes Python, SQL, PostgreSQL, Docker, Linux, Git, and software development across data processing, computer vision, and relational database systems.",
  avatarUrl: "",
  skills: [
    { name: "Python", icon: null },
    { name: "C", icon: null },
    { name: "Java", icon: null },
    { name: "Bash", icon: null },
    { name: "SQL", icon: null },
    { name: "PostgreSQL", icon: null },
    { name: "Docker", icon: null },
    { name: "Linux", icon: null },
    { name: "Git", icon: null },
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
  ],
  contact: {
    email: "taha.cakir.omer@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/omrthckr",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:taha.cakir.omer@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Ticimax Information Technologies",
      href: "https://www.ticimax.com/",
      badges: [],
      location: "Turkey",
      title: "IT Intern",
      logoUrl: "",
      start: "June 2024",
      end: "July 2024",
      description:
        "Worked with Docker-based development environments, Git and GitLab CI/CD processes, repository configuration, and technical system support within an IT environment.",
    },
  ],
  education: [
    {
      school: "Ege University",
      href: "https://ege.edu.tr/",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "",
      start: "2021",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "LSTM Rainfall Forecasting",
      href: "",
      dates: "2025 - 2026",
      active: true,
      description:
        "Developed a multivariate deep learning forecasting pipeline using ERA5 climate reanalysis data to investigate rainfall prediction with LSTM-based models.",
      technologies: [
        "Python",
        "LSTM",
        "Deep Learning",
        "ERA5",
        "Data Processing",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TEKNOFEST Air Defense & Target Tracking System",
      href: "",
      dates: "University Project",
      active: true,
      description:
        "Worked as part of Team ASPAN on a real-time computer vision system using YOLO inference, OpenCV, serial telemetry, and an Arduino-controlled Pan-Tilt mechanism for target tracking.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLO",
        "Computer Vision",
        "Arduino",
        "Serial Communication",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Image Captioning",
      href: "",
      dates: "University Project",
      active: true,
      description:
        "Developed an image captioning project using deep learning techniques to generate natural-language descriptions from images.",
      technologies: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "NLP",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Relational Database Architecture",
      href: "",
      dates: "University Project",
      active: true,
      description:
        "Designed a relational database architecture for port and airport logistics, including data modeling, relationships, and SQL queries for operational data management.",
      technologies: [
        "SQL",
        "PostgreSQL",
        "Relational Database Design",
        "Data Modeling",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;