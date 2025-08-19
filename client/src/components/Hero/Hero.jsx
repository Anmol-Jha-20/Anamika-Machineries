import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      background: "bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900",
      title: "Industrial Machinery Solutions",
      subtitle:
        "Delivering high-quality printing, binding, folding, and finishing machines to businesses across Bihar and beyond. With years of expertise and a customer-first approach, Anamika Machineries is your trusted source for reliable industrial equipment at competitive wholesale prices.",
      primaryButton: "LEARN MORE",
      secondaryButton: "CONTACT US",
      backgroundImage:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-black/50",
    },
    {
      id: 2,
      background:
        "bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900",
      title: "Advanced Printing Machines",
      subtitle:
        "Discover a wide range of advanced printing machines designed for speed, precision, and durability. At Anamika Machineries, we offer reliable and cost-effective printing solutions that meet the needs of commercial printers, packaging units, and publishing houses. Whether you're looking for offset, digital, or screen printing equipment, our machines ensure consistent quality and optimal performance—backed by expert support and trusted service since 2017.",
      primaryButton: "LEARN MORE",
      secondaryButton: "CONTACT US",
      backgroundImage:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393739791/FT/GN/JG/29805837/printing-machine-500x500.jpeg",
      overlayOpacity: "bg-black/40",
    },
    {
      id: 3,
      background:
        "bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900",
      title: "Durable Binding Machines",
      subtitle:
        "Experience seamless finishing with our range of durable and efficient binding machines. At Anamika Machineries, we supply high-quality binding equipment designed to handle diverse volumes and binding types, ensuring professional results every time. Trusted by businesses across Bihar since 2017, our machines combine precision engineering with ease of use to streamline your production process.",
      primaryButton: "LEARN MORE",
      secondaryButton: "CONTACT US",
      backgroundImage:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389414587/JL/HV/FT/29805837/brinder-trimmer-machine-500x500.jpeg",
      overlayOpacity: "bg-black/45",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.95,
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 0.8, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <motion.div
              className={`absolute inset-0 ${slides[currentSlide].overlayOpacity}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-6xl mx-auto"
            >
              {/* Company Header */}
              <motion.p
                variants={itemVariants}
                className="text-white/80 text-sm sm:text-base font-medium tracking-wide uppercase mb-4"
              >
                WELCOME TO Anamika Machineries
              </motion.p>

              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                <span className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-white/90 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={() => navigate("/about-us")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  {slides[currentSlide].primaryButton}
                </button>
                <button
                  onClick={() => (window.location.href = "tel:8051448069")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  {slides[currentSlide].secondaryButton}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={prevSlide}
              className="absolute left-0 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 sm:p-4 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              onClick={nextSlide}
              className="absolute right-0 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 sm:p-4 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-orange-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "0%" : "100%" }}
          transition={{
            duration: isHovered ? 0.3 : 5,
            ease: isHovered ? "easeOut" : "linear",
            repeat: isHovered ? 0 : Infinity,
          }}
          key={currentSlide}
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
