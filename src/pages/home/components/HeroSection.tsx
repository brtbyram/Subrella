
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col items-start text-center justify-around lg:justify-center h-screen text-white bg-[#112d5d] w-full relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 200, zIndex: -10 }}
      animate={{ opacity: 1, y: 0, zIndex: 10 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="px-10 md:px-20 relative z-10 space-y-4"
    >
      <p className="text-2xl lg:text-3xl text-[#fffcef] font-poppins text-center translate-y-7  lg:-translate-y-10 ">
        Manage all your subscriptions in one place, <br /> save money and
        gain financial freedom.
      </p>
      <button className="group relative px-6 py-3 rounded-full border border-[#3d6aff] text-lg translate-y-10  lg:-translate-y-7 font-semibold tracking-[2px] bg-white text-black overflow-hidden transition-all duration-200 ease-in hover:bg-[#3d6aff] hover:text-white hover:shadow-[0_0_30px_5px] hover:shadow-[#008eecd0] active:shadow-none">
        <Link to="/register">GET STARTED</Link>
        <span className="absolute block w-0 h-[86%] top-[7%] left-0 opacity-0 shadow-[0_0_50px_30px_#fff] group-hover:animate-sh02"></span>
      </button>
    </motion.div>

    <div className="z-1 overflow-hidden ">
      <motion.img
        initial={{ opacity: 0, y: 20, x: -75, rotate: -13 }}
        animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        src="/public/hero-banner2.svg"
        className="absolute right-0 bottom-0 max-m:w-full xl:h-5/6 object-contain"
      />
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full absolute bottom-0 right-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1270 320"
      >
        <path
          fill="#183c79"
          d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,96C672,96,768,160,864,186.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </motion.svg>
    </div>

            {/* <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1}}
        className="flex max-md:flex-col justify-center items-center bg-[#183c79] text-white pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:text-xl text-[#fffcef]">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[#fffcef]">
                      <CountUp end={1000} />+
                    </p>
                    <p className="mt-2">Happy User</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[#fffcef]">
                      $<CountUp end={12000} />
                    </p>
                    <p className="mt-2">Total Savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[#fffcef]">
                      <CountUp end={30} />%
                    </p>
                    <p className="mt-2">Average Savings Rate</p>
                  </div>
                </div>
              </motion.div> */}
  </div>
  )
}

export default HeroSection