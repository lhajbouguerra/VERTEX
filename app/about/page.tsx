"use client";

import Header from "@/components/header";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Minus, Plus } from "lucide-react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import av from "@/public/av.jpg";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px", once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" });
    }
  }, [inView, controls]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is your typical process?",
      answer:
        "I start with understanding your needs, then create a proposal with timeline and pricing. After approval, I design and build your project with regular check-ins for feedback.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while more complex projects with custom functionality can take 1-2 months.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, I offer ongoing maintenance packages to keep your site secure, updated, and running smoothly after launch.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I offer milestone-based payment schedules.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32  px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              ABOUT
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 uppercase">
            VERTEX
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className=" px-4 sm:px-6 md:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="h-[500px] overflow-hidden rounded-xl">
              <Image
                src={av}
                alt="Profile Image"
                width={1920}
                height={1080}
                className="h-full w-full object-cover rounded-xl hover:scale-110 transition duration-300"
                priority
              />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">My Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Vertex — a self-taught full-stack web developer with a
                passion for building clean, fast, and intelligent web apps.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I started coding at 12 years old, curious about how websites
                work. I began with HTML and CSS, then discovered JavaScript.
                From there, I moved into frameworks like React and Next.js, and
                learned backend development with Node.js and Python — all
                through the internet.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I specialize in developing full-stack applications,
                landing pages, AI tools, and REST APIs. I work with:
                <div className="ml-4 mt-1.5">
                  <li><strong>Next.js</strong> for fast, SEO-friendly apps</li>
                  <li><strong>React & Tailwind CSS</strong> for modern UI</li>
                  <li><strong>Node.js / FastAPI / Flask</strong> for scalable
                  backends</li>
                  <li><strong>Google, NVIDIA APIs</strong> for AI
                  features</li>
                  <li><strong>MySQL & SQLite</strong> for relational databases</li>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              FAQ
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0f0f0f]/50 border border-[#1a1a1a] p-6 rounded-xl"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-xl font-bold text-white">
                    {faq.question}
                  </h3>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={openIndex === index ? "minus" : "plus"}
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                    >
                      {openIndex === index ? (
                        <Minus className="text-white" size={24} />
                      ) : (
                        <Plus className="text-white" size={24} />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-4 text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
                Let's Talk
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
            <h1 className="text-5xl sm:text-[72px] md:text-[96px] lg:text-[100px] xl:text-[120px] tracking-tight ">
              Have a Cool
            </h1>
            <h1 className="text-5xl sm:text-[72px] md:text-[96px] lg:text-[100px] xl:text-[120px] tracking-tight">
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
            
            <Link href="/contact">
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
