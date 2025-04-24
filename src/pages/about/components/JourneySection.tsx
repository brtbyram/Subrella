import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { clsx } from 'clsx';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Award, Trophy } from "lucide-react";

function JourneySection() {

    const journeyData = [
        {
            year: "2020",
            description: "Founded",
            icon: <Award size={32}/>,
        },
        {
            year: "2021",
            description: "First Product Launch",
            icon: <Trophy size={32}/>,
        },
        {
            year: "2022",
            description: "Expanded Team and Services",
            icon: <Award size={32}/>,
        },
        {
            year: "2023",
            description: "New Office Opening",
            icon: <Trophy size={32}/>,
        },
        {
            year: "2024",
            description: "Major Milestone Achieved",
            icon: <Trophy size={32}/>,
        },
        {
            year: "2025",
            description: "Global Expansion",
            icon: <Trophy size={32}/>,
        },
    ];
            

  return (
    <section className="container mx-auto w-screen py-10 sm:px-2">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        breakpoints={{
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1124: {
                slidesPerView: 4,
            },
        }}
      >
        {journeyData.map((item, index) => (
        <SwiperSlide>
        <div className="flex items-center justify-center h-80 max-sm:px-4">
          <div className={clsx("w-6 h-6 border-4 border-[#112d5d] rounded-full relative before:w-0.5 before:h-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-[#112d5d]",
            index%2 === 0 ? "before:bottom-4" : "before:top-4",
          )}>
              <div className={clsx("absolute -left-2 flex items-start gap-x-3 w-screen pr-4",
                index%2 === 0 ? "-top-24" : "top-20",)}>
                <div className="text-blue-700">{item.icon}</div>
                <div>
                  <h2 className="text-blue-700 text-3xl font-bold">{item.year}</h2>
                  <p className="text-lg text-gray-600 text-wrap">{item.description}</p>
                </div>
              </div>
          </div>
          <div className="w-full h-1.5 bg-[#112d5d]" />
        </div>
      </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
}

export default JourneySection;
