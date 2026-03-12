import React from "react";
import { services } from "../assets/assets";

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[4px] text-accent mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What We Offer</h2>
          <div className="w-14 h-[3px] bg-accent mt-4 mb-5 rounded-full mx-auto" />
          <p className="text-gray-600">
            At Smile Craft, we provide a full range of modern dental services
            designed to give you a healthy, confident smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-medium transition duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-dark transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <div className="w-10 h-1 bg-accent mt-6 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;