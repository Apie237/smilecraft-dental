import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Michael Anderson",
    role: "Lead Dentist & Implant Specialist",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Cosmetic Dentistry Expert",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Daniel Roberts",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
];

const MeetExperts = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F6F]">
            Meet Our Dental Experts
          </h2>
          <p className="text-gray-600 mt-4">
            Our experienced and compassionate dental professionals are dedicated 
            to providing world-class care with a personal touch.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#2F4F6F]">
                  {doctor.name}
                </h3>
                <p className="text-sm text-[#D4AF37] mt-2 font-medium">
                  {doctor.role}
                </p>

                {/* Gold Divider */}
                <div className="w-12 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6 text-[#2F4F6F]">
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2F4F6F] hover:text-white transition"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2F4F6F] hover:text-white transition"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2F4F6F] hover:text-white transition"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetExperts;