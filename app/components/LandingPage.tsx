"use client";
import React from "react";
import {
  Palette,
  Layers,
  Type,
  Wand,
  Download,
  Star,
  Github,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

import { MaxWidthWrapper } from "./width-wrapper";
import { ShinyButton } from "./shiny-button";
import { Button } from "@/components/ui/button";

export const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <MaxWidthWrapper className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Palette className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Creatify</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>
              <Link
                href="https://github.com/Zaidbhati10114/image-ai"
                target="_blank"
                className="cursor-pointer flex items-center gap-2 text-purple-500 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
            <Button variant={"outline"}>
               
              <Link
                href="https://image-ai-phi.vercel.app/"
                target="_blank"
                className="cursor-pointer flex items-center gap-2 text-purple-500 hover:text-gray-900"
              >
                Sign In
              </Link>
            </Button>
          </div>
        </MaxWidthWrapper>
      </nav>
      <section className="relative py-24 sm:py-32 bg-gray-50">
        <MaxWidthWrapper className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto text-center flex flex-col items-center gap-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Design Without Limits,
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Create Anything
              </span>
            </h1>
            <p className="max-w-prose text-lg text-gray-600">
              Unleash your creativity with our powerful graphic design editor.
              Professional design tools made simple and intuitive for everyone.
            </p>
            <div className="flex gap-4">
              <ShinyButton
                href="https://image-ai-phi.vercel.app/"
                className="relative z-10 h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white"
              >
                Start For Free Today
              </ShinyButton>
              <ShinyButton
                href="#features"
                className="relative z-10 h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white"
              >
                Explore Features
              </ShinyButton>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-white">
        <MaxWidthWrapper>
          <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
            {/* Real-time Collaboration */}
            <div className="lg:row-span-2 bg-gray-50 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Layers className="w-10 h-10 text-purple-600" />
                <h3 className="text-xl font-semibold">
                  Intuitive Design Tools
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Drag, drop, and customize with ease. Our interface makes
                professional design accessible to everyone.
              </p>
              <div className="mt-auto">
                <Image
                  src="/wall.jpg"
                  alt="Design Tools Preview"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Text Enhancements */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Type className="w-10 h-10 text-blue-600" />
                <h3 className="text-xl font-semibold">Advanced Typography</h3>
              </div>
              <p className="text-gray-600">
                Hundreds of fonts, styles, and alignment options to make your
                text pop.
              </p>
            </div>

            {/* AI Capabilities */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Wand className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold">AI-Powered Design</h3>
              </div>
              <p className="text-gray-600">
                Generate images, remove backgrounds, and get intelligent design
                suggestions.
              </p>
            </div>

            {/* Export & Sharing */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Download className="w-10 h-10 text-indigo-600" />
                  <h3 className="text-xl font-semibold">Seamless Exports</h3>
                </div>
                <p className="text-gray-600">
                  Export your designs in multiple formats: PNG, JPG, SVG, and
                  more. Share directly or download for any purpose.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="bg-white p-2 rounded-lg">PNG</div>
                <div className="bg-white p-2 rounded-lg">SVG</div>
                <div className="bg-white p-2 rounded-lg">JSON</div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <MaxWidthWrapper className="text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Creators Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 text-left">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;This design tool has transformed my workflow. It&apos;s so
                intuitive and packed with features, I can&apos;t imagine
                designing without it now.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/user-2.png"
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Sarah Thompson</p>
                  <p className="text-gray-500">Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 text-left">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;The AI features are mind-blowing. Background removal and
                image generation have saved me hours of manual work.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/user-1.png"
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Mike Rodriguez</p>
                  <p className="text-gray-500">Marketing Creative</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <MaxWidthWrapper className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have transformed their design
              process. No credit card required.
            </p>
            <Link href={"https://image-ai-phi.vercel.app/"}>
              <button className="px-10 py-4 text-lg bg-white text-purple-700 hover:bg-gray-100">
                Start Your Free Trial
              </button>
            </Link>
          </motion.div>
        </MaxWidthWrapper>
      </section>
      <footer className="bg-gray-100 py-12">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Palette className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Creatify</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Developed by Zaid</p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/Zaidbhati10114"
                  target="_blank"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/Zaidbhati4"
                  target="_blank"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.907l8.66-9.87L0 1.153h7.594l5.243 6.932z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
};
