import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F4F7FA] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[4px] text-[#D4AF37] mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F6F]">
            We'd Love to Hear From You
          </h2>
          <div className="w-14 h-[3px] bg-[#D4AF37] mt-4 mb-5 rounded-full mx-auto" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Have a question, need to book an appointment, or simply want to learn
            more about our services? Reach out and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT — Contact Info */}
          <div className="flex flex-col gap-6">

            {/* Info Cards */}
            {[
              {
                icon: <FaMapMarkerAlt size={20} className="text-[#D4AF37]" />,
                label: "Our Location",
                value: "123 Dental Street, City Name, Country",
              },
              {
                icon: <FaPhoneAlt size={18} className="text-[#D4AF37]" />,
                label: "Phone Number",
                value: "+1 (234) 567-890",
              },
              {
                icon: <FaEnvelope size={18} className="text-[#D4AF37]" />,
                label: "Email Address",
                value: "info@smilecraft.com",
              },
              {
                icon: <FaClock size={18} className="text-[#D4AF37]" />,
                label: "Working Hours",
                value: "Sat – Thu: 09:00am – 06:00pm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#2F4F6F] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#2F4F6F]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 mt-2">
              <iframe
                title="Smile Craft Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363!3d-37.8162797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU4LjYiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

          {/* RIGHT — Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2F4F6F] mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-widest hover:bg-[#c49b2e] transition"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#2F4F6F] mb-1">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-8">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* First Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      First Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA]"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Last Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Subject <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA]"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="billing">Billing & Insurance</option>
                      <option value="feedback">Feedback & Complaints</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Message <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F6F] transition bg-[#F4F7FA] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm py-4 hover:bg-[#c49b2e] transition-all duration-300 shadow-md"
                    >
                      Send Message
                    </button>
                  </div>

                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;