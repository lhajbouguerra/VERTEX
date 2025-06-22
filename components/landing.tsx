"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./fonts.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="bg-black h-[100vh]  text-white font-sans flex flex-col overflow-hidden relative"
      id="top"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-30 z-10 h-[85vh] md:h-[90vh] lg:h-[90vh]  xl:h-[90vh]  "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center">


        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-0"
        >
          <span className="relative">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-50 animate-ping translate-y-1.5" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          <span className="text-md uppercase tracking-wide instrument-sans text-gray-400 ">
            Available for Freelance
          </span>
        </motion.div>
        <div className="space-y-[-15px] md:space-y-[-10px] sm:space-y-[-0px]">
          {/* VERTEX */}
          <div className="overflow-hidden">
            <h1
              className="text-white instrument-sans font-bold text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] uppercase tracking-[-0.03em] leading-[1] mt-[-0.5rem]"
              data-aos="slide-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              VERTEX
            </h1>
          </div>

          {/* PORTFOLIO */}
          <div className="overflow-hidden">
            <h1
              className="text-white instrument-sans font-bold text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] uppercase tracking-[-0.03em] leading-[1] mt-[-0.5rem]"
              data-aos="slide-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Portfolio
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-base sm:text-lg uppercase font-mono tracking-wider flex items-center justify-center gap-2"
        >
          <span>Build, Integrate, Innovate</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >          <Link
           href="/work"
           
          >
          <button  className="boton-elegante rounded-xl">

            View Work
            
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
