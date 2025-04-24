import { useSpring } from 'framer-motion';
import { useEffect, useState } from 'react'

function SavingSection() {

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

  return (
    <section className="pb-20">
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
          Make the most of your money by reducing unnecessary expenses
          with our personalized subscription options. With smart
          recommendations and analytics, we help you save money every step
          of the way. Our system plays an important role in achieving
          financial freedom by enabling you to choose subscriptions that
          fit your budget.
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
  )
}

export default SavingSection