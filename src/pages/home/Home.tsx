"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import FeaturesSection from "./components/FeaturesSection";
import InfineteScrollSection from "./components/InfineteScrollSection";
import MobileAppSection from "./components/MobileAppSection";
import TestimonialsSection from "./components/TestimonialsSection";
import "./home.css";
import HeroSection from "./components/HeroSection";
import SavingSection from "./components/SavingSection";



export default function LandingPage() {
  return (
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* MobileApp Section */}
        <MobileAppSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Savings Section */}
        <SavingSection/>

        {/*Infinite Scroll Section*/}
        <InfineteScrollSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <motion.section
          className="text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pt-32 space-y-7 px-6 text-center relative md:-bottom-20 lg:-bottom-28  bg-[#133050]">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the First Step to Financial Freedom
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create a free account now and take control of your subscriptions
              Get it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="xl" className="bg-[#2563EB] hover:bg-[#1D4ED8]">
                <Link to="/register">Create Free Account</Link>
              </Button>
            </motion.div>
          </div>
          <motion.img
            className="bg-[#F3F4F6]"
            transition={{ duration: 0.5 }}
            src="../../public/2.png"
          />
        </motion.section>
      </main>
  );
}
