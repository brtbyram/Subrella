"use client";

import { useState, useEffect} from "react";
import {
  motion,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import FeaturesSection from "./home/FeaturesSection";
import HeroBackground from "@/components/HeroBackground";

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

// const FeatureCard = ({
//   icon: Icon,
//   title,
//   description,
//   className,
//   img,
//   href,
// }: any) => {
//   return (
//     <motion.div
//       className={`w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-16 bg-[#e0eae8] p-2 rounded-xl shadow-lg ${className}`}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       id={href}
//     >
//       <div className="overflow-hidden">
//         <img
//           className="h-full bg-[#112d5d] rounded-3xl max-h-[400px] overflow-hidden"
//           src={img}
//         />
//       </div>
//       <div className="p-4">
//         <div className="flex items-center justify-center space-x-4 p-4">
//           <Icon size={48} />
//           <h3 className="text-[#1c1c1e] text-3xl">{title}</h3>
//         </div>
//         <p className="text-xl text-[#69696b]">{description}</p>
//       </div>
//     </motion.div>
//   );
// };

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
    <div className="flex flex-col">
      <main className="flex-grow md:pt-16">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[800px] overflow-hidden">
          <img src="../../public/home-banner.png" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center text-center absolute  left-0 right-0 max-lg:top-1/4 bottom-0 sm:bottom-1/2 space-y-6  -translate-y-1/3"
          >
            <motion.h1
              translate="no"
              className="text-4xl max-lg:hidden md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Subrella
            </motion.h1>
            <motion.p
              className="lg:text-xl text-black sm:text-white/90 max-w-3xl mx-auto font-lg font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Manage all your subscriptions in one place, <br /> save money and
              gain financial freedom.
            </motion.p>
            <Button size="xl" className="bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Link to="/register">Get Started</Link>
            </Button>
          </motion.div>
        </div>

        <HeroBackground />

        {/* Features Section */}
        <FeaturesSection/>

        {/* Savings Section */}
        <section className="py-20">
          <div className="container mx-auto flex max-sm:flex-col gap-x-3 group">
            <div className="bg-[#112d5d] text-white p-11 gap-y-36 grid place-content-center group max-w-[486px] w-full">
              <h3 className="text-white text-5xl font-montserrat">
                Grow savings faster
              </h3>
              <div className="flex items-end justify-between space-x-4 w-full">
                <div className="w-8 bg-[#fff3] h-8 group-hover:h-48 transition-all duration-500" />
                <div className="w-8 bg-[#fff3] h-16 group-hover:h-12 transition-all duration-500" />
                <div className="w-8 bg-[#fff3] h-36 group-hover:h-28 transition-all duration-500" />
                <div className="w-8 h-60 relative bg-[#e0eae8]">
                  <div className="flex justify-center relative -top-4">
                    <img
                      src="https://cdn.prod.website-files.com/672303104903a04ce2f497df/673c2de69dbf89a41c634f55_Group%2039694.svg"
                      className="min-w-[6.3rem]"
                    />
                  </div>
                  <div className="absolute -top-[4rem] left-1/2 -translate-x-1/2 text-2xl font-semibold ">
                    <span translate="no">$12,000</span>
                  </div>
                </div>
                <div className="w-8 bg-[#fff3] h-32 group-hover:h-24 transition-all duration-500" />
                <div className="w-8 bg-[#fff3] h-44 group-hover:h-16 transition-all duration-500" />
              </div>
            </div>
            <div className="bg-[#e0eae8] text-[#1b1a3f] p-10 flex flex-col items-center justify-center text-center rounded-bl-[10rem] shadow-xl">
              <h3 className="text-4xl">Save money with Subrella</h3>
              <p className="text-lg mt-4 text-[#546078] pb-10">
                Subrella is a subscription management platform that helps you
                save money by identifying and canceling unnecessary
                subscriptions. With Subrella, you can easily track all your
                subscriptions, analyze your spending habits, and make better
                financial decisions.
              </p>
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
                      $<CountUp end={12000} />
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
              </div>
            </div>
          </div>
        </section>

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
      <div className="container mx-auto w-full h-[1px] bg-gray-300" />
    </div>
  );
}
