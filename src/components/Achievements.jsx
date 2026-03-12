import React, { useEffect, useRef, useState } from "react";
import { FaUserMd, FaSmile, FaTrophy, FaStar, FaAward, FaHospital } from "react-icons/fa";

const stats = [
  { icon: <FaSmile size={28} />, value: 12000, suffix: "+", label: "Happy Patients" },
  { icon: <FaUserMd size={28} />, value: 6, suffix: "", label: "Expert Specialists" },
  { icon: <FaTrophy size={28} />, value: 15, suffix: "+", label: "Awards Won" },
  { icon: <FaStar size={28} />, value: 98, suffix: "%", label: "Satisfaction Rate" },
  { icon: <FaAward size={28} />, value: 20, suffix: "+", label: "Years of Excellence" },
  { icon: <FaHospital size={28} />, value: 3, suffix: "", label: "Clinic Locations" },
];

const useCountUp = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
};

const StatCard = ({ stat, animate }) => {
  const count = useCountUp(stat.value, 2000, animate);
  return (
    <div className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300">
      <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {stat.icon}
      </div>
      <div>
        <p className="text-4xl font-bold text-white">
          {count}{stat.suffix}
        </p>
        <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">{stat.label}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative font-sans overflow-hidden py-24"
      style={{ backgroundColor: "#2F4F6F" }}
    >
      {/* Decorative background circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[4px] text-accent mb-3">Our Track Record</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Achievements & Milestones
          </h2>
          <div className="w-14 h-[3px] bg-accent rounded-full mt-4 mb-5 mx-auto" />
          <p className="text-gray-400">
            Two decades of excellence, thousands of smiles, and a commitment to raising
            the bar in modern dental care.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} animate={animate} />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="text-white/60 text-sm uppercase tracking-[3px] mb-3">Our Promise</p>
          <blockquote className="text-white text-xl md:text-2xl font-semibold max-w-2xl mx-auto leading-relaxed">
            "Every smile we craft is a testament to our dedication, skill, and heart."
          </blockquote>
          <div className="w-10 h-[2px] bg-accent rounded-full mx-auto mt-6" />
        </div>

      </div>
    </section>
  );
};

export default Achievements;