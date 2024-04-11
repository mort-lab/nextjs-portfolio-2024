import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import appleLandingImg from "@/public/applelanding.png";
import metaversusImg from "@/public/metaversus.png";
import eventlyImg from "@/public/evently.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Java Programming - OCP Certification",
    location: "Donostia, Spain - UCAM Murcia",
    description:
      "OOP, Interfaces, MVC Architecture, Lambda, Maven, APIs, JUnit testing, Preparation for Oracle Certified Programmer SE 11 Certification.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Higher Degree in Web Application Development",
    location: "Donostia, Spain - AEG Berrikuntza Eskola",
    description:
      "Java programming, databases, computer systems, client and server-side web development...",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Wordpress Fullstack Developer",
    location: "Donostia, Spain - IDIY Technologies",
    description:
      "Began as a Maintenance Technician for iOS devices but transitioned to full stack development with WordPress, leading a key project for inventory digitalization and web development focused on Apple products..",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Customer Support Specialist",
    location: "Donostia, Spain - Versia/Justizia.eus",
    description:
      "Provided comprehensive technical support to justice professionals in the Basque Country, efficiently managing incidents through justizia.eus and its incident management system. Worked closely in a team of 5, focusing on efficiency and quick problem resolution to ensure the platform's operability.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Apple Maintenance Technician (Internship)",
    location: "Donostia, Spain - Sicos Lab Apple",
    description:
      "Developed specialized skills in repairing iPhones and AirPods, enhancing my technical competency. Internship as a Technician, specializing in repairs but also performing customer service duties.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Intermediate Degree in Microcomputer Systems and Networks",
    location: "Donostia, Spain - Cebanc CDEA",
    description:
      "Developed specialized skills in repairing iPhones and AirPods, enhancing my technical competency. Internship as a Technician, specializing in repairs but also performing customer service duties.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Evently - Meeting Platform",
    description:
      "Build an event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments.",
    tags: ["NextJS 14", "MongoDB", "Shadcn", "Uploadthing", "Clerk", "Stripe"],
    imageUrl: eventlyImg,
    liveUrl: "https://martindev-evently.vercel.app/",
  },
  {
    title: "IPhone 15 - Landing Page",
    description:
      "Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.",
    tags: ["React", "GSAP", "Vite", "Tailwind", "ThreeJS"],
    imageUrl: appleLandingImg,
    liveUrl: "https://martindev-apple-landing.vercel.app/",
  },
  {
    title: "Metaversus - Landing Page",
    description:
      "Transform a Figma design into a fully functioning website using Next13, Framer Motion, and Tailwind CSS.",
    tags: ["React", "Next.js 13", "Figma", "Tailwind", "Framer Motion"],
    imageUrl: metaversusImg,
    liveUrl: "https://martindev-metaversus.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Liquid",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Figma",
  "Framer Motion",
] as const;
