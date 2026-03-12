import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[4px] text-accent mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Patients Say</h2>
          <div className="w-14 h-[3px] bg-accent mt-4 mb-5 rounded-full mx-auto" />
          <p className="text-gray-600 mt-4">
            Real stories from patients who trusted Smile Craft with their smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutralBg p-8 rounded-2xl shadow-soft hover:shadow-medium transition duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.review}"
              </p>
              <div className="w-10 h-[2px] bg-accent rounded-full mb-6" />
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-primary font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;