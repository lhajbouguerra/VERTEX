// lib/db.tsx
import bgImage from "@/public/image.png";
import {
  SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss,
  SiPython, SiMysql, SiHtml5, SiCss3, SiJavascript,
  SiFastapi, SiFlask, SiGoogle, SiOpenai, SiNvidia,
  SiSqlite
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { Service, Portfolio, SearchData } from "./types";

// Search data
export const searchdata: SearchData[] = [
  { title: "Project One", url: "/projects/one" },
  { title: "Project Two", url: "/projects/two" },
  { title: "AI Assistant", url: "/projects/ai-assistant" },
  { title: "Dashboard Analytics", url: "/projects/analytics" },
];

// Services
export const services: Service[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    desc: "Deliver end-to-end web applications using React, Next.js, and Node.js that are fast, scalable, and maintainable, tailored to your business needs.",
  },
  {
    id: 2,
    title: "AI Integration & Automation",
    desc: "Seamlessly integrate advanced AI technologies like OpenAI, Google AI, and NVIDIA APIs to add intelligent automation and smart features to your apps.",
  },
  {
    id: 3,
    title: "Performance Optimization & SEO",
    desc: "Enhance your website’s speed and search rankings through efficient coding, smart caching, image optimization, and SEO best practices for superior user experience.",
  },
  {
    id: 4,
    title: "API Development & Integration",
    desc: "Develop secure, scalable REST APIs with FastAPI, Flask, or Node.js and effortlessly integrate third-party services to extend your app’s capabilities.",
  },
  {
    id: 5,
    title: "Chatbots & Upload Interfaces",
    desc: "Design interactive chatbots featuring image and file uploads, modals, real-time feedback, undo/redo functionality, and immersive full-screen previews.",
  },
  {
    id: 6,
    title: "SQL Database Solutions",
    desc: "Craft and optimize relational databases using MySQL and SQLite, ensuring secure, reliable, and efficient data management for your applications.",
  },
  {
    id: 7,
    title: "Custom Web App Features",
    desc: "Develop tailored features like user authentication, dashboards, payment gateways, and real-time notifications to fit your unique business needs.",
  },  
];


// Portfolio
export const portfolio: Portfolio[] = [
  { title: "Creafom Studio", date: "2024", img: bgImage, category: "app" },
  { title: "Blogify Platform", date: "2024", img: bgImage, category: "app" },
  { title: "Artisan Crafts", date: "2024", img: bgImage, category: "app" },
  { title: "NextGen App", date: "2024", img: bgImage, category: "app" },
];

