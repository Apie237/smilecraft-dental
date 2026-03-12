import React from "react";
import { FaChevronRight } from "react-icons/fa";

/**
 * AppointmentButton
 *
 * Props:
 *  - label    {string}            Button text. Defaults to "Make Appointment"
 *  - onClick  {function}          Click handler
 *  - variant  {"dark" | "light"}  "dark" for hero/dark backgrounds, "light" for white/light backgrounds
 */
const AppointmentButton = ({ label = "Make Appointment", onClick, variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <button
      onClick={onClick}
      style={!isDark ? { backgroundColor: "#2F4F6F", borderColor: "#2F4F6F" } : {}}
      onMouseEnter={!isDark ? (e) => (e.currentTarget.style.backgroundColor = "#1E2F3F") : undefined}
      onMouseLeave={!isDark ? (e) => (e.currentTarget.style.backgroundColor = "#2F4F6F") : undefined}
      className={`font-sans inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full border transition-all duration-300 group
        ${isDark
          ? "border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
          : "shadow-soft hover:shadow-medium"
        }`}
    >
      {/* Label */}
      <span className="text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300">
        {label}
      </span>

      {/* Arrow Circle */}
      <span className="w-8 h-8 rounded-full bg-accent group-hover:bg-accent-hover flex items-center justify-center transition-all duration-300 flex-shrink-0">
        <FaChevronRight size={12} className="text-white" />
      </span>
    </button>
  );
};

export default AppointmentButton;