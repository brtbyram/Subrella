"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  BriefcaseBusiness,
  ArrowRight,
  Navigation,
} from "lucide-react";
import SocialList from "@/components/SocialList";
import { Link } from "react-router";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="bg-[#112d5d] bg-opacity-90 text-white h-[600px] flex items-center">
        <div className="space-y-4 container mx-auto px-4">
          <p className="text-xs text-[#848f99]">CONTACT US</p>
          <h1 className="text-4xl md:text-6xl mb-8">
            Unleash your thoughts & ideas. We're all ears.
          </h1>
          <p className="text-sm md:text-xl max-w-[800px]">
            Your thoughts matter. Whether you're bursting with questions,
            overflowing with feedback, or eager to explore a collaboration
            opportunity, we're all ears —No question is too grand, no idea too
            distant.
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 -z-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755075642!2d28.97881851532!3d41.03705297929828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1652345678901!5m2!1str!2str"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="flex max-lg:flex-col-reverse items-center lg:items-end justify-center container mx-auto -translate-y-24 lg:-translate-y-48">
        {/* Contact Information */}
        <div className="flex flex-col justify-center items-center lg:w-2/4 p-4 pb-12">
          <div className="w-/12 flex flex-col items-center pb-4">
            <h2 className="text-3xl font-bold text-center">Let’s get social</h2>
            <SocialList type="contact" />
          </div>
          <div className="text-black bg-gray-200  bg-opacity-20 border-2 border-gray-300 rounded-xl p-4 w-full flex items-center justify-start space-x-5">
            <Phone
              className="text-[#112d5d] bg-white p-4 rounded-full "
              size={64}
            />
            <div>
              <h3 className="text-xl">Phone</h3>
              <Link to="#" className="text-gray-500">
                +90 (212) 123 45 67
              </Link>
            </div>
          </div>
          <div className="text-black bg-gray-200  bg-opacity-20 border-2 border-gray-300 rounded-xl p-4 w-full flex items-center justify-start space-x-5 mt-4">
            <Mail
              className="text-[#112d5d] bg-white  p-4 rounded-full "
              size={64}
            />
            <div>
              <h3 className="text-xl">Email</h3>
              <Link to="#" className="text-gray-500">
                {" "}
                subrellateam@gmail.com
              </Link>
            </div>
          </div>
          <div className="text-black bg-gray-200  bg-opacity-20 border-2 border-gray-300 rounded-xl p-4 w-full flex items-center justify-start space-x-5 mt-4">
            <MapPin
              className="text-[#112d5d] bg-white p-4 rounded-full"
              size={64}
            />
            <div>
              <h3 className="text-xl">Address</h3>
              <Link to="#" className="text-gray-500">
                Örnek Mahallesi, Teknoloji Caddesi No:1, 34000 İstanbul
              </Link>
            </div>
          </div>
          <div className="text-black bg-gray-200  bg-opacity-20 border-2 border-gray-300 rounded-xl p-4 w-full flex items-center justify-start space-x-5 mt-4">
            <BriefcaseBusiness
              className="text-[#112d5d] bg-white p-4 rounded-full"
              size={64}
            />
            <div>
              <h3>Working Hours</h3>
              <p className="text-gray-500">Mon - Fri: 9:00 - 17:00</p>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="flex justify-center lg:w-2/4">
          <div className="flex flex-col items-center px-4 py-12 md:shadow-md w-full lg:w-10/12  bg-white bg-opacity-95 md:rounded-xl md:border">
            <Link to="/">
              <img
                className="h-16 rounded-full border-gray-200 bg-gray-100 p-3"
                src="/public/logo-kısa.svg"
              />
            </Link>
            <div className="pt-2 w-10/12">
              <h2 className="text-3xl font-bold text-center mb-6">
                Have questions? We're Just a Message Away!.
              </h2>
              <p className="text-center mb-6">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div className="flex items-center justify-between w-full gap-x-2">
                  <div className="space-y-1 basis-1/2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      required
                      className="bg-white border-gray-300 text-gray-800 h-12 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-1 basis-1/2">
                    <Label htmlFor="last Name" className="text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="last Name"
                      placeholder="Last Name"
                      required
                      className="bg-white border-gray-300 text-gray-800 h-12 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="you@gmail.com"
                    type="email"
                    required
                    className="bg-white border-gray-300 text-gray-800 h-12 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+90 (212) 123 52 61"
                    type="tel"
                    required
                    className="bg-white border-gray-300 text-gray-800 h-12 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="Subject" className="text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="Subject"
                    placeholder="Subject"
                    required
                    className="bg-white border-gray-300 text-gray-800 h-12 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Leave us a message"
                    required
                    className="bg-white border-gray-300 text-gray-800 h-32 placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#112d5d] hover:bg-blue-700 text-white text-base h-14"
                >
                  <Send className="mr-2 h-4 w-4" /> Submit your message
                </Button>
              </form>
              <AnimatePresence>
                {formSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-green-600"
                  >
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                    yapacağız.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

             {/* Google Maps */} 
             <div className="w-10/12 border-8 border-[#112d5d] rounded-t-3xl relative shadow-xl mx-auto">
          <div className="absolute -top-10 -left-10 rounded-full bg-[#112d5d] min-w-24 h-24 shadow-xl flex items-center justify-center z-10 text-white p-6 cursor-pointer group">
            <Navigation
              size={40}
              className="transition-all delay-100 duration-200 group-hover:rotate-45"
            />
            <button className="hidden opacity-0 group-hover:block group-hover:opacity-100 ml-6 text-lg transition-opacity delay-150">
              Get Direction
            </button>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755075642!2d28.97881851532!3d41.03705297929828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1652345678901!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0, borderTopRightRadius: "1.1rem", boxShadow: "0 10px 40px #112d5d" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex max-sm:flex-col items-center justify-center gap-x-10 py-24 px-6 text-center text-sm bg-[#112d5d] text-[#faf5ec]  sm:rounded-t-[5rem] xl:rounded-t-[10rem] min-h-max h-[500px]"
      >
        <img
          src="/public/Subscribe to our newsletter.png"
          className="h-full "
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-3xl md:text-5xl lg:text-6xl">
            Subscribe to our Newsletter
          </h3>
          <p className="text-xl">
            Stay up to date with our latest news and products
          </p>
          <div className="flex justify-center items-center min-w-max w-7/12">
            <Input
              placeholder="Enter your email"
              className="bg-[#faf5ec] border-gray-300 text-gray-800 w-full h-10"
            />
            <Button className="ml-2 bg-green-600 text-lg w-1/4 min-w-max h-full">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-4 right-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setShowChat(!showChat)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg"
        >
          <MessageCircle size={24} className="text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl p-4"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Canlı Destek
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              Merhaba! Size nasıl yardımcı olabilirim?
            </p>
            <Textarea
              placeholder="Mesajınızı yazın..."
              className="mb-2 bg-white border-gray-300 text-gray-800"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Gönder
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
