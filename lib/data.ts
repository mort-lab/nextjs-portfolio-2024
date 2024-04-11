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
    title: "IT Service",
    location: "Donostia, Spain",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Apple Sicos Lab Internship",
    location: "Donostia, Spain",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Wordpress Developer",
    location: "Donostia, Spain",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
