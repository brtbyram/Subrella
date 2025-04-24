import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function HeroSection() {
  const CountUp = ({ end, duration = 2 } :{ end: number; duration?: number }) => {
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

  return (
    <div className="bg-[#112d5d] text-white min-h-[760px] relative flex flex-col justify-end items-center md:gap-y-24">
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <p className=" text-xs text-[#848f99]">ABOUT US</p>
        <h1 className="text-5xl md:text-[4rem] md:text-center mb-8">
          Simplify Your <br />
          Subscription Management
        </h1>
        <p className="text-lg md:text-xl md:text-center max-w-[800px] font-poppins">
          Our platform centralizes all your subscription processes, streamlining
          billing, renewals, and customer management. By automating routine
          tasks and offering real-time insights, we empower your team to focus
          on strategic growth while we handle the complexities of your
          subscription lifecycle.
        </p>
      </div>
      <div className="flex max-md:flex-col justify-center items-center text-black h-full py-8 w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-x-20 gap-y-4 sm:text-xl font-inter">
          <div className="">
            <p className="text-5xl md:text-6xl font-bold">
              <CountUp end={1000} />+
            </p>
            <p className="mt-1">Happy User</p>
          </div>
          <div className="">
            <p className="text-5xl md:text-6xl font-bold ">
              $<CountUp end={12000} />
            </p>
            <p className="mt-1">Total Savings</p>
          </div>
          <div className="">
            <p className="text-5xl md:text-6xl font-bold ">
              <CountUp end={30} />%
            </p>
            <p className="mt-1">Average Savings Rate</p>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden bg-gray-100 h-72 w-72 rounded-full absolute top-1/2 -translate-y-1/2 -left-48" />
      <div className="max-lg:hidden bg-gray-100 h-[55%] w-24 rounded-tl-full absolute bottom-0 right-0" />
    </div>
  );
}

export default HeroSection;
