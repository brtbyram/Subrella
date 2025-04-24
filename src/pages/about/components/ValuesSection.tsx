import clsx from "clsx";
import { useState } from "react";

function ValuesSection() {
  const [mouseOverIndex, setMouseOverIndex] = useState<number>(0);

  const valuesData = [
    {
      title: "Sustainability",
      description:
        "We are committed to sustainable practices that benefit our planet.",
      image: "public/Sustainability.png",
      color: "bg-[#09a166]",
    },
    {
      title: "Collaboration",
      description:
        "We believe in teamwork and collaboration to achieve our goals.",
      image: "public/Collaboration.png",
      color: "bg-[#112d5d]",
    },
    {
      title: "Excellence",
      description:
        "We are committed to excellence in all aspects of our business.",
      image: "public/Excellence.png",
      color: "bg-[#fabe69]",
    },
    {
      title: "Innovation",
      description:
        "We embrace change and strive for continuous improvement and innovation.  ",
      image: "public/Innovation.png",
      color: "bg-[#abc8ee]",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions.",
      image: "public/Integrity.png",
      color: "bg-[#7b818a]",
    },

    {
      title: "Respect",
      description:
        "We treat everyone with respect and dignity, fostering a positive environment.",
      image: "public/Respect.png",
      color: "bg-[#ca5959]",
    },
  ];

  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Values</h1>

      <div className="grid max-sm:grid-rows-10 sm:grid-cols-12 gap-4">
        {valuesData.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setMouseOverIndex(index)}
            onMouseLeave={() => setMouseOverIndex(mouseOverIndex)}
            onFocus={() => setMouseOverIndex(index)}
            className={clsx(
              `flex items-center justify-center relative min-h-24 sm:h-[450px] rounded-3xl transition-all duration-500 ease-linear ${item.color}`,
              mouseOverIndex === index
                ? "row-span-5 sm:col-span-7 border-2"
                : "bg-opacity-40"
            )}
          >
            <div className="flex items-center justify-center rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="max-sm:hidden h-[450px] min-w-48 object-contain"
              />
              <div
                className={clsx(
                  "p-4 w-[100%] flex flex-col justify-center items-center text-center gap-y-3",
                  mouseOverIndex === index ? "" : "hidden"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-10"
                />
                <h2 className="text-4xl text-white">{item.title}</h2>
                <p className="text-2xl text-gray-300">{item.description}</p>
              </div>
            </div>
            <h2
              className={clsx(
                "text-white font-semibold sm:hidden text-3xl",
                mouseOverIndex === index ? "hidden" : ""
              )}
            >
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesSection;
