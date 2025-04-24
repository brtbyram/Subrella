import { motion } from "framer-motion";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TestimonialsSection() {

  const swiperRef = useRef(); // Swiper instance referansı

  const testimonials = [
    {
      quote:
        "Thanks to Subrella, I saved 200€ per month. It made me realize my unnecessary subscriptions.",
      author: "Ayşe Y.",
      job: "Product Manager",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
    {
      quote:
        "Now I manage all my subscriptions from one place. A very useful and time-saving application.",
      author: "Mehmet K.",
      job: "Software Engineer",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
    {
      quote:
        "Thanks to the graphs and reports, I can analyze my expenses much better. I highly recommend it!",
      author: "Zeynep A.",
      job: "Data Analyst",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
    {
      quote:
        "Subrella is a lifesaver! I can now track my subscriptions and avoid overspending.",
      author: "Ali D.",
      job: "Marketing Specialist",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
    {
      quote:
        "Subrella has changed the way I manage my finances. I can now see where my money goes.",
      author: "Fatma S.",
      job: "Financial Analyst",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
    {
      quote:
        "I love the user-friendly interface of Subrella. It's so easy to navigate and find what I need.",
      author: "Emre T.",
      job: "UX Designer",
      img: "/public/IMG_20190507_232453_781.jpg",
    },
  ];

  return (
    <section className="">
      <div className="">
        <motion.div
          className="text-2xl md:text-4xl text-center mb-12 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-7xl md:text-9xl  text-yellow-600 font-custom">“</span>
          <p className="px-4  font-semibold ">
            Don't take our word for it! <br /> Hear it from our customers
          </p>
          <span className="text-7xl md:text-9xl text-yellow-600 font-custom">”</span>
        </motion.div>
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Swiper instance'ını referansa atar
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // küçük ekranlarda tek slayt gösterilir
            },
            768: {
              slidesPerView: 2, // orta ekranlarda iki slayt gösterilir
            },
            1024: {
              slidesPerView: 3, // büyük ekranlarda üç slayt gösterilir
            },
          }}
          spaceBetween={40} // bu özellik, slaytlar arasındaki boşluğu ayarlar
          pagination={true} // bu özellik, sayfalama noktalarını gizler
          loop={true} // bu özellik, slaytların döngüsel olarak kaydırılmasını sağlar
          centeredSlides={true} // bu özellik, slaytların ortalanmasını sağlar
          centeredSlidesBounds={true} // bu özellik, slaytların ortalanmasını sağlar
          className="h-[400px] w-screen container mx-auto shadow-xl overflow-x-hidden testimonials-swiper"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="pt-6 border-2 border-gray-300 rounded-2xl shadow-2xl overflow-hidden bg-white flex flex-col justify-between h-[300px] max-w-[500px] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-9xl font-custom rotate-180 flex items-center absolute top-6 left-10 text-[#112d5d] leading-[1] tracking-[-0.1em]">   
                    ,,
                </div>
                <div className="px-6 pt-16">
                  <p className="italic mb-4 antialiased">"{testimonial.quote}"</p>
                </div>
                <div className="border-t-2 bg-gray-100 flex items-center justify-start space-x-4 px-6 py-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.img}
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.job}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center gap-x-40 px-4 transform z-20 absolute bottom-2 left-1/2 -translate-x-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="border p-2 rounded-full shadow-lg text-[#112d5d]"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="border p-2 rounded-full shadow-lg text-[#112d5d]"
            >
              <ChevronRight />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
