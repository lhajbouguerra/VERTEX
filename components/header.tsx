"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { searchdata } from "@/lib/db";
export default function Header() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  function preventArrowScroll(e: KeyboardEvent) {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "];
    if (keys.includes(e.key)) {
      e.preventDefault();
    }
  }
  useEffect(() => {
    const scrollY = window.scrollY; // Save before anything
    const preventScroll = (e: Event) => e.preventDefault();

    if (isSearchOpen || isOpen) {
      document.body.classList.add("no-scroll");

      // Apply fix without layout shift
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Prevent scroll events
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventArrowScroll);
    }

    return () => {
      document.body.classList.remove("no-scroll");

      // Restore scroll position
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (top) {
        const y = parseInt(top || "0") * -1;
        window.scrollTo(0, y);
      }

      // Clean up
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventArrowScroll);
    };
  }, [isSearchOpen, isOpen]);

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(searchdata);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered(searchdata);
    } else {
      const q = query.toLowerCase();
      const results = searchdata.filter((item) =>
        item.title.toLowerCase().includes(q)
      );
      setFiltered(results);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setIsSearchOpen]);
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-black">
      <header className="relative top-0 left-0 right-0 z-[100] w-full px-4 py-5 sm:px-6 md:px-8 flex items-center justify-between bg-black/80 backdrop-blur-md">
        <div
          className="flex-1 min-w-0 truncate pt-1"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-bold text-lg md:text-xl tracking-wider"
            >
              VERTEX
            </Link>
          </div>
        </div>
        <div
          className="flex items-center gap-4 md:gap-8 pr-4 pt-1"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white font-bold text-sm md:text-base tracking-wider hover:text-[#FF4500] cursor-pointer"
          >
            {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="text-white w-5 h-5 md:w-6 md:h-6 hover:text-[#FF4500]" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-32 px-4 sm:px-6 z-50 "
            initial={{ opacity: 0, y: "-20%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {" "}
            <div
              className=" absolute inset-0 bg-black/90 z-[-1]"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <div
              className="relative w-full max-w-2xl scale-90"
              onClick={(e) => e.stopPropagation()}
            >
              <Search className="text-white absolute top-4 left-4 w-5 h-5 md:w-6 md:h-6 hover:text-[#FF4500]" />
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl text-white text-sm sm:text-base bg-[#0f0f0f]/80 hover:bg-[#0f0f0f]/90 placeholder-white/60 border border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#FF4500]/40 transition-all"
              />

              {filtered.length > 0 && (
                <div
                  className="absolute w-full mt-3 rounded-xl border border-[#1a1a1a] bg-[#0f0f0f]/90 shadow-xl max-h-80 overflow-auto scrollable-search-results scrollbar"
                  style={{
                    touchAction: "auto",
                    overscrollBehavior: "contain",
                  }}
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  {filtered.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      className="block px-5 py-4 text-white hover:bg-[#1a1a1a]/70 transition-all font-medium text-sm sm:text-base"
                    >
                      <div className="flex flex-col">
                        <h1 className="text-[20px]">{item.title}</h1>

                        <p className="text-[#a3a3a3] inter">{item.url}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {query.length > 0 && filtered.length === 0 && (
                <div className="absolute w-full mt-3 px-5 py-4 bg-[#0f0f0f]/90 border border-[#1a1a1a] rounded-xl text-white text-sm">
                  No results found for "<span className="italic">{query}</span>"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex items-center justify-center px-4 sm:px-6"
            onClick={() => setIsOpen(false)}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="w-full max-w-screen-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation */}
              <nav className="flex flex-col items-center text-center">
                {[
                  { nav: "home", url: "" },
                  { nav: "work", url: "work" },
                  { nav: "about", url: "about" },
                  { nav: "contact", url: "contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={"/" + item.url}
                    className="group relative inline-block uppercase font-black text-white text-6xl lg:text-9xl tracking-tight leading-none overflow-hidden"
                  >
                    <span className="block clone-slide text-white">
                      {item.nav}
                    </span>
                    <span className="block clone-slide clone text-[#FF4500] absolute top-0 left-0">
                      {item.nav}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Socials */}
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
                        className=" ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
