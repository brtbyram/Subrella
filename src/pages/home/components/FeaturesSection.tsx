import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const FeatureCard = ({ title, description, className, img }: any) => {
  return (
    <div
      className={`h-[350px] w-[350px] p-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden card rounded-3xl transition-all duration-500 ease-in-out ${className}`}
    >
      <h2>
        <div className="text-3xl">{title}</div>
      </h2>
      <div>
        <p className="text-4xl font-bold">{description}</p>
      </div>
    </div>
  );
}; 

export default function FeaturesSection() {
  useEffect(() => {
    const stackArea = document.querySelector(".stack-area");
    const cards = document.querySelectorAll(".card");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = "translateY(-120vh) rotate(-48deg)";
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          card.style.zIndex = `${cards.length - index}`;
          angle -= 10;
        }
      });
    }

    function handleScroll() {
      const distance = window.innerHeight / 2;
      const topValue = stackArea?.getBoundingClientRect().top || 0;
      let index = -1 * (topValue / distance + 1);
      index = Math.floor(index);

      cards.forEach((card, i) => {
        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      });

      rotateCards();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section className="bg-gradient-to-b from-gray-200 to-white">
      <div className="stack-area relative flex h-[100vh] w-full">
        <div className="basis-1/2 h-screen sticky top-0 left-0 flex flex-col items-start justify-center text-center md:text-start space-y-5 pl-4">
          <h2 className="text-6xl md:text-9xl">Our Features</h2>
          <p className="">
            Subrella helps you manage your subscriptions, save money, and
            achieve financial freedom. With Subrella, you can easily track all
            your subscriptions, analyze your spending habits, and make better
            financial decisions. Get started today and take control of your
            finances!
          </p>
          <Button className="max-w-max" size="xl">
            <Link to="/register">See More Details</Link>
          </Button>
        </div>
        <div className="basis-1/2 h-screen sticky top-0 flex items-center justify-center">
          <FeatureCard
            title="Save"
            description="Cancel unused subscriptions"
            className="bg-[#2563EB]"
            img="/public/features-save.png"
          />
          <FeatureCard
            title="Track"
            description="View all subscriptions clearly"
            className="bg-[#112d5d]"
            img="/public/features-track.png"
          />
          <FeatureCard
            title="Notify"
            description="Never miss payment deadlines"
            className="bg-[#3B82F6]"
            img="/public/features-notify.png"
          />
          <FeatureCard
            title="Secure"
            description="Data encrypted and secure"
            className="bg-[#1E40AF]"
            img="/public/features-secure.png"
          />
          <FeatureCard
            title="Analyze"
            description="Monitor spending trends"
            className="bg-[#F3F4F6] text-black"
            img="/public/features-analyze.png"
          />
        </div>
      </div>
    </section>
  );
}
