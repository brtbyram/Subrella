"use client";

import { useState, useEffect, useRef } from "react";

import { motion, useSpring, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PieChart, Bell, Shield } from "lucide-react";
import { Link } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";

// ... Header ve Footer bileşenleri aynı kalacak

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const springValue = useSpring(count, { duration: duration * 1000 });

  useEffect(() => {
    springValue.set(end);
  }, [end, springValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setCount(latest);
    });
  }, [springValue]);

  return <>{Math.floor(count)}</>;
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card>
        <CardHeader>
          <Icon className="w-10 h-10 text-[#2563EB] mb-2" />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function LandingPage() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Access token'ı alıyoruz.
      const accessToken = tokenResponse.access_token;

      // Google UserInfo API'sine istek gönderiyoruz.
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userInfo = await res.json();
      console.log(userInfo);
      // userInfo içerisinde "name", "sub" (Google ID), "picture" gibi veriler bulunur.
    },
    onError: (errorResponse) => console.error(errorResponse),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow md:pt-16">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px]  lg:h-[800px] overflow-hidden">
          <img src="../../public/home-banner.png" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center text-center absolute  left-0 right-0 max-lg:top-1/4 bottom-0 sm:bottom-1/2 space-y-6  -translate-y-1/3"
          >
            <motion.h1
              className="text-4xl max-lg:hidden md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black md:text-white font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Subrella
            </motion.h1>
            <motion.p
              className=" lg:text-xl text-black sm:text-white/90 max-w-3xl mx-auto font-lg font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Manage all your subscriptions in one place, <br /> save money and
              gain financial freedom.
            </motion.p>
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] px-10 py-4 text-md ">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button
              onClick={() => login()}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] px-10 py-4 text-md "
            >
              google login
            </Button>
          </motion.div>
        </div>

        {/* <motion.section
          className="relative bg-gradient-to-r from-[#1E293B] to-[#334155] text-white py-20 overflow-hidden"
          style={{ backgroundColor }}
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=800')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity,
              scale,
            }}
          />
          <motion.div
            className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10"
            style={{ y }}
          >
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Aboneliklerinizi Kontrol Altına Alın
              </motion.h1>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                SubTracker ile tüm aboneliklerinizi tek bir yerden yönetin,
                tasarruf edin ve finansal özgürlüğünüzü kazanın.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-lg py-2 px-6">
                  Hemen Başlayın
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src="/public/banner.png"
                alt="SubTracker Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.section> */}

        {/* Features Section */}
        <section id="özellikler" className="pb-10 lg:pt-10 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Subrella?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={DollarSign}
                title="Save Money"
                description="Identify unnecessary subscriptions and reduce your monthly expenses."
              />
              <FeatureCard
                icon={PieChart}
                title="Detailed Analytics"
                description="Visualize your spending habits and make better financial decisions."
              />
              <FeatureCard
                icon={Bell}
                title="Smart Reminders"
                description="Get notifications for upcoming payments and never miss a bill."
              />
              <FeatureCard
                icon={Shield}
                title="Secure and Private"
                description="Your data is protected by the highest security standards."
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <motion.section
          className="py-20 bg-[#e3efef]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto pl-4">
            <h2 className="text-3xl font-bold text-center pb-12">
              Save with Subrella
            </h2>
            <div className="flex max-md:flex-col justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:text-xl">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2563EB]">
                    <CountUp end={1000} />+
                  </p>
                  <p className="mt-2">Happy User</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2563EB]">
                    €<CountUp end={5000} />
                  </p>
                  <p className="mt-2">Total Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2563EB]">
                    <CountUp end={30} />%
                  </p>
                  <p className="mt-2">Average Savings Rate</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="w-full h-full max-w-[600px]"
                  src="../../public/home-foto.png"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What Our Users Say?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Thanks to Subrella, I saved 200€ per month. It made me realize my unnecessary subscriptions.",
                  author: "Ayşe Y.",
                },
                {
                  quote:
                    "Now I manage all my subscriptions from one place. A very useful and time-saving application.",
                  author: "Mehmet K.",
                },
                {
                  quote:
                    "Thanks to the graphs and reports, I can analyze my expenses much better. I highly recommend it!",
                  author: "Zeynep A.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <p className="italic mb-4">{testimonial.quote}</p>
                      <p className="font-semibold">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Take the First Step to Financial Freedom
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create a free account now and take control of your subscriptions
              Get it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-[#2563EB] hover:bg-gray-100 text-lg py-2 px-6">
                <Link to="/register">Create Free Account</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
