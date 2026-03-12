import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MeetExperts from "./pages/MeetExperts";
import ServiceDetail from "./pages/ServiceDetail";
import { Route, Routes } from "react-router-dom";
import AppointmentSidebar from "./components/AppointmentSidebar";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <div>
            {/* Sidebar — at root so it overlays everything */}
      <AppointmentSidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <Navbar onBookClick={openSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experts" element={<MeetExperts />} />
        <Route path="/services/:id" element={<ServiceDetail onBookClick={openSidebar} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
      
    
  );
}

export default App;