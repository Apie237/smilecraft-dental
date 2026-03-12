import React from "react";
import {
  FaSmile,
  FaTooth,
  FaHandsHelping,
  FaClock,
  FaUserMd,
  FaShieldAlt,
  FaStar,
  FaHeartbeat,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSmile size={26} />,
    title: "Pain-Free Procedures",
    description: "We prioritize your comfort using the latest painless techniques.",
  },
  {
    icon: <FaTooth size={26} />,
    title: "Advanced Technology",
    description: "Modern dental equipment ensures precise and effective treatments.",
  },
  {
    icon: <FaHeartbeat size={26} />,
    title: "Comprehensive Care",
    description: "From preventive checkups to cosmetic dentistry, we cover it all.",
  },
  {
    icon: <FaHandsHelping size={26} />,
    title: "Personalized Care",
    description: "Each treatment plan is tailored to your unique dental needs.",
  },
  {
    icon: <FaClock size={26} />,
    title: "Flexible Scheduling",
    description: "We offer convenient appointment times to fit your busy lifestyle.",
  },
  {
    icon: <FaUserMd size={26} />,
    title: "Experienced Dentists",
    description: "Our team consists of certified professionals with years of expertise.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Strict Hygiene Standards",
    description: "We maintain top-tier sterilization and safety protocols.",
  },
  {
    icon: <FaStar size={26} />,
    title: "5-Star Patient Reviews",
    description: "Trusted by hundreds of happy patients who love their smiles.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* LEFT SIDE — features grid */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 relative z-10">
          <p className="text-xs uppercase tracking-[4px] text-accent mb-2">Our Strengths</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Smile Craft
          </h2>
          <div className="w-16 h-1 bg-accent mt-4 mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  {React.cloneElement(feature.icon, {
                    className: "text-accent group-hover:text-white transition-all duration-300",
                  })}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — image */}
        <div className="relative h-[420px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
            alt="Dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

      </div>

      {/* Slanted Divider */}
      <div className="hidden lg:block absolute top-0 left-[49%] h-full w-16 bg-primary transform -skew-x-2 origin-top z-10 pointer-events-none" />

    </section>
  );
};

export default WhyChooseUs;