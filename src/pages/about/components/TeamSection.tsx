import React from "react";
import { NavLink } from "react-router";

function TeamSection() {
  const TeamMember = ({ name, role, image, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl border-2 flex flex-col items-center text-center transition-all hover:shadow-xl">
        <img
          src={image}
          alt={name}
          className="h-60 w-full object-cover rounded-t-2xl p-1"
        />
        <div className="p-5 text-start h-64">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">{name} </h3>
            <NavLink to="/#" className="text-[#112d5d]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"></path>
              </svg>
            </NavLink>
          </div>

          <p className="text-[#112d5d]">{role}</p>
          <p className="text-gray-500 mt-2 text-start">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Leadership Team
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the passionate individuals driving our mission forward.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          <TeamMember
            name="Berat Murathan Bayram"
            role="Co-Founder"
            image="public/IMG_20190507_232453_781.jpg"
            description="Experienced entrepreneur with a passion for innovation and a strong background in subscription-based business models and technology."   

          />
          <TeamMember
            name="Sarah Johnson"
            role="CEO & Co-founder"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
            description="Visionary leader with a track record of building successful startups and a passion for customer-centric solutions in the subscription industry."
          />
          <TeamMember
            name="Michael Chen"
            role="CTO"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
            description="Tech enthusiast and expert in subscription technology, dedicated to building scalable and secure platforms. Specializes in cloud computing and data security."
          />
          <TeamMember
            name="Emily Rodriguez"
            role="Head of Product"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
            description="Product management professional with a focus on user experience and a passion for creating innovative subscription solutions. Passionate about user experience and product innovation."
          />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
