"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const waveVariants: Variants = {
  animate: {
    x: [0, 20, 0, -20, 0], // Dalganın yatay salınımı
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroBackground() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#112d5d] text-white">
      {/* 1. Dalga Katmanı */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        variants={waveVariants}
        animate="animate"
      >
        <svg
          viewBox="0 0 1440 320"
          fill="#0D1E3F" // Koyu varyasyon
          fillOpacity="0.8"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path d="M0,256L48,224C96,192,192,128,288,96C384,64,480,64,576,90.7C672,117,768,171,864,181.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>

      {/* 2. Dalga Katmanı (daha açık ton, farklı hız) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        variants={{
          animate: {
            x: [0, -30, 0, 30, 0],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        animate="animate"
      >
        <svg
          viewBox="0 0 1440 320"
          fill="#1B3A75"
          fillOpacity="0.6"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path d="M0,256L48,224C96,192,192,128,288,96C384,64,480,64,576,90.7C672,117,768,171,864,181.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>

      {/* İçerik Konteyneri */}
      <div className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center px-6">
        {/* Metin Alanı */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Manage Your Subscriptions with Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-6 max-w-md text-gray-200"
          >
            Track, optimize, and save on all your recurring expenses in one
            intuitive platform. Join thousands who’ve discovered smarter
            subscription management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button variant="default" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Görsel / İllüstrasyon Alanı */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Örnek olarak Next.js Image veya normal img */}
          <img
            src="/public/home-foto.png"
            alt="Subrella Dashboard"
            width={500}
            height={400}
            className="drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
