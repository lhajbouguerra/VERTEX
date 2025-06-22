"use client";

import {
  useInView,
  motion,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import bgImage from "@/public/image.png";
import av from "@/public/av.jpg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Plus, X } from "lucide-react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFastapi,
  SiFlask,
  SiGoogle,
  SiOpenai,
  SiNvidia,
  SiSqlite,
  SiSqlalchemy,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { Service } from "@/lib/types";
import { services, portfolio } from "@/lib/db";

export default function Section2() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px", once: true });
  const controls = useAnimation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <div className="translate-y-[-50px] sm:translate-y-[-0px]">
      {/* STORY SECTION */}
      <section className="text-white py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FF4500]/20 filter blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              ABOUT
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 uppercase">
            my story
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-12">
            <motion.div className="h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <Image
                src={av}
                alt="Story Image"
                width={3840}
                height={2160}
                className="h-full w-full object-cover rounded-xl"
                priority
              />
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                I’m a self-taught full-stack web developer with 6+ years of
                experience. I build fast, responsive, and smart web apps using
                tools like Next.js, React, Node.js, Python, and AI APIs. Whether
                it’s a landing page, a full SaaS, or AI integration — I turn
                ideas into real products, fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="text-white  px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FF4500]/20 filter blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              WORK
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 uppercase">
            featured projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={bgImage}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-400 uppercase text-sm">
                      {project.category}
                    </p>
                  </div>
                  <div className="btn text-white font-bold text-sm  px-5 py-1  rounded-full border-2 border-[#1a1a1a]">
                    <span>
                      <div className="text">
                        <span>{project.date}</span>
                      </div>
                      <div className="clone">
                        <span>{project.date}</span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="text-white py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FF4500]/20 filter blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              SERVICES
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            HOW I CAN HELP?
          </h2>
          <AnimatePresence>
            {selectedService && (
              <motion.div
                onClick={() => setSelectedService(null)}
                className=" inset-0  bg-opacity-70 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0F0F0F] text-white rounded-2xl sm:rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row max-w-[95%] sm:max-w-3xl lg:max-w-6xl w-full mx-auto relative shadow-xl   "
                >
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                  >
                    <X size={24} />
                  </button>

                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {selectedService.title}
                    </h2>
                    <div className="h-px bg-gray-700 my-2" />
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {selectedService.desc}
                    </p>

                    <div className="mt-6">
                      <h4 className="font-bold text-base sm:text-lg mb-4">
                        KEY FEATURES
                      </h4>
                      <ul className="text-gray-400 space-y-2 text-xs sm:text-sm">
                        <li>Custom UI/UX tailored to your needs</li>
                        <li>Seamless navigation and flow</li>
                        <li>Scalable and maintainable design system</li>
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <button className="bg-white text-black font-semibold px-4 sm:px-6 py-2 rounded-full hover:opacity-90 transition text-sm sm:text-base">
                        GET STARTED
                      </button>
                      <button className="border border-white text-white font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base">
                        CONTACT ME
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mt-6 lg:mt-0 lg:ml-12 flex-shrink-0 w-full max-w-[300px] sm:max-w-[400px] md:max-w-md mx-auto">
                    <div className="rounded-xl overflow-hidden w-full aspect-[4/3]">
                      <Image
                        src={bgImage}
                        alt="Service image"
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {!selectedService && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
              {services.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300 group"
                >
                  <button
                    onClick={() => setSelectedService(item)}
                    className="cursor-pointer group absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition duration-300"
                    aria-label="Expand expertise"
                  >
                    <Plus className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">
                    ({item.id})
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold mb-2  transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1   transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          )}
          {!selectedService && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-6">
              {services.slice(3, 5).map((item) => (
                <div
                  key={item.id}
                  className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300 group"
                >
                  <button
                    onClick={() => setSelectedService(item)}
                    className="cursor-pointer group absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition duration-300"
                    aria-label="Expand expertise"
                  >
                    <Plus className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">
                    ({item.id})
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold mb-2  transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1   transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          )}
          {!selectedService && (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
              {services.slice(4).map((item) => (
                <div
                  key={item.id}
                  className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300 group"
                >
                  <button
                    onClick={() => setSelectedService(item)}
                    className="cursor-pointer group absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition duration-300"
                    aria-label="Expand expertise"
                  >
                    <Plus className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">
                    ({item.id})
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold mb-2  transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1   transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* EXPERIENCE SECTION */}
      <section className="text-white px-4 sm:px-6 md:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-[#FF4500]/20 filter blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              EXPERIENCE
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-80 sm:gap-6 md:gap-6 gap-6">
            {/* Sticky Title */}
            <div className="lg:col-span-1">
              <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sticky top-24 whitespace-nowrap">
                Select Clients
              </h3>
            </div>

            {/* Clients Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {[
                { icon: "", url: "/qu2data.png" },
                { icon: "", url: "/qu2data.png" },
                { icon: "", url: "/qu2data.png" },
              ].map((item, idx) => (
                <Link href="/" key={idx}>
                  <div className="aspect-square bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] rounded-xl flex items-center justify-center transition duration-300">
                    <Image alt="" src={item.url} height={150} width={150} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              SKILLS
            </h2>
            <div className="flex-1  bg-white/20 ml-6 h-[1.5px]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-80 sm:gap-6 md:gap-6 gap-6">
            {/* Left Title */}
            <div className="g:col-span-1">
              <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sticky top-15 whitespace-nowrap">
                TECH STACK
              </h3>
            </div>

            <div className="lg:col-span-2 lg:grid-cols-2 grid grid-cols-2 gap-6  ">
              {[
                {
                  name: "NODE JS",
                  smalldisc: "Best for backend performance",
                  icon: <SiNodedotjs size={20} />,
                },
                {
                  name: "NEXT JS",
                  smalldisc: "Best for SEO & SSR apps",
                  icon: <SiNextdotjs size={20} />,
                },
                {
                  name: "REACT JS",
                  smalldisc: "Best for interactive UIs",
                  icon: <SiReact size={20} />,
                },
                {
                  name: "JS",
                  smalldisc: "Web’s core language",
                  icon: <SiJavascript size={20} />,
                },
                {
                  name: "HTML",
                  smalldisc: "Foundation of the web",
                  icon: <SiHtml5 size={20} />,
                },
                {
                  name: "CSS",
                  smalldisc: "Web styling language",
                  icon: <SiCss3 size={20} />,
                },
                {
                  name: "TAILWIND CSS",
                  smalldisc: "Utility-first CSS framework",
                  icon: <SiTailwindcss size={20} />,
                },
                {
                  name: "PYTHON & AI",
                  smalldisc: "Best for ML & scripting",
                  icon: <SiPython size={20} />,
                },
                {
                  name: "AI INTEGRATION",
                  smalldisc: "Google, OpenAI, NVIDIA APIs",
                  icon: (
                    <>
                      <SiGoogle size={20} />
                      <SiOpenai size={20} />
                      <SiNvidia size={20} />
                      <MdApi size={20} />
                    </>
                  ),
                }, // fallback to Python icon
                {
                  name: "SQL",
                  smalldisc: "Relational DBs: MySQL, SQLite",
                  icon: (
                    <>
                      <SiSqlite size={20} />
                      <SiMysql size={20} />
                    </>
                  ),
                },
                {
                  name: "FASTAPI",
                  smalldisc: "Fast Python API framework",
                  icon: <SiFastapi size={20} />,
                },
                {
                  name: "FLASK",
                  smalldisc: "Lightweight Python web app",
                  icon: <SiFlask size={20} />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300"
                >
                  <button
                    className="cursor-pointer group absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition duration-300"
                    aria-label="Expand expertise"
                  >
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <Link
                    href="/"
                    className=" sm:text-sm text-gray-500 mb-2 flex gap-2"
                  >
                    {item.icon}
                  </Link>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.smalldisc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              EDUCATION
            </h2>
            <div className="flex-1  bg-white/20 ml-6 h-[1.5px]" />
          </div>
          {/* Left Title */}
          <div className="pb-10">
            <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sticky top-15 whitespace-nowrap">
              EDUCATION PATH
            </h3>
          </div>

          {/* Education Card */}
          <div className="bg-gradient-to-br from-[#0f0f0f]/70 to-[#1a1a1a]/50 border border-[#2a2a2a] rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Self-Taught Developer
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-0 font-mono">
                2020 – Present
              </p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed ">
              I have developed real-world web and AI applications from scratch,
              focusing on modern technologies like{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Node.js</span>, and{" "}
              <span className="text-white font-semibold">Python</span>. This
              hands-on experience includes building full-stack projects,
              integrating AI APIs, and solving practical challenges
              independently with a growth mindset.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="translate-y-[30px] md:pb-24 px-4 sm:px-6 md:px-8 text-gray-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="">
            <div className="flex items-center gap-4 mb-4 ">
              <div className="w-3 h-3 bg-[#FF4500] rounded-full" />
              <h2 className="text-base sm:text-lg font-semibold text-white tracking-wider uppercase">
                Contact
              </h2>
              <div className="flex-1 h-px bg-white/20 ml-6" />
            </div>
          </div>

          {/* Arrows top/bottom decoration */}
          <div className="flex justify-between  md:mt-10 px-4 sm:px-10 md:px-20 text-white/40">
            <p className="rotate-[225deg]">
              <ChevronRight size={24} />
            </p>
            <p className="rotate-[315deg]">
              <ChevronRight size={24} />
            </p>
          </div>
          {/* Main Headline */}
          <div className="text-center font-extrabold text-white uppercase leading-none instrument-sans roboto-mono inter-tight space-y-[-5px]  ">
            <h1 className="font-bold text-5xl sm:text-[72px] md:text-[96px] lg:text-[100px] xl:text-[120px] tracking-tight ">
              Have a Cool
            </h1>
            <h1 className="font-bold text-5xl sm:text-[72px] md:text-[96px] lg:text-[100px] xl:text-[120px] tracking-tight">
              Project?
            </h1>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex justify-center "
          >
            <Link href="/work">
              <button className="boton-elegante rounded-xl">Let's Talk</button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <div className="mt-5 sm:mt-12 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-white text-sm sm:text-base md:text-lg font-medium">
              {["INSTAGRAM", "TWITTER", "LINKEDIN"].map((Item, idx) => (
                <li key={idx} className="flex items-center group">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="hover:text-[#FF4500] transition flex items-center relative 
            before:content-[''] before:absolute before:left-0 before:bottom-0 
            before:h-[2px] before:w-full before:scale-x-0 before:origin-bottom-right 
            before:bg-current before:transition-transform before:duration-200 
            hover:before:scale-x-100 hover:before:origin-bottom-left"
                  >
                    {Item}
                  </Link>
                  <ArrowUpRight
                    size={30}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-5 px-4 sm:px-10 md:px-20 text-white/40">
            <p className="rotate-[135deg]">
              <ChevronRight size={24} />
            </p>
            <p className="rotate-[45deg]">
              <ChevronRight size={24} />
            </p>
          </div>

          {/* Footer bottom line */}
          <div className="flex justify-between items-center mt-12 text-sm text-white hover:text-[#FF4500] transition font-medium">
            <span>BUILT BY VERTEX</span>
            <Link href="#top" scroll={true}>
              BACK TO TOP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
