import React from "react";
import AppointmentButton from "./AppointmentButton";

const FearOfDentist = ({ onBookClick }) => {
  return (
    <section className="bg-neutralBg py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <div className="bg-white rounded-2xl shadow-medium p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[4px] text-accent mb-3">We Understand</p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Afraid of Visiting the Dentist?
            </h2>
            <div className="w-12 h-[3px] bg-accent mt-4 mb-5 rounded-full" />

            <p className="text-gray-600 leading-relaxed">
              You're not alone. Many patients feel nervous about dental visits.
              At Smile Craft, we focus on gentle, pain-free treatments and a calm
              environment to ensure you feel relaxed and cared for every step of the way.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our compassionate team listens to your concerns and explains every
              procedure clearly, so there are no surprises — just comfort and confidence.
            </p>

            {/* CTA Button */} 
            <AppointmentButton label="Book a Stress-Free Appointment"  variant="light" onClick={ onBookClick }/>
          </div>

          {/* Right Visual Element */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-40 h-40 bg-primary rounded-full flex items-center justify-center shadow-medium">
              <span className="text-white text-5xl">😊</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FearOfDentist;