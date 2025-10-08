// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const slides = [
//     {
//       id: 1,
//       background: "bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900",
//       title: "Industrial Machinery Solutions",
//       subtitle:
//         "Delivering high-quality printing, binding, folding, and finishing machines to businesses across Bihar and beyond. With years of expertise and a customer-first approach, Anamika Machineries is your trusted source for reliable industrial equipment at competitive wholesale prices.",
//       primaryButton: "LEARN MORE",
//       secondaryButton: "CONTACT US",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       overlayOpacity: "bg-black/50",
//     },
//     {
//       id: 2,
//       background:
//         "bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900",
//       title: "Advanced Printing Machines",
//       subtitle:
//         "Discover a wide range of advanced printing machines designed for speed, precision, and durability. At Anamika Machineries, we offer reliable and cost-effective printing solutions that meet the needs of commercial printers, packaging units, and publishing houses. Whether you're looking for offset, digital, or screen printing equipment, our machines ensure consistent quality and optimal performance—backed by expert support and trusted service since 2017.",
//       primaryButton: "LEARN MORE",
//       secondaryButton: "CONTACT US",
//       backgroundImage:
//         "https://5.imimg.com/data5/SELLER/Default/2024/2/393739791/FT/GN/JG/29805837/printing-machine-500x500.jpeg",
//       overlayOpacity: "bg-black/40",
//     },
//     {
//       id: 3,
//       background:
//         "bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900",
//       title: "Durable Binding Machines",
//       subtitle:
//         "Experience seamless finishing with our range of durable and efficient binding machines. At Anamika Machineries, we supply high-quality binding equipment designed to handle diverse volumes and binding types, ensuring professional results every time. Trusted by businesses across Bihar since 2017, our machines combine precision engineering with ease of use to streamline your production process.",
//       primaryButton: "LEARN MORE",
//       secondaryButton: "CONTACT US",
//       backgroundImage:
//         "https://5.imimg.com/data5/SELLER/Default/2024/2/389414587/JL/HV/FT/29805837/brinder-trimmer-machine-500x500.jpeg",
//       overlayOpacity: "bg-black/45",
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const slideVariants = {
//     enter: {
//       opacity: 0,
//       scale: 1.1,
//     },
//     center: {
//       zIndex: 1,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: {
//       zIndex: 0,
//       opacity: 0,
//       scale: 0.95,
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: 0.3,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4 },
//     },
//   };

//   return (
//     <div
//       className="relative h-screen w-full overflow-hidden bg-gray-100"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={currentSlide}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             opacity: { duration: 0.8, ease: "easeInOut" },
//             scale: { duration: 0.8, ease: "easeInOut" },
//           }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <motion.div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
//             }}
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 8, ease: "easeOut" }}
//           >
//             <motion.div
//               className={`absolute inset-0 ${slides[currentSlide].overlayOpacity}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             ></motion.div>
//           </motion.div>

//           {/* Content */}
//           <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
//             <motion.div
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-center max-w-6xl mx-auto"
//             >
//               {/* Company Header */}
//               <motion.p
//                 variants={itemVariants}
//                 className="text-white/80 text-sm sm:text-base font-medium tracking-wide uppercase mb-4"
//               >
//                 WELCOME TO Anamika Machineries
//               </motion.p>

//               {/* Main Title */}
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//               >
//                 <span className="border-l-4 border-orange-500 pl-4 sm:pl-6">
//                   {slides[currentSlide].title}
//                 </span>
//               </motion.h1>

//               {/* Subtitle */}
//               <motion.p
//                 variants={itemVariants}
//                 className="text-white/90 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.p>

//               {/* Buttons */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <button
//                   onClick={() => navigate("/about-us")}
//                   className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
//                 >
//                   {slides[currentSlide].primaryButton}
//                 </button>
//                 <button
//                   onClick={() => (window.location.href = "tel:8051448069")}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
//                 >
//                   {slides[currentSlide].secondaryButton}
//                 </button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <AnimatePresence>
//         {isHovered && (
//           <>
//             <motion.button
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.3 }}
//               onClick={prevSlide}
//               className="absolute left-0 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 sm:p-4 transition-all duration-300"
//             >
//               <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </motion.button>

