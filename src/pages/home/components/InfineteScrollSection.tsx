function InfineteScrollSection() {
  const logos = [
    "https://abonesepeti.com/assets/temp/brands/gain.svg",
    "https://abonesepeti.com/assets/temp/brands/laliga.svg",
    "https://abonesepeti.com/assets/temp/brands/digiturk-neo.svg",
    "https://abonesepeti.com/assets/temp/brands/blutv.svg",
    "https://abonesepeti.com/assets/temp/brands/igdas.svg",
    "https://abonesepeti.com/assets/temp/brands/netflix.svg",
    "https://abonesepeti.com/assets/temp/brands/dask.svg",
    "https://abonesepeti.com/assets/temp/brands/exxen.svg",
  ];

  console.log("sonuç", (30 / 8) * (8 - (7 + 1)) * -1);

  return (
    <div
      className={`flex flex-row gap-x-4 h-32 items-center justify-center my-20 container mx-auto relative  overflow-hidden`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {logos.map((logo, index) => (
        <button
          key={index}
          className={`item flex items-center justify-center w-[200px] p-4  rounded-md absolute animate-scrollLeft hover:text-red-600`}
          style={{
            left: 200 * logos.length,
            animationDelay: `${(30 / 8) * (8 - (index + 1)) * -1}s`,
            animationPlayState: "running",
          }}
          onMouseEnter={() => {
            const items = document.querySelectorAll(".item");
            items.forEach((item) => {
              item.style.animationPlayState = "paused";
            });
          }}
          onMouseLeave={(e) => {
            const items = document.querySelectorAll(".item");
            items.forEach((item) => {
              item.style.animationPlayState = "running";
            });
          }}
        >
          <img
            src={logo}
            alt="logo"

            className="w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 h-12"
          />
        </button>
      ))}
    </div>
  );
}

export default InfineteScrollSection;
