"use client";

import Header from "@/components/header";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Send } from "lucide-react";
import bgImage from "@/public/image.png";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />



      {/* Contact Section */}
      <section className="pt-24 py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0 uppercase">
            Contact
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 uppercase">Let's work together</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-xl text-gray-300 mb-4">
                I'm currently available for Freelance Projects.
                <br />
                Email me for Inquiries.
              </p>

              <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">INQUIRY FORM</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="NAME"
                      required
                      className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/40 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL"
                      required
                      className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/40 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="MESSAGE"
                      required
                      rows={6}
                      className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/40 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-[#FF4500] transition-colors flex items-center justify-center"
                  >
                    SEND EMAIL
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="rounded-2xl overflow-hidden h-[620px]"
            >
              <Image
                src={bgImage}
                alt="Contact visual"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
            <h2 className="text-base sm:text-lg font-medium text-white w-20 shrink-0">
              CONNECT
            </h2>
            <div className="flex-1 bg-white/20 ml-6 h-[1.5px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#0f0f0f]/50 border border-[#1a1a1a] p-6 rounded-xl group hover:bg-[#0f0f0f]/70 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4500] transition-colors">
                Email
              </h3>
              <p className="text-gray-400">hello@vertex.design</p>
              <Link
                href="mailto:hello@vertex.design"
                className="mt-4 inline-flex items-center text-sm text-white hover:text-[#FF4500] transition-colors"
              >
                Send an email
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div
              className="bg-[#0f0f0f]/50 border border-[#1a1a1a] p-6 rounded-xl group hover:bg-[#0f0f0f]/70 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4500] transition-colors">
                Social
              </h3>
              <p className="text-gray-400">Follow me on social media</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  href="#"
                  className="text-white hover:text-[#FF4500] transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-[#FF4500] transition-colors"
                >
                  Twitter
                </Link>
              </div>
            </div>

            <div
              className="bg-[#0f0f0f]/50 border border-[#1a1a1a] p-6 rounded-xl group hover:bg-[#0f0f0f]/70 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4500] transition-colors">
                Location
              </h3>
              <p className="text-gray-400">San Francisco, CA</p>
              <p className="text-gray-400">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