//             <motion.button
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.3 }}
//               onClick={nextSlide}
//               className="absolute right-0 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 sm:p-4 transition-all duration-300"
//             >
//               <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </motion.button>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "bg-orange-500 scale-125"
//                 : "bg-white/50 hover:bg-white/75"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Progress Bar */}
//       {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
//         <motion.div
//           className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
//           initial={{ width: "0%" }}
//           animate={{ width: isHovered ? "0%" : "100%" }}
//           transition={{
//             duration: isHovered ? 0.3 : 5,
//             ease: isHovered ? "easeOut" : "linear",
//             repeat: isHovered ? 0 : Infinity,
//           }}
//           key={currentSlide}
//         />
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const navigate = useNavigate();

//   const slides = [
//     {
//       id: 1,
//       title: "Machinery Solutions",
//       tagline: "Premium Quality. Trusted Performance.",
//       primaryButton: "EXPLORE MORE",
//       secondaryButton: "CONTACT US",
//       gradientOverlay: "from-slate-900/60 via-blue-900/50 to-transparent",
//     },
//     {
//       id: 2,
//       title: "Printing Machines",
//       tagline: "Speed. Precision. Reliability.",
//       primaryButton: "EXPLORE MORE",
//       secondaryButton: "CONTACT US",
//       gradientOverlay: "from-emerald-900/60 via-teal-900/50 to-transparent",
//     },
//     {
//       id: 3,
//       title: "Binding Machines",
//       tagline: "Professional Results. Every Time.",
//       primaryButton: "EXPLORE MORE",
//       secondaryButton: "CONTACT US",
//       gradientOverlay: "from-purple-900/60 via-indigo-900/50 to-transparent",
//     },
//   ];

//   // Split text into characters for animation
//   const splitText = (text) => {
//     return text.split("").map((char, index) => ({
//       char: char === " " ? "\u00A0" : char,
//       index,
//     }));
//   };

//   // Split text into words
//   const splitWords = (text) => {
//     return text.split(" ");
//   };

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 6000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const toggleVideo = () => {
//     const video = document.getElementById("heroVideo");
//     if (video) {
//       if (isVideoPlaying) {
//         video.pause();
//       } else {
//         video.play();
//       }
//       setIsVideoPlaying(!isVideoPlaying);
//     }
//   };

//   // Animation variants for glassmorphic container
//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.43, 0.13, 0.23, 0.96],
//         staggerChildren: 0.2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.5 },
//     },
//   };

//   // Character animation variants
//   const charVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       rotateX: -90,
//     },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: {
//         duration: 0.5,
//         delay: i * 0.03,
//         ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     }),
//   };

//   // Word animation variants
//   const wordVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: i * 0.1,
//         ease: "easeOut",
//       },
//     }),
//   };

//   // Button animation
//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: 1.2 + i * 0.15,
//         ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     }),
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
//       transition: {
//         duration: 0.3,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   return (
//     <div
//       className="relative h-screen w-full overflow-hidden bg-gray-900"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Video Background with Ken Burns effect */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 10, ease: "easeOut" }}
//         className="absolute inset-0 w-full h-full"
//       >
//         <video
//           id="heroVideo"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source
//             src="https://cdn.pixabay.com/video/2022/11/06/137902-767780878_large.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* Animated Gradient Overlay */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradientOverlay}`}
//           />
//         </AnimatePresence>

//         {/* Dark overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Animated noise/grain overlay */}
//         <motion.div
//           animate={{
//             opacity: [0.03, 0.05, 0.03],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
//           }}
//         />
//       </motion.div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="w-full max-w-5xl"
//           >
//             {/* Glassmorphic Content Container */}
//             <motion.div className="relative rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
//               {/* Decorative corner elements */}
//               {/* <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-400/50 rounded-tl-3xl" />
//               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400/50 rounded-br-3xl" /> */}

//               {/* Welcome Badge with animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="md:hidden lg:hidden xl:hidden flex justify-center items-center mb-6"
//               >
//                 <motion.div
//                   className="inline-flex items-center gap-2 px-4 py-2 sm:py-3
//                            bg-gradient-to-r from-orange-500/20 to-amber-500/20
//                            backdrop-blur-xl border border-orange-400/30 rounded-full"
//                   animate={{
//                     boxShadow: [
//                       "0 0 20px rgba(251,146,60,0.3)",
//                       "0 0 30px rgba(251,146,60,0.5)",
//                       "0 0 20px rgba(251,146,60,0.3)",
//                     ],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       opacity: [0.5, 1, 0.5],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="w-2 h-2 bg-orange-400 rounded-full"
//                   />
//                   <span className="text-orange-200 text-xs font-semibold tracking-wider whitespace-nowrap">
//                     Welcome to Anamika Machineries
//                   </span>
//                 </motion.div>
//               </motion.div>

//               {/* Animated Main Title with character split */}
//               <div className="mb-4 sm:mb-6 overflow-hidden">
//                 <h1
//                   className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl
//                              font-bold text-white text-center leading-tight
//                              drop-shadow-2xl"
//                   style={{ perspective: "1000px" }}
//                 >
//                   {splitText(slides[currentSlide].title).map((item, index) => (
//                     <motion.span
//                       key={index}
//                       custom={index}
//                       variants={charVariants}
//                       initial="hidden"
//                       animate="visible"
//                       className="inline-block"
//                       style={{
//                         textShadow:
//                           "0 0 40px rgba(0,0,0,0.8), 0 5px 20px rgba(0,0,0,0.5)",
//                       }}
//                     >
//                       {item.char}
//                     </motion.span>
//                   ))}
//                 </h1>
//               </div>

//               {/* Animated Tagline with word split */}
//               <div className="mb-8 sm:mb-12 overflow-hidden">
//                 <p
//                   className="text-lg sm:text-xl md:text-2xl lg:text-3xl
//                             text-white/90 text-center font-light tracking-wide"
//                 >
//                   {splitWords(slides[currentSlide].tagline).map(
//                     (word, index) => (
//                       <motion.span
//                         key={index}
//                         custom={index}
//                         variants={wordVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className="inline-block mr-2 sm:mr-3"
//                         style={{
//                           textShadow: "0 2px 20px rgba(0,0,0,0.7)",
//                         }}
//                       >
//                         {word}
//                       </motion.span>
//                     )
//                   )}
//                 </p>
//               </div>

//               {/* Divider with animation */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500
//                          mx-auto mb-8 sm:mb-12 rounded-full"
//               />

//               {/* Animated Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
//                 <motion.button
//                   custom={0}
//                   variants={buttonVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   whileTap="tap"
//                   onClick={() => navigate("/about-us")}
//                   className="relative group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5
//                            bg-gradient-to-r from-orange-500 to-amber-600
//                            text-white font-bold text-sm sm:text-base
//                            rounded-xl sm:rounded-2xl overflow-hidden
//                            shadow-lg shadow-orange-500/50
//                            transition-all duration-300"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: "100%" }}
//                     transition={{ duration: 0.6 }}
//                   />
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     {slides[currentSlide].primaryButton}
//                     <motion.span
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       →
//                     </motion.span>
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   custom={1}
//                   variants={buttonVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   whileTap="tap"
//                   onClick={() => (window.location.href = "tel:8051448069")}
//                   className="relative group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5
//                            backdrop-blur-xl bg-white/10
//                            border-2 border-white/30
//                            text-white font-bold text-sm sm:text-base
//                            rounded-xl sm:rounded-2xl overflow-hidden
//                            hover:bg-white/20 hover:border-white/50
//                            shadow-lg shadow-black/30
//                            transition-all duration-300"
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     📞 {slides[currentSlide].secondaryButton}
//                   </span>
//                 </motion.button>
//               </div>

//               {/* Feature highlights */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.8, duration: 0.8 }}
//                 className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm"
//               >
//                 {[
//                   "Premium Quality",
//                   "Expert Support",
//                   "Competitive Prices",
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.1, color: "#ffffff" }}
//                     className="flex items-center gap-2 cursor-default"
//                   >
//                     <motion.div
//                       animate={{
//                         scale: [1, 1.2, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: index * 0.3,
//                       }}
//                       className="w-1.5 h-1.5 bg-orange-400 rounded-full"
//                     />
//                     <span>{feature}</span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Arrows */}
//       <AnimatePresence>
//         {isHovered && (
//           <>
//             <motion.button
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               whileHover={{ scale: 1.1, x: -5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20
//                        bg-white/10 backdrop-blur-xl hover:bg-white/20
//                        border border-white/20 rounded-full p-3 sm:p-4
//                        transition-all duration-300 group"
//             >
//               <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </motion.button>

//             <motion.button
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               whileHover={{ scale: 1.1, x: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20
//                        bg-white/10 backdrop-blur-xl hover:bg-white/20
//                        border border-white/20 rounded-full p-3 sm:p-4
//                        transition-all duration-300 group"
//             >
//               <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </motion.button>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Video Control */}
//       {/* <motion.button
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 2, duration: 0.5 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={toggleVideo}
//         className="absolute bottom-24 sm:bottom-20 right-4 sm:right-8 z-20
//                  bg-white/10 backdrop-blur-xl hover:bg-white/20
//                  border border-white/20 rounded-full p-3 sm:p-4
//                  transition-all duration-300"
//       >
//         {isVideoPlaying ? (
//           <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//         ) : (
//           <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" />
//         )}
//       </motion.button> */}

//       {/* Slide Indicators */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2, duration: 0.5 }}
//         className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20
//                  flex gap-3 backdrop-blur-xl bg-white/5 px-4 py-3 rounded-full border border-white/10"
//       >
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             whileHover={{ scale: 1.3 }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <motion.div
//               animate={{
//                 scale: currentSlide === index ? 1.2 : 1,
//                 backgroundColor:
//                   currentSlide === index
//                     ? "rgb(249, 115, 22)"
//                     : "rgba(255, 255, 255, 0.4)",
//               }}
//               transition={{ duration: 0.3 }}
//               className="w-2.5 h-2.5 rounded-full"
//             />
//             {currentSlide === index && (
//               <motion.div
//                 layoutId="activeIndicator"
//                 className="absolute inset-0 rounded-full ring-2 ring-orange-400/50 ring-offset-2 ring-offset-transparent"
//                 transition={{ duration: 0.3 }}
//               />
//             )}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Progress Bar */}
//       {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
//         <motion.div
//           className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600"
//           initial={{ width: "0%" }}
//           animate={{ width: isHovered ? "0%" : "100%" }}
//           transition={{
//             duration: isHovered ? 0.3 : 6,
//             ease: isHovered ? "easeOut" : "linear",
//           }}
//           key={currentSlide}
//         />
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeidelbergSM1028P2004Two from "../../assets/EightColorMachineImage/HeidelbergSM1028P2004Two.jpeg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Machinery Solutions",
      tagline: "Premium Quality. Trusted Performance.",
      primaryButton: "EXPLORE MORE",
      secondaryButton: "CONTACT US",
      image:
        "https://www.lokeshmachines.com/images/56fd5ac1e933da5c0c3dae7ac938fdc7.jpg",
      gradientOverlay: "from-slate-900/70 via-blue-900/60 to-transparent",
    },
    {
      id: 2,
      title: "Printing Machines",
      tagline: "Speed. Precision. Reliability.",
      primaryButton: "EXPLORE MORE",
      secondaryButton: "CONTACT US",
      image: HeidelbergSM1028P2004Two,
      gradientOverlay: "from-emerald-900/70 via-teal-900/60 to-transparent",
    },
    {
      id: 3,
      title: "Binding Machines",
      tagline: "Professional Results. Every Time.",
      primaryButton: "EXPLORE MORE",
      secondaryButton: "CONTACT US",
      image: "BindingMachine.png",
      gradientOverlay: "from-purple-900/70 via-indigo-900/60 to-transparent",
    },
  ];

  // Video end handler
  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Image animation start hogi
    setTimeout(() => setShowImage(true), 300);
    // Content animation start hogi
    setTimeout(() => setShowContent(true), 1200);
  };

  // Split text for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => ({
      char: char === " " ? "\u00A0" : char,
      index,
    }));
  };

  const splitWords = (text) => {
    return text.split(" ");
  };

  useEffect(() => {
    if (!isHovered && videoEnded) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, videoEnded, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Image animation variants
  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateY: -30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Character animation
  const charVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -90,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.04,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  // Word animation
  const wordVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 1.5 + i * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 25px 70px rgba(0, 0, 0, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Feature animation
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2 + i * 0.15,
      },
    }),
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background - without loop */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full z-10"
          >
            <video
              id="heroVideo"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://cdn.pixabay.com/video/2022/11/06/137902-767780878_large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Image Background - after video ends */}
      <AnimatePresence mode="wait">
        {videoEnded && showImage && (
          <motion.div
            key={currentSlide}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            style={{ perspective: "1000px" }}
          >
            {/* Main Image */}
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />

            {/* Animated Gradient Overlay */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradientOverlay}`}
            /> */}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Animated grain overlay */}
            <motion.div
              animate={{
                opacity: [0.03, 0.06, 0.03],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
              }}
            />

            {/* Decorative animated circles */}
            {/* <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
            /> */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - only after video ends */}
      <AnimatePresence mode="wait">
        {videoEnded && showContent && (
          <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
              className="w-full max-w-5xl"
            >
              <motion.div className="relative rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
                {/* Welcome Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="md:hidden lg:hidden xl:hidden flex justify-center items-center mb-6"
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 sm:py-3 
                         bg-gradient-to-r from-orange-500/20 to-amber-500/20 
                         backdrop-blur-xl border border-orange-400/30 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(251,146,60,0.3)",
                        "0 0 35px rgba(251,146,60,0.6)",
                        "0 0 20px rgba(251,146,60,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-2 h-2 bg-orange-400 rounded-full"
                    />
                    <span className="text-orange-200 text-xs font-semibold tracking-wider whitespace-nowrap">
                      Welcome to Anamika Machineries
                    </span>
                  </motion.div>
                </motion.div>

                {/* Animated Title */}
                <div className="mb-4 sm:mb-6 overflow-hidden">
                  <h1
                    className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl 
                         font-bold text-white text-center leading-tight"
                    style={{ perspective: "1000px" }}
                  >
                    {splitText(slides[currentSlide].title).map(
                      (item, index) => (
                        <motion.span
                          key={index}
                          custom={index}
                          variants={charVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                          style={{
                            textShadow:
                              "0 0 50px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.6)",
                          }}
                        >
                          {item.char}
                        </motion.span>
                      )
                    )}
                  </h1>
                </div>

                {/* Animated Tagline */}
                <div className="mb-8 sm:mb-12 overflow-hidden">
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl 
                        text-white/90 text-center font-light tracking-wide"
                  >
                    {splitWords(slides[currentSlide].tagline).map(
                      (word, index) => (
                        <motion.span
                          key={index}
                          custom={index}
                          variants={wordVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block mr-2 sm:mr-3"
                          style={{
                            textShadow: "0 4px 25px rgba(0,0,0,0.8)",
                          }}
                        >
                          {word}
                        </motion.span>
                      )
                    )}
                  </p>
                </div>

                {/* Animated Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 
                     mx-auto mb-8 sm:mb-12 rounded-full relative"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                  />
                </motion.div>

                {/* Animated Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <motion.button
                    custom={0}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      navigate("/about-us");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="relative group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 
                       bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 
                       text-white font-bold text-sm cursor-pointer sm:text-base
                       rounded-xl sm:rounded-2xl overflow-hidden
                       shadow-2xl shadow-orange-500/50"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {slides[currentSlide].primaryButton}
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>

                  <motion.button
                    custom={1}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => (window.location.href = "tel:8051448069")}
                    className="relative group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 
                       backdrop-blur-xl bg-white/10 
                       border-2 border-white/30
                       text-white font-bold text-sm sm:text-base
                       rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden
                       hover:bg-white/20 hover:border-white/50
                       shadow-2xl shadow-black/40"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📞 {slides[currentSlide].secondaryButton}
                    </span>
                  </motion.button>
                </div>

                {/* Feature Highlights */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm"
                >
                  {[
                    "Premium Quality",
                    "Expert Support",
                    "Competitive Prices",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={featureVariants}
                      whileHover={{ scale: 1.15, color: "#ffffff" }}
                      className="flex items-center gap-2 cursor-default"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            "0 0 0px rgba(251,146,60,0.5)",
                            "0 0 15px rgba(251,146,60,0.8)",
                            "0 0 0px rgba(251,146,60,0.5)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="w-1.5 h-1.5 bg-orange-400 rounded-full"
                      />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows - only after video */}
      <AnimatePresence>
        {isHovered && videoEnded && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              whileHover={{ scale: 1.15, x: -8 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 
                   bg-white/10 backdrop-blur-xl hover:bg-white/20 
                   border border-white/20 rounded-full p-3 sm:p-4 
                   transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.15, x: 8 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 
                   bg-white/10 backdrop-blur-xl hover:bg-white/20 
                   border border-white/20 rounded-full p-3 sm:p-4 
                   transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Slide Indicators - only after video */}
      {videoEnded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 
             flex gap-3 backdrop-blur-xl bg-white/5 px-5 py-3 rounded-full border border-white/10 shadow-xl"
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: currentSlide === index ? 1.2 : 1,
                  backgroundColor:
                    currentSlide === index
                      ? "rgb(249, 115, 22)"
                      : "rgba(255, 255, 255, 0.4)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-2.5 h-2.5 rounded-full"
              />
              {currentSlide === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full ring-2 ring-orange-400/60 ring-offset-2 ring-offset-transparent"
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
