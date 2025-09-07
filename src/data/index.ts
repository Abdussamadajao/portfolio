import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGitlab,
} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";

import type { IProject, IService, ISkill } from "../types";
import { projectImages } from "../assets/projectImages";

export const services: IService[] = [
  {
    title: "React",
    about:
      "Proficient in building dynamic, responsive user interfaces using React. Experienced with hooks, context API, and state management.",
    Icon: SiReact,
  },
  {
    title: "Tailwind",
    about:
      "Skilled at rapidly prototyping and styling components using Tailwind CSS, creating clean and maintainable designs.",
    Icon: SiTailwindcss,
  },
  {
    title: "TypeScript",
    about:
      "Adept at utilizing TypeScript to enhance code quality and maintainability. Skilled in advanced type definitions, interfaces, and error prevention.",
    Icon: SiTypescript,
  },
  {
    title: "NextJS",
    about:
      "Well-versed in crafting optimized React applications with Next.js. Capable of implementing server-side rendering, static generation, and efficient routing strategies.",
    Icon: SiNextdotjs,
  },
  {
    title: "JavaScript",
    about:
      "Highly competent in core JavaScript and modern ECMAScript standards. Experienced in asynchronous programming, functional paradigms, and browser APIs.",
    Icon: SiJavascript,
  },
  {
    title: "React Native",
    about:
      "Experienced in building cross-platform mobile applications using React Native. Skilled in mobile UI/UX design, navigation, and native module integration.",
    Icon: SiReact,
  },
];

export const languages: ISkill[] = [
  {
    name: "JavaScript",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "NextJs",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "React Native",
    level: "90",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "VSCode",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "GitHub",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "GitLab",
    level: "90",
    Icon: SiGitlab,
  },
  {
    name: "Vercel",
    level: "100",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "North Care",
    description:
      "North is a web and mobile platform (Android) application that allows users to access medical care from the comfort of their home or any other location.",
    image_path: projectImages["North Care"],
    deployed_url: "https://usenorth.care",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "redux", "firebase", "react"],
  },
  {
    id: 2,
    name: "PneumaPage",
    description:
      "Pneumapage is a web application that allows users to search for healthcare providers in different fields and locations.",
    image_path: projectImages["PneumaPage"],
    deployed_url: "https://pneumapage.com/",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "styled-components", "antd", "redux", "firebase"],
  },
  {
    id: 3,
    name: "PneumaCare",
    description:
      "Pneuma care is crafted compelling telemedicine landing page, merging design & functionality for seamless user engagement",
    image_path: projectImages["PneumaCare"],
    deployed_url: "https://www.pneuma.care/",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "styled-components", "antd"],
  },
  {
    id: 4,
    name: "SnapBazaar",
    description:
      "SnapBazaar is a modern e-commerce platform that provides a seamless online shopping experience with advanced features like real-time cart management, multiple payment options including Stripe integration, express delivery options, and comprehensive order tracking. Built with cutting-edge React technologies, Prisma ORM for database management, and modern UI components.",
    image_path: projectImages["Snap-bazaar"], // You'd need to add this
    deployed_url: "https://snap-bazaar.vercel.app", // Based on the meta tags
    category: ["react", "typescript", "tailwind", "vite", "prisma"],
    github_url: "https://github.com/Abdussamadajao/snap-bazaar", // Add your GitHub URL
    key_techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Prisma",
      "Stripe",
      "Better Auth",
      "Zustand",
      "React Query",
    ],
  },
  {
    id: 5,
    name: "Glade Clone",
    description: "Glade is a landing page clone of a fintech company.",
    image_path: projectImages["Glade Clone"],
    deployed_url: "https://glade-clone-1n0gzjmzv-abdus-samad.vercel.app",
    category: ["html & css"],
    github_url: "https://github.com/Abdussamadajao/glade-website-clone",
    key_techs: ["HTML & CSS", "JavaScript"],
  },
  {
    id: 6,
    name: "Go Delivery",
    description:
      "Go delivery allows users to send and receive packages swiftly with GO, delivered safely in just 20 minutes, no matter the size—from documents to furniture and appliances.",
    image_path: projectImages["Go Delivery"],
    deployed_url: "https://delivery.gocaby.com/",
    category: ["nextJs", "typescript", "tailwind"],
    github_url: "",
    key_techs: ["TypeScript", "Tailwind", "Next.js"],
  },
];
