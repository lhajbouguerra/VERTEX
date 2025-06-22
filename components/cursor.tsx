"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
  
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
  
    const addHover = () => cursor.classList.add("scale-150");
    const removeHover = () => cursor.classList.remove("scale-150");
  
    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
  
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] left-0 top-0 w-4 h-4 rounded-full bg-white opacity-80 mix-blend-difference transition-transform duration-150 ease-out"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
