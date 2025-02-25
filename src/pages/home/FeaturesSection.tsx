import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";

const FeatureCard = ({ title, description, className }: any) => {
  return (
    <Card
      className={`h-[350px] w-[350px] text-white absolute card rounded-3xl transition-all duration-500 ease-in-out shadow-xl ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{description}</p>
      </CardContent>
    </Card>
  );
};

export default function FeaturesSection() {
  const stackArea = document.querySelector(".stack-area");
  const cards = document.querySelectorAll(".card");

  function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
      if (card.classList.contains("away")) {
        card.style.transform = "translateY(-120vh) rotate(-48deg)";
      } else {
        card.style.transform = `rotate(${angle}deg)`;
        card.style.zIndex = cards.length - index;
        angle -= 10;
      }
    });
  }

  console.log(window.innerHeight);

  window.addEventListener("scroll", () => {
    const distance = window.innerHeight / 2; // bu yükseklik değeri değişebilir isteğinize göre ayarlayabilirsiniz
    const topValue = stackArea.getBoundingClientRect().top; // stack-area elementinin top değeri alınıyor
    console.log(topValue);
    let index = -1 * (topValue / distance + 1); // index değeri hesaplanıyor ve negatif değer alınıyor 
    index = Math.floor(index);
    for (let i = 0; i < cards.length; i++) {
      if (i <= index) {
        cards[i].classList.add("away");
      } else {
        cards[i].classList.remove("away");
      }
    }
    rotateCards();
  });

  return (
    <section className="flex items-start md:h-[310vh] container mx-auto stack-area">
      <div className="basis-1/2 h-screen flex flex-col justify-center space-y-5 sticky top-0">
        <h2 className="text-9xl">Our Features</h2>
        <p>
          Subrella helps you manage your subscriptions, save money, and achieve
          financial freedom. With Subrella, you can easily track all your
          subscriptions, analyze your spending habits, and make better financial
          decisions. Get started today and take control of your finances!
        </p>
        <Button className="max-w-max" size="xl">
          <Link to="/register">See More Details</Link>
        </Button>
      </div>
      <div className="basis-1/2 h-screen flex items-center justify-center sticky top-0 scale-110">
        <FeatureCard
          title="Save"
          description="Cancel unused subscriptions"
          className="bg-[#2563EB]"
        />
        <FeatureCard
          title="Track"
          description="View all subscriptions clearly"
          className="bg-[#112d5d]"
        />
        <FeatureCard
          title="Notify"
          description="Never miss payment deadlines"
          className="bg-[#3B82F6]"
        />
        <FeatureCard
          title="Secure"
          description="Data encrypted and secure"
          className="bg-[#1E40AF]"
        />
        <FeatureCard
          title="Analyze"
          description="Monitor spending trends"
          className="bg-[#F3F4F6] text-black"
        />
      </div>
      {/* Features Section */}
      {/* <section id="özellikler" className="pb-10 lg:pt-10">
          <div className="container mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Subrella?
            </motion.h2>
            <div className="space-y-4">
              <FeatureCard
                href="save-money"
                img="/public/save-money.png"
                icon={DollarSign}
                title="Save Money"
                className="sticky top-20"
                description="Easily identify and cancel subscriptions you no longer use or need. Subrella helps you avoid unnecessary expenses by keeping track of all your active subscriptions in one place. Stop wasting money on forgotten services and take control of your budget with just a few taps."
              />

              <FeatureCard
                href="analyze-spending"
                img="/public/analyze-spending.png"
                className="sticky top-40"
                icon={PieChart}
                title="Analyze Spending"
                description="Gain insights into your spending habits and make smarter financial decisions. Subrella provides a clear overview of your subscription costs, helping you see where your money goes each month. Track trends, set budgets, and optimize your expenses to achieve your financial goals."
              />

              <FeatureCard
                href="get-notified"
                img="/public/get-notified.png"
                className="sticky top-60"
                icon={Bell}
                title="Get Notified"
                description="Never miss a payment again! Subrella sends timely reminders for upcoming subscription renewals, free trial expirations, and due dates. Stay informed and avoid unexpected charges by managing your subscriptions proactively."
              />

              <FeatureCard
                href="secure-data"
                img="/public/secure-data.png"
                className="sticky top-80"
                icon={Shield}
                title="Secure Data"
                description="Your privacy and security are our top priorities. With Subrella, your data is encrypted and securely stored, ensuring that only you have access to your financial information. We use industry-leading security measures to keep your personal details safe and protected at all times."
              />
            </div>
          </div>
        </section> */}
    </section>
  );
}
