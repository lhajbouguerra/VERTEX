"use client";

import Header from "@/components/header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { portfolio } from "@/lib/db";
import bgImage from "@/public/image.png";
import { motion } from "framer-motion";

export default function WorkPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              EXPLORE
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 uppercase"
          >
            My Work
          </h1>

        </div>
      </section>


      {/* Portfolio Grid */}
      <section className=" px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}

              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={bgImage}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    </span></div>
                </div>
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
