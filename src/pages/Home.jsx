import React, { useState } from 'react';
import App from '../App';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentSidebar from '../components/AppointmentSidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import MeetExperts from '../components/MeetExperts';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import WhatWeOffer from '../components/WhatWeOffer';

import FearOfDentist from '../components/FearOfDentist';
import WhyChooseUs from '../components/WhyChoseUs';



const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="relative">
      {/* Sidebar — at root so it overlays everything */}
      <AppointmentSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <Navbar onBookClick={openSidebar} />
      <HeroSection onBookClick={openSidebar} />
      <AppointmentForm />
      <WhyChooseUs />
      <WhatWeOffer />
      <MeetExperts />
      <FearOfDentist onBookClick={openSidebar} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;