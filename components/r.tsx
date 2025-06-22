"use client";

import {
    useInView,
    motion,
    useAnimation,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import bgImage from "@/public/image.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Plus, X } from "lucide-react";

export default function Section2() {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-100px 0px", once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ width: "100%" });
        }
    }, [inView, controls]);

    const portfolio = [
        {
            title: "Creafom Studio",
            date: "October 2024",
            img: bgImage,
        },
        {
            title: "Blogify Platform",
            date: "June 2024",
            img: bgImage,
        },
        {
            title: "Artisan Crafts",
            date: "March 2024",
            img: bgImage,
        },
        {
            title: "NextGen App",
            date: "January 2024",
            img: bgImage,
        },
    ];

    type Service = {
        id: number;
        title: string;
        desc: string;
    };

    const expertise: Service[] = [
        {
            id: 1,
            title: "FULLSTACK WEB DEVELOPMENT",
            desc: "Building responsive, fast, and user-friendly web applications using React.js, Next.js, Node.js, and Tailwind CSS.",
        },
        {
            id: 2,
            title: "AI-POWERED CHATBOTS",
            desc: "Developing intelligent chatbot systems with Python, Langchain, OpenAI APIs, and NVIDIA APIs to deliver smart conversational experiences.",
        },
        {
            id: 3,
            title: "SECURE AUTHENTICATION & DATABASE",
            desc: "Implementing secure user authentication flows and integrating scalable databases using PostgreSQL and Prisma ORM.",
        },
        {
            id: 4,
            title: "UI/UX DESIGN & MOTION",
            desc: "Designing clean and engaging interfaces with a focus on user experience, utilizing Tailwind CSS and Framer Motion animations.",
        },
        {
            id: 5,
            title: "FULLSTACK SOLUTIONS CONSULTING",
            desc: "Offering end-to-end solutions that transform ideas into scalable products with maintainable, clean code.",
        },
    ];

    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <div className="p-20 translate-y-3">
            <section className="text-white py-10 pt-20 md:py-15 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
                                STORY
                            </h2>
                            <div className="h-[2px] bg-white rounded-full flex-1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-12">
                        <motion.div
                            animate={{ width: "100%" }}
                            initial={{ width: "0%" }}
                            transition={{ duration: 2 }}
                            className="h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden"
                        >
                            <Image
                                src={bgImage}
                                alt="Story Image"
                                width={3840}
                                height={2160}
                                className="h-full w-full object-cover rounded-xl"
                                priority
                            />
                        </motion.div>
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                                I’m Amen, a passionate Fullstack Web & AI Developer with over 4
                                years of experience delivering modern and scalable web
                                applications.
                            </p>
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                                I specialize in turning ideas into clean, performant code, with
                                a strong focus on user experience, AI integration, and scalable
                                backend solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section className="text-white py-6 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
                                WORK
                            </h2>
                            <div className="h-[2px] bg-white rounded-full flex-1" />
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 mt-3">
                            FEATURED PROJECTS
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {portfolio.map((item, idx) => (
                            <div className="space-y-4" key={idx}>
                                <div className="space-y-2">
                                    <h4 className="text-lg sm:text-xl font-medium text-white">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                                        {item.date}
                                    </p>
                                </div>
                                <Link href="/">
                                    <div className="aspect-[4/5] bg-[#E8E0D4] rounded-lg overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={`${item.title} project image`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className=" text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0  bg-opacity-70 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
                        >
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#0F0F0F] text-white rounded-2xl sm:rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row max-w-[95%] sm:max-w-3xl lg:max-w-6xl w-full mx-auto relative shadow-xl translate-y-[-70px] lg:translate-y-0 md:translate-y-0 "
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

                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                        <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
                            SERVICES
                        </h2>
                        <div className="h-[2px] bg-white rounded-full flex-1" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16">
                        HOW I CAN HELP?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {expertise.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300"
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
                                <h4 className="text-lg sm:text-xl font-bold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-6">
                        {expertise.slice(3).map((item) => (
                            <div
                                key={item.id}
                                className="relative bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/70 border border-[#1a1a1a] p-4 sm:p-6 rounded-xl transition duration-300"
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
                                <h4 className="text-lg sm:text-xl font-bold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className=" py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                        <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
                            EXPERIENCE
                        </h2>
                        <div className="flex-1 h-[2px] bg-white rounded-full ml-6" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
                        <div className="lg:col-span-1">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sticky top-8 ">
                                WORK HISTORY
                            </h3>
                        </div>
                        <div className="lg:col-span-3 space-y-8 sm:space-y-12 lg:space-y-16 lg:w-full">
                            <div className="border-b border-[#161616] pb-6">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    <div className="flex-1 space-y-4">
                                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                            Freelance / Personal Projects
                                        </h4>
                                        <h5 className="text-base sm:text-lg md:text-xl font-medium text-white">
                                            Fullstack Web & AI Developer
                                        </h5>
                                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400">
                                            Built secure fullstack apps with authentication, real-time
                                            chat, and AI chatbots.
                                        </p>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-400">
                                            Designed responsive, user-friendly interfaces focused on
                                            performance and scalability.
                                        </p>
                                    </div>
                                    <div className="lg:text-right">
                                        <p className="text-base sm:text-lg md:text-xl font-medium text-white whitespace-nowrap">
                                            2020 - Present
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section className=" py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                            <h2 className="text-base sm:text-lg font-medium text-white shrink-0">
                                SKILLS
                            </h2>
                            <div className="flex-1 h-[2px] bg-white rounded-full ml-6" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
                        <div className="lg:col-span-1">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sticky top-8">
                                FAVOURITE STACK
                            </h3>
                        </div>

                        <div className="lg:col-span-3 space-y-8 sm:space-y-12 lg:space-y-16 lg:w-full">
                            {[
                                {
                                    title: "Next.js",
                                    description:
                                        "My go-to React framework for building fullstack applications with server-side rendering and API routes.",
                                    level: "95%",
                                },
                                {
                                    title: "React.js",
                                    description:
                                        "Core of all modern frontend interfaces I build — modular, fast, and intuitive for complex UIs.",
                                    level: "90%",
                                },
                                {
                                    title: "Node.js & Express",
                                    description:
                                        "Backend essentials for creating RESTful APIs and handling server-side logic efficiently.",
                                    level: "85%",
                                },
                                {
                                    title: "Tailwind CSS",
                                    description:
                                        "Build beautiful, responsive UIs in no time — utility-first design system I use in every project.",
                                    level: "92%",
                                },
                                {
                                    title: "Prisma & PostgreSQL",
                                    description:
                                        "Modern ORM + robust SQL database for scalable and reliable data modeling and queries.",
                                    level: "88%",
                                },
                                {
                                    title: "Python & AI APIs",
                                    description:
                                        "Use Python with OpenAI, Google, and NVIDIA APIs to build smart AI chatbots and tools.",
                                    level: "90%",
                                },
                            ].map((skill, i) => (
                                <div key={i} className="pb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        <div className="flex-1 space-y-3">
                                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                                {skill.title}
                                            </h4>
                                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 max-w-3xl">
                                                {skill.description}
                                            </p>
                                        </div>
                                        <div className="lg:text-right lg:min-w-[100px]">
                                            <p className="text-base sm:text-lg md:text-xl font-medium text-white whitespace-nowrap">
                                                [ {skill.level} ]
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* EDUCATION */}
            <section className=" py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
                                EDUCATION
                            </h2>
                            <div className="flex-1 h-[2px] bg-white rounded-full ml-6" />
                        </div>
                    </div>
                    <div className="space-y-8 mt-6 sm:mt-10">
                        <div>
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                SELF / TAUGHT
                            </h4>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">
                                2020 - 2025 · Online Courses, Personal Projects
                            </p>
                            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                                Gained practical skills through hands-on projects in web
                                development, Python, machine learning, and AI integrations.
                                Focused on building real-world applications using modern
                                frameworks and libraries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className=" text-gray-300 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wider">
                                LET'S TALK
                            </h2>
                            <div className="flex-1 h-[2px] bg-white rounded-full ml-6" />
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between mt-10 sm:mt-16 md:mt-20 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-10 md:px-20">
                            <p className="text-center rotate-225">
                                <ChevronRight size={24} />
                            </p>
                            <p className="text-center rotate-315">
                                <ChevronRight size={24} />
                            </p>
                        </div>
                        <div className="text-center font-extrabold text-white translate-x-2">
                            <h1  style={{ letterSpacing: "0.35em" }} className="inter-tight text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[160px] leading-none tracking-tight mt-6 sm:mt-8 md:mt-10">
                                VERTEX
                            </h1>
                        </div>
                        <div className="flex justify-center items-center text-center flex-col">
                            <h4 className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl">
                                BASED IN Los Angeles, I AM AN INNOVATIVE DESIGNER AND DIGITAL
                                ARTIST. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT
                                TYPOGRAPHY, AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.
                            </h4>
                        </div>

                        <div className="mt-6 sm:mt-8 flex justify-center">
                            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-white text-sm sm:text-base md:text-lg font-medium">
                                <li>
                                    <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        className="hover:text-[#FF4500] transition flex items-center"
                                    >
                                        INSTAGRAM
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://twitter.com"
                                        target="_blank"
                                        className="hover:text-[#FF4500] transition flex items-center"
                                    >
                                        TWITTER
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://linkedin.com"
                                        target="_blank"
                                        className="hover:text-[#FF4500] transition flex items-center"
                                    >
                                        LINKEDIN
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-between mt-10 sm:mt-16 md:mt-20 px-4 sm:px-10 md:px-20">
                            <p className="text-center rotate-135">
                                <ChevronRight size={24} />
                            </p>
                            <p className="text-center rotate-45">
                                <ChevronRight size={24} />
                            </p>
                        </div>
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

