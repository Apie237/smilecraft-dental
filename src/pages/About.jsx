import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const sections = [
  {
    title: "About Us",
    // Dentist with patient in a warm, professional setting — Jonathan Borba
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    alt: "Dentist consulting with a patient at Smile Craft",
    imageLeft: true,
    paragraphs: [
      "Smile Craft is a modern dental clinic committed to delivering exceptional oral healthcare with compassion and precision. Our experienced professionals combine advanced technology with personalized care to ensure every patient enjoys a confident, healthy smile.",
      "We focus on comfort, innovation, and long-term dental wellness, making us a trusted choice for families and individuals seeking premium dental services.",
    ],
  },
  {
    title: "Our Vision",
    // Clean, bright modern dental operatory — Benyamin Bohlouli
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    alt: "Modern dental clinic interior representing our vision",
    imageLeft: false,
    paragraphs: [
      "Our vision is to become a leading center of excellence in dental healthcare by continuously embracing innovation, education, and patient-centered care.",
      "We aim to redefine dental experiences by making treatments more comfortable, accessible, and transformative for every patient we serve.",
    ],
  },
  {
    title: "Our Mission",
    // Dentist team working together — Caroline LM
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    alt: "Dental team committed to our mission of patient care",
    imageLeft: true,
    paragraphs: [
      "Our mission is to deliver high-quality, ethical, and patient-focused dental care using advanced technology and modern techniques.",
      "We are committed to building lasting relationships with our patients by providing honest consultations, transparent treatment plans, and outstanding clinical results.",
    ],
  },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Smile Craft"
        subtitle="Dedicated to excellence in modern dental care"
        breadcrumbs={[{ label: "About Us", href: "#" }]}
      />

      <div className="bg-neutralBg font-sans">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-16 items-center ${
              index !== sections.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Image */}
            <div className={section.imageLeft ? "order-1" : "order-1 md:order-2"}>
              <img
                src={section.image}
                alt={section.alt}
                className="rounded-2xl shadow-soft w-full object-cover h-80 md:h-96"
              />
            </div>

            {/* Text */}
            <div className={section.imageLeft ? "order-2" : "order-2 md:order-1"}>
              <p className="text-xs uppercase tracking-[4px] text-accent mb-3">
                Smile Craft
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {section.title}
              </h2>
              <div className="w-12 h-[3px] bg-accent rounded-full mb-6" />
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default About;