import React, { useEffect } from "react";
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaTools, FaCommentAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const AppointmentSidebar = ({ isOpen, onClose }) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-primary font-sans">Make Appointment</h2>
            <div className="w-10 h-[3px] bg-accent rounded-full mt-2" />
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Name */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3 group focus-within:border-accent transition-colors duration-300">
              <FaUser className="text-accent flex-shrink-0" size={16} />
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full text-sm font-sans font-medium uppercase tracking-widest text-gray-500 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3 focus-within:border-accent transition-colors duration-300">
              <FaEnvelope className="text-accent flex-shrink-0" size={16} />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full text-sm font-sans font-medium uppercase tracking-widest text-gray-500 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3 focus-within:border-accent transition-colors duration-300">
              <FaPhone className="text-accent flex-shrink-0" size={16} />
              <input
                type="tel"
                placeholder="YOUR PHONE"
                className="w-full text-sm font-sans font-medium uppercase tracking-widest text-gray-500 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>

            {/* Service */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3 focus-within:border-accent transition-colors duration-300">
              <FaTools className="text-accent flex-shrink-0" size={16} />
              <select
                defaultValue=""
                className="w-full text-sm font-sans font-medium uppercase tracking-widest text-gray-400 bg-transparent outline-none cursor-pointer"
              >
                <option value="" disabled>SELECT YOUR SERVICE</option>
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="implants">Dental Implants</option>
                <option value="pediatric">Pediatric Dentistry</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-3 focus-within:border-accent transition-colors duration-300">
              <FaCommentAlt className="text-accent flex-shrink-0 mt-1" size={16} />
              <textarea
                placeholder="YOUR MESSAGE"
                rows={4}
                className="w-full text-sm font-sans font-medium uppercase tracking-widest text-gray-500 placeholder-gray-400 bg-transparent outline-none resize-none"
              />
            </div>

          </form>
        </div>

        {/* Submit Button */}
        <div className="px-8 py-6 border-t border-gray-100">
          <button
            type="submit"
            style={{ backgroundColor: "#2F4F6F" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E2F3F")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2F4F6F")}
            className="font-sans w-full inline-flex items-center justify-between pl-8 pr-2 py-2 rounded-full transition-all duration-300 group shadow-medium"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Book Now
            </span>
            <span className="w-10 h-10 rounded-full bg-accent group-hover:bg-accent-hover flex items-center justify-center transition-all duration-300">
              <FaChevronRight size={13} className="text-white" />
            </span>
          </button>
        </div>

      </div>
    </>
  );
};

export default AppointmentSidebar;