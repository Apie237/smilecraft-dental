import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaClock, FaLinkedinIn, FaTwitter, FaInstagram, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AppointmentButton from "../components/AppointmentButton";
import { services, doctors } from "../assets/assets";

const ServiceDetail = ({ onBookClick }) => {
  const { id } = useParams();

  const service = services.find((s) => s.id === id);
  const doctor = doctors.find((d) => d.specialty === service?.title);

  if (!service) {
    return (
      <>
        <Navbar onBookClick={onBookClick} />
        <div className="min-h-screen flex flex-col items-center justify-center font-sans text-primary">
          <p className="text-2xl font-bold mb-4">Service not found.</p>
          <Link to="/services" className="text-accent underline text-sm">← Back to Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar onBookClick={onBookClick} />

      {/* ── HERO ── */}
      <PageHero
        title={service.title}
        subtitle={service.description}
        image={service.image}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: "#" },
        ]}
      />

      <div className="bg-neutralBg font-sans">

        {/* ── SERVICE DETAILS + DOCTOR CARD ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Left — Image + Description (spans 2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Text details */}
              <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
                <p className="text-xs uppercase tracking-[4px] text-accent mb-3">Our Services</p>
                <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                <div className="w-12 h-[3px] bg-accent rounded-full mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description} At Smile Craft, our specialists bring years of focused expertise
                  to every procedure, ensuring outcomes that are both clinically excellent and
                  personally tailored to your needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We use only the latest technologies and materials, combining precision with
                  compassionate care so every visit is as comfortable and effective as possible.
                </p>

                <div className="mt-8">
                  <AppointmentButton
                    label="Book This Service"
                    variant="light"
                    onClick={onBookClick}
                  />
                </div>
              </div>
            </div>

            {/* Right — Doctor Card (sticky) */}
            {doctor && (
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-white rounded-2xl shadow-medium overflow-hidden">

                    {/* Doctor image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-white font-bold text-lg leading-tight">{doctor.name}</h3>
                        <p className="text-accent text-sm font-medium">{doctor.role}</p>
                      </div>
                    </div>

                    {/* Doctor details */}
                    <div className="p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {doctor.experience}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {doctor.education}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaClock size={12} className="text-accent flex-shrink-0" />
                        {doctor.availability}
                      </div>

                      <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                        <a
                          href={`tel:${doctor.contact.phone}`}
                          className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors duration-200"
                        >
                          <FaPhoneAlt size={12} className="text-accent" />
                          {doctor.contact.phone}
                        </a>
                        <a
                          href={`mailto:${doctor.contact.email}`}
                          className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors duration-200"
                        >
                          <FaEnvelope size={12} className="text-accent" />
                          {doctor.contact.email}
                        </a>
                      </div>

                      {/* Social */}
                      <div className="flex items-center gap-3 pt-1">
                        {[
                          { icon: <FaLinkedinIn size={13} />, href: doctor.social.linkedin },
                          { icon: <FaTwitter size={13} />, href: doctor.social.twitter },
                          { icon: <FaInstagram size={13} />, href: doctor.social.instagram },
                        ].map((s, i) => (
                          <a
                            key={i}
                            href={s.href}
                            className="w-8 h-8 rounded-full bg-neutralBg flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all duration-300"
                          >
                            {s.icon}
                          </a>
                        ))}
                      </div>

                      <div className="pt-2">
                        <AppointmentButton
                          label={`Book with ${doctor.name.split(" ")[1]}`}
                          variant="light"
                          onClick={onBookClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── SERVICE CATEGORIES ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[4px] text-accent mb-3">What's Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {service.title} Treatments
            </h2>
            <div className="w-14 h-[3px] bg-accent rounded-full mt-4 mb-5 mx-auto" />
            <p className="text-gray-600">
              Explore the full range of treatments available under our {service.title} service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.categories.map((cat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-medium p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-accent/20"
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                    {cat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Accent line */}
                <div className="w-8 h-[2px] bg-accent rounded-full mt-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* ── BACK TO SERVICES ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            <FaArrowLeft size={12} />
            Back to All Services
          </Link>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ServiceDetail;