import {  Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function AuthBanner() {
  return (
    <div className="basis-1/2 h-screen max-lg:hidden bg-[#112d5d] bg-opacity-95 overflow-hidden">
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          pagination={{ clickable: true }}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false, 
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="min-w-[300px] w-9/12"
                src="/public/login-banner.png"
              />
              <div className="bg-[#112d5d] bg-opacity-55 text-[#fefefe]  py-4 h-72 flex flex-col items-center justify-center">
                <h2 className="text-4xl mt-4 text-center">
                  Tekrarlayan Gelirlerinizi Optimize Edin
                </h2>
                <p className="text-base text-center mt-6 w-10/12">
                  Subrella, abonelik süreçlerinizi otomatik ödeme, yenileme ve
                  müşteri yönetimi özellikleriyle merkezi bir sistemde toplar.
                  Bu sayede tekrarlayan gelir akışlarınızı güvence altına
                  alırken, işletmenizin büyümesi için daha stratejik adımlar
                  atmanızı sağlar. Her ayrıntı, işinizi daha verimli hale
                  getirmek için özenle tasarlandı.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="min-w-[300px] w-9/12"
                src="/public/login-banner2.png"
              />
              <div className="bg-[#112d5d] bg-opacity-35 text-[#fefefe] py-4 h-72 flex flex-col items-center justify-center">
                <h2 className="text-2xl text-[#fefefe] text-center mt-4">
                  Abonelik Yönetiminin Geleceğini Açığa Çıkarın
                </h2>
                <p className="text-white text-base text-center px-8 mt-6 w-10/12">
                  Geleceğin abonelik çözümleriyle tanışın! Subrella, yenilikçi
                  teknolojileri ve kullanıcı odaklı yaklaşımıyla işletmenizin
                  dijital dönüşümünü destekler. Süreçlerinizi
                  otomatikleştirerek, zamandan tasarruf eder ve müşteri
                  memnuniyetini maksimum seviyeye çıkarır. Bu yenilikçi çözümle,
                  abonelik yönetiminizde devrim yaratın
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="min-w-[300px] w-8/12"
                src="/public/login-banner.png"
              />
              <div className="bg-[#112d5d] bg-opacity-35 -translate-y-20 text-[#fefefe] rounded-t-[6rem] py-4 h-72 flex flex-col items-center justify-center">
                <h2 className="text-4xl mt-4 text-center">
                  Tekrarlayan Gelirlerinizi Optimize Edin
                </h2>
                <p className="text-base text-center mt-6 w-10/12">
                  Subrella, abonelik süreçlerinizi otomatik ödeme, yenileme ve
                  müşteri yönetimi özellikleriyle merkezi bir sistemde toplar.
                  Bu sayede tekrarlayan gelir akışlarınızı güvence altına
                  alırken, işletmenizin büyümesi için daha stratejik adımlar
                  atmanızı sağlar. Her ayrıntı, işinizi daha verimli hale
                  getirmek için özenle tasarlandı.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="min-w-[300px] w-8/12"
                src="/public/login-banner2.png"
              />
              <div className="bg-[#112d5d] bg-opacity-35 text-[#fefefe] rounded-b-[6rem] py-4 h-72 flex flex-col items-center justify-center">
                <h2 className="text-2xl text-[#fefefe] text-center mt-4">
                  Abonelik Yönetiminin Geleceğini Açığa Çıkarın
                </h2>
                <p className="text-white text-base text-center px-8 mt-6 w-10/12">
                  Geleceğin abonelik çözümleriyle tanışın! Subrella, yenilikçi
                  teknolojileri ve kullanıcı odaklı yaklaşımıyla işletmenizin
                  dijital dönüşümünü destekler. Süreçlerinizi
                  otomatikleştirerek, zamandan tasarruf eder ve müşteri
                  memnuniyetini maksimum seviyeye çıkarır. Bu yenilikçi çözümle,
                  abonelik yönetiminizde devrim yaratın
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
