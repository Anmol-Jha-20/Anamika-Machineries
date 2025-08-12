import { useState } from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/Hero/Hero.jsx";
import EnergyLandingPage from "./components/About/About.jsx";
import ProductsSection from "./components/Products/Products.jsx";
import WhyChooseUs from "./whysection/WhySection.jsx";
import Footer from "./components/footer/Footer.jsx";
import ClientTestimonials from "./components/testimonials/testimonials.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <EnergyLandingPage />
      <ProductsSection />
      <WhyChooseUs />
      <ClientTestimonials />
      <Footer />
    </>
  );
}

export default App;
