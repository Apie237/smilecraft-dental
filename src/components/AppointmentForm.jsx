import React from "react";
import AppointmentButton from "./AppointmentButton";

const AppointmentForm = () => {
  return (
    <section className="relative -mt-32 z-10 font-sans">

      {/* Overlapping Info Box */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="relative z-20 bg-white rounded-2xl shadow-medium p-4">

          {/* Inner Box */}
          <div className="bg-neutralBg rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

              {/* Image Section */}
              <div className="h-72 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
                  alt="Happy patient with bright smile at dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-10 md:p-14">
                <h3 className="text-2xl font-bold text-primary">
                  Comfortable, Modern Dental Care
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  At Smile Craft, we combine advanced technology with compassionate
                  care to ensure every visit is stress-free and comfortable.
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Book your appointment today and take the first step toward
                  a healthier, brighter smile.
                </p>
                <div className="w-12 h-1 bg-accent mt-6 rounded-full"></div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white pt-14 pb-16 mt-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Schedule Your Appointment
          </h2>
          <p className="text-gray-500 text-center mt-4 mb-10">
            Fill out the form below and our team will get back to you promptly.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 bg-neutralBg rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-soft"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 bg-neutralBg rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-soft"
            />
            <select
              className="border border-gray-200 bg-neutralBg rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-soft"
              defaultValue=""
            >
              <option value="" disabled>Select Service</option>
              <option value="teeth-whitening">Teeth Whitening</option>
              <option value="orthodontics">Orthodontics</option>
              <option value="dental-implants">Dental Implants</option>
              <option value="root-canal">Root Canal Treatment</option>
              <option value="checkup">Routine Checkup</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-200 bg-neutralBg rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-soft"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-200 bg-neutralBg rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-soft"
            ></textarea>
           <AppointmentButton label="Make Appointment" variant="light"  className="md:col-span-2 justify-self-center mt-4" />
          </form>

        </div>
      </div>

    </section>
  );
};

export default AppointmentForm;