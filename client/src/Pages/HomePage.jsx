import React from "react";
import HeroSection from "../components/Hero/Hero.jsx";
import EnergyLandingPage from "../components/About/About.jsx";
import ProductsSection from "../components/Products/Products.jsx";
import WhyChooseUs from "../whysection/WhySection.jsx";
import ClientTestimonials from "../components/testimonials/testimonials.jsx";

function HomePage() {
  return (
    <>
      <HeroSection />
      <EnergyLandingPage />
      <ProductsSection />
      <WhyChooseUs />
      <ClientTestimonials />
    </>
  );
}

export default HomePage;
