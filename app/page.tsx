"use client";
import Header from "@/components/header";
import Landing from "@/components/landing";
import Section2 from "@/components/landing2";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Landing />
      <Section2 />
    </>
  );
}
