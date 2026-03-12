import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AppointmentButton from "./AppointmentButton";

const slides = [
  {
    image:
      "https://preview.redd.it/dental-clinic-interior-design-latest-interiors-v0-niaih3ygq4da1.jpg?width=3000&format=pjpg&auto=webp&s=080c992b8d88f4a91f518de53f1533c01f599209",
    heading: (
      <>
        Crafting Confident{" "}
        <span className="text-accent relative inline-block">
          Smiles
          <span className="absolute left-0 bottom-0 w-full h-1 bg-white/60"></span>
        </span>{" "}
        with Precision & Care
      </>
    ),
    subtext:
      "At Smile Craft, we combine advanced dental technology with compassionate care to deliver healthy, radiant smiles that last a lifetime.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80",
    heading: (
      <>
        Your{" "}
        <span className="text-accent relative inline-block">
          Healthiest Smile
          <span className="absolute left-0 bottom-0 w-full h-1 bg-white/60"></span>
        </span>{" "}
        Starts Here
      </>
    ),
    subtext:
      "From routine checkups to full smile transformations — our expert team is here to guide you every step of the way.",
  },
];

const socialLinks = [
  { icon: <FaFacebookF size={14} />, href: "#" },
  { icon: <FaInstagram size={14} />, href: "#" },
  { icon: <FaTwitter size={14} />, href: "#" },
  { icon: <FaLinkedinIn size={14} />, href: "#" },
];

const HeroSection = ({ onBookClick }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  };

  return (
    <section className="relative min-h-[120vh] flex items-end pb-48 overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-10">
        <div
          className={`max-w-xl transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
            {slides[current].heading}
          </h1>

          <p className="font-sans mt-5 text-base md:text-lg text-gray-300 drop-shadow">
            {slides[current].subtext}
          </p>

          <div className="mt-8">
            <AppointmentButton label="Make Appointment"  className="md:col-span-2 justify-self-center mt-4" onClick={onBookClick}/>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="absolute bottom-6 right-16 z-20 flex items-center gap-2">
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="group flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-300 font-sans"
        >
          <span className="w-8 h-px bg-white/40 group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
          <span className="text-xs uppercase tracking-widest">Prev</span>
        </button>
        <span className="text-white/30 mx-1">|</span>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="group flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-300 font-sans"
        >
          <span className="text-xs uppercase tracking-widest">Next</span>
          <span className="w-8 h-px bg-white/40 group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
        </button>
      </div>

      {/* Social Media strip */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1">
        <div className="w-px h-16 bg-white/20" />
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-accent hover:bg-white/10 transition-all duration-300 my-1"
          >
            {s.icon}
          </a>
        ))}
        <div className="w-px h-16 bg-white/20" />
      </div>

    </section>
  );
};

export default HeroSection;