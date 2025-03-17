"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, X, Zap, Users, Building, Sparkles } from "lucide-react";

export default function Pricing(): any {
  const [isAnnual, setIsAnnual] = useState(false);

  const packages = [
    {
      name: "Free",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      price: 0,
      annualPrice: 0,
      features: [
        { text: "5 subscription tracking", included: true },
        { text: "Monthly reminders", included: true },
        { text: "Key reports", included: true },
        { text: "Multi-currency support", included: false },
        { text: "Advanced analytics", included: false },
      ],
      cta: "Start for Free",
      popular: false,
      color: "yellow",
    },
    {
      name: "Pro",
      icon: <Sparkles className="h-8 w-8 text-blue-500" />,
      price: 9.99,
      annualPrice: 99,
      features: [
        { text: "Unlimited subscription tracking", included: true },
        { text: "Weekly reminders", included: true },
        { text: "Advanced reports and graphs", included: true },
        { text: "Multi-currency support", included: true },
        { text: "Automatic payment tracking", included: true },
      ],
      cta: "Switch to Pro Plan",
      popular: true,
      color: "blue",
    },
    {
      name: "Premium",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      price: 24.99,
      annualPrice: 249,
      features: [
        { text: "All Pro features", included: true },
        { text: "Team management (up to 5 users)", included: true },
        { text: "Customizable reports", included: true },
        { text: "API access", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Switch to Business Plan",
      popular: false,
      color: "purple",
    },
    {
      name: "Enterprise",
      icon: <Building className="h-8 w-8 text-gray-500" />,
      price: "Custom",
      annualPrice: "Custom",
      features: [
        { text: "All Business features", included: true },
        { text: "Unlimited team management", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "24/7 premium support", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
      color: "gray",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#112d5d] from-45% to-45%  to-gray-200 py-20 font-poppins overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-start justify-center gap-y-4 py-12 px-4">
        <p className="text-xs text-start text-[#848f99]">PRICING</p>
        <motion.h1
          className="text-6xl font-light mb-6 text-white font-inter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose a Pricing Plan
        </motion.h1>
        <p className="text-xl text-white">
          Whether you're a solopreneur or a large enterprise, we have a plan for
          you.
        </p>

        <div className="flex items-center justify-center mb-12 text-white">
          <span
            className={`mr-2 ${isAnnual ? "text-gray-500" : "font-semibold"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="bg-gray-500 relative h-10 w-16 rounded-3xl outline-none"
          >
            <span
              className={`w-6 h-6 rounded-full bg-white absolute top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
                isAnnual ? "" : "-translate-x-6"
              }`}
            />
          </button>
          <span
            className={`ml-2 ${isAnnual ? "font-semibold" : "text-gray-500"}`}
          >
            Annual
          </span>
          {isAnnual && (
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:-translate-y-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 , duration: 0.5 }}
            >
              <div
                className={`flex flex-col min-h-[500px] h-full w-full rounded-3xl p-4 relative transition-all duration-200 shadow-xl ${
                  pkg.popular
                    ? `border-${pkg.color}-500 border-4 !border-blue-800 bg-gray-700 text-[#f7f6f6] hover:bg-gray-600 my-5 lg:scale-105`
                    : "border bg-gray-100 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {pkg.popular && (
                      <div className="bg-[#f7f6f6] text-black rounded-t-3xl  border-b-4 border-blue-800 font-semibold absolute flex items-center justify-center text-xl -top-12 -left-1 -right-1 h-16  text-center">
                        Most Popular
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-normal text-gray-400 text-center">
                    {pkg.name}
                  </h3>
                  <p className="text-center my-2">
                    {typeof pkg.price === "number" ? (
                      <span className="text-4xl font-bold">
                        ${isAnnual ? pkg.annualPrice : pkg.price}
                        <span className="text-sm font-normal text-gray-500">
                          /{isAnnual ? "yearly" : "monthly"}
                        </span>
                      </span>
                    ) : (
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    )}
                  </p>
                </div>
                <main className="flex-grow mt-6">
                  <ul className="space-y-2 border-t border-gray-300 pt-4 text-base">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        {feature.included ? (
                          <Check
                            className={`h-5 w-5 text-${pkg.color}-500 mr-2`}
                          />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-2" />
                        )}
                        <span
                          className={feature.included ? "" : "text-gray-500"}
                        >
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </main>
                <div>
                  <button
                    className={`w-full h-14 text-lg text-[#f7f6f6] transition-colors duration-300 rounded-lg ${
                      pkg.popular
                        ? `bg-blue-800 text-[#f7f6f6] hover:bg-blue-900`
                        : "bg-[#112d5d] hover:bg-gray-500 "
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 bg-gradient-to-r from-[#112d5d] to-[#333a47] p-8 rounded-3xl">
          <h3 className="text-3xl font-semibold text-white mt-12">
            Looking to learn more before getting started?
          </h3>
          <p className="text-lg text-white mt-2">
            We're happy to answer any questions you have. Let's chat.
          </p>
          <div className="grid max-sm:w-full sm:grid-cols-2 gap-x-4 mt-4">
            <button className="min-w-max h-14 px-4 text-lg transition-colors duration-300 rounded-lg border border-[#f7f6f6] bg-[#f7f6f6] hover:bg-blue-800 hover:text-white mt-4">
              See Subrella in Action
            </button>
            <button className="min-w-max h-14 text-lg text-[#f7f6f6] border border-[#f7f6f6] transition-colors duration-300 rounded-lg bg-transparent hover:bg-gray-600 mt-4">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
