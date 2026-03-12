import React from "react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or ready to book? We'd love to hear from you — reach out and our team will respond promptly."
        bgImage="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;