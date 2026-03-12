import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Smile <span className="text-accent">Craft</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Providing exceptional dental care with compassion, precision,
              and modern technology to give you the smile you deserve.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "Contact", "Book Appointment"].map((link) => (
                <li key={link} className="hover:text-accent transition cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Dental Implants", "Pediatric Dentistry"].map((service) => (
                <li key={service} className="hover:text-accent transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                123 Dental Street, City Name
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent flex-shrink-0" />
                +1 (234) 567-890
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent flex-shrink-0" />
                info@smilecraft.com
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Smile Craft. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;