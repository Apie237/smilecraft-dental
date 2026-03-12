import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn, FaTwitter, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaChevronLeft, FaChevronRight,
} from "react-icons/fa";
import { doctors } from "../assets/assets";

const DoctorsCarousel = ({ onBookClick }) => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = doctors.length;

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(((index % total) + total) % total);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(active + 1), 5000);
    return () => clearInterval(timer);
  }, [active]);

  const getCardStyle = (index) => {
    const offset = ((index - active) + total) % total;
    const styles = {
      0: { transform: "translateX(0px) scale(1) rotateY(0deg)",        zIndex: 10, opacity: 1,    filter: "none" },
      1: { transform: "translateX(340px) scale(0.82) rotateY(-18deg)", zIndex: 7,  opacity: 0.85, filter: "brightness(0.7)" },
      2: { transform: "translateX(550px) scale(0.65) rotateY(-28deg)", zIndex: 5,  opacity: 0.45, filter: "brightness(0.5)" },
      [total - 1]: { transform: "translateX(-340px) scale(0.82) rotateY(18deg)", zIndex: 7, opacity: 0.85, filter: "brightness(0.7)" },
      [total - 2]: { transform: "translateX(-550px) scale(0.65) rotateY(28deg)", zIndex: 5, opacity: 0.45, filter: "brightness(0.5)" },
    };
    return styles[offset] || { transform: "translateX(0px) scale(0.4)", zIndex: 1, opacity: 0, filter: "brightness(0.2)" };
  };

  const activeDoctor = doctors[active];

  return (
    <section className="bg-neutralBg py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[4px] text-accent mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Experts</h2>
          <div className="w-14 h-[3px] bg-accent rounded-full mt-4 mx-auto" />
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: "1200px", height: "660px" }}
        >
          {doctors.map((doctor, index) => {
            const style = getCardStyle(index);
            const isActive = index === active;

            return (
              <div
                key={doctor.id}
                onClick={() => !isActive && goTo(index)}
                style={{
                  position: "absolute",
                  width: "360px",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: isActive ? "default" : "pointer",
                  transformStyle: "preserve-3d",
                  ...style,
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-medium">

                  {/* Doctor image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-tight">{doctor.name}</h3>
                      <p className="text-accent text-sm font-medium">{doctor.role}</p>
                    </div>
                  </div>

                  {/* Expandable detail — only on active card */}
                  <div
                    style={{
                      maxHeight: isActive ? "180px" : "0px",
                      opacity: isActive ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {doctor.specialty}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {doctor.experience} · {doctor.education}
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                        {[
                          { icon: <FaLinkedinIn size={12} />, href: doctor.social.linkedin },
                          { icon: <FaTwitter size={12} />, href: doctor.social.twitter },
                          { icon: <FaInstagram size={12} />, href: doctor.social.instagram },
                        ].map((s, i) => (
                          <a
                            key={i}
                            href={s.href}
                            className="w-7 h-7 rounded-full bg-neutralBg flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300"
                          >
                            {s.icon}
                          </a>
                        ))}
                        <button
                          onClick={onBookClick}
                          style={{ backgroundColor: "#2F4F6F" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E2F3F")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2F4F6F")}
                          className="ml-auto text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prev / Dots / Next */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => goTo(active - 1)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="flex items-center gap-2">
            {doctors.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === active ? "#D4AF37" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Active doctor bio + contact */}
        <div
          className={`mt-10 max-w-xl mx-auto text-center transition-all duration-500 ${
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-gray-300 text-sm leading-relaxed italic">"{activeDoctor.bio}"</p>
          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-400 flex-wrap">
            <span className="flex items-center gap-1.5">
              <FaEnvelope size={11} className="text-accent" />
              {activeDoctor.contact.email}
            </span>
            <span className="text-white/20 hidden sm:block">|</span>
            <span className="flex items-center gap-1.5">
              <FaPhoneAlt size={11} className="text-accent" />
              {activeDoctor.contact.phone}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorsCarousel;