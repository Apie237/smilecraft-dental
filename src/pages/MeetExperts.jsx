import React from 'react'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import DoctorsCarousel from '../components/DoctorCarousel'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'

const MeetExperts = ({ openSidebar }) => {
  return (
    <div>
      <Navbar onBookClick={openSidebar} />
      <PageHero
        title="Meet Our Experts"
        subtitle="Skilled, compassionate specialists dedicated to your smile."
        breadcrumbs={[{ label: "Meet Our Experts", href: "/experts" }]}
      />
      <DoctorsCarousel onBookClick={openSidebar} />
      <Achievements />
      <Footer />
    </div>
  )
}

export default MeetExperts