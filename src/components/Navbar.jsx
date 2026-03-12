import React, { useState, useEffect, useRef } from "react";
import { FaTooth, FaPhoneAlt, FaEnvelope, FaClock, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import AppointmentButton from "./AppointmentButton";
import { services } from "../assets/assets";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/services",
    dropdown: services.map((s) => ({
      label: s.title,
      path: `/services/${s.id}`,
    })),
  },
  { label: "Meet Our Experts", path: "/experts" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 font-sans">

      {/* Top Info Bar */}
      <div className="bg-primary-dark border-b border-white/10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2.5">

          <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <FaClock size={13} className="text-accent" />
              Opening: Sat – Thu 09:00am – 06:00pm
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope size={13} className="text-accent" />
              info@smilecraft.com
            </span>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <span className="hidden sm:flex items-center gap-2 text-gray-300 text-sm">
              <FaPhoneAlt size={12} className="text-accent" />
              Call Us: +1 (234) 567-890
            </span>
            <AppointmentButton label="Make Appointment" onClick={onBookClick} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-soft py-3"
            : "bg-primary-dark/70 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-soft">
              <FaTooth size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-bold text-white tracking-wide">
                Smile <span className="text-accent">Craft</span>
              </span>
              <span className="block text-[11px] text-gray-400 tracking-widest uppercase">
                Dental Services
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                // Services dropdown
                <li key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`flex items-center gap-1.5 text-base font-medium transition-colors duration-200 relative group ${
                      servicesOpen ? "text-accent" : "text-gray-200 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <FaChevronDown
                      size={11}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
                  </button>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl shadow-medium overflow-hidden transition-all duration-300 origin-top z-50 ${
                      servicesOpen
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    }`}
                  >
                    {/* Arrow tip */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-sm" />

                    <div className="relative py-2">
                      {link.dropdown.map((item, i) => (
                        <NavLink
                          key={i}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors duration-200 group ${
                              isActive
                                ? "text-accent bg-accent/5"
                                : "text-gray-600 hover:text-accent hover:bg-neutralBg"
                            }`
                          }
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          {item.label}
                        </NavLink>
                      ))}

                      {/* View all link */}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <NavLink
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-accent hover:bg-accent/5 transition-colors duration-200"
                        >
                          View All Services
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                // Regular link
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors duration-200 relative group ${
                        isActive ? "text-accent" : "text-gray-200 hover:text-accent"
                      }`
                    }
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-primary-dark/95 backdrop-blur-md`}
        >
          <ul className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  {/* Mobile Services toggle */}
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-200 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                    <FaChevronDown
                      size={11}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile dropdown items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pl-4 flex flex-col gap-1 pb-2">
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <NavLink
                            to={item.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={({ isActive }) =>
                              `flex items-center gap-2 py-2 text-sm font-medium transition-colors duration-200 ${
                                isActive ? "text-accent" : "text-gray-400 hover:text-accent"
                              }`
                            }
                          >
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-base font-medium transition-colors duration-200 border-b border-white/5 ${
                        isActive ? "text-accent" : "text-gray-200 hover:text-accent"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}

            <li className="pt-4">
              <AppointmentButton
                label="Make Appointment"
                onClick={() => {
                  setMenuOpen(false);
                  onBookClick();
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;