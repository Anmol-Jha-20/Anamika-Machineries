import React, { useState, useEffect } from "react";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Zap,
  Award,
  Shield,
  Truck,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import KOMORI226ImageOne from "../../../../assets/Komori226/KOMORI226ImageOne.jpeg";
import KOMORI226ImageTwo from "../../../../assets/Komori226/KOMORI226ImageTwo.jpeg";
import KOMORI226ImageThree from "../../../../assets/Komori226/KOMORI226ImageThree.jpeg";
import KOMORI226ImageFour from "../../../../assets/Komori226/KOMORI226ImageFour.jpeg";
import KOMORI226ImageFive from "../../../../assets/Komori226/KOMORI226ImageFive.jpeg";
import HEIDELBERG28X40DOUBLECOLOUROne from "../../../../assets/DoubleColorImage/HEIDELBERG28X40DOUBLECOLOUROne.jpeg";
import HEIDELBERG28X40DOUBLECOLOURTwo from "../../../../assets/DoubleColorImage/HEIDELBERG28X40DOUBLECOLOURTwo.jpeg";
import Polly266elcolorDumpingOne from "../../../../assets/Polly266elcolordumping/Polly266elcolorDumpingOne.jpeg";
import Polly266elcolorDumpingTwo from "../../../../assets/Polly266elcolordumping/Polly266elcolorDumpingTwo.jpeg";
import Polly266elcolorDumpingThree from "../../../../assets/Polly266elcolordumping/Polly266elcolorDumpingThree.jpeg";
import Polly266elcolorDumpingFour from "../../../../assets/Polly266elcolordumping/Polly266elcolorDumpingFour.jpeg";
import Polly266elcolorDumpingFive from "../../../../assets/Polly266elcolordumping/Polly266elcolorDumpingFive.jpeg";
import Polly725ImageOne from "../../../../assets/Polly725PVBD1996/Polly725ImageOne.jpeg";
import Polly725ImageTwo from "../../../../assets/Polly725PVBD1996/Polly725ImageTwo.jpeg";
import Polly725ImageThree from "../../../../assets/Polly725PVBD1996/Polly725ImageThree.jpeg";
import Polly725ImageFour from "../../../../assets/Polly725PVBD1996/Polly725ImageFour.jpeg";

const DoubleColorPrintingMachine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "KOMORI 226 Alcolour Dampening with Chillar",
      images: [
        KOMORI226ImageOne,
        KOMORI226ImageTwo,
        KOMORI226ImageThree,
        KOMORI226ImageFour,
        KOMORI226ImageFive,
      ],
      description:
        "Now available in Mumbai warehouse, imported from America, the KOMORI Sprint S226P is a 2-color sheetfed offset press with convertible perfecting (1+1 or 2+0). It features Alcolor + Komorimatic dampening with chiller (Numatic), hard chrome cylinders, and a maximum speed of 10,000 sheets/hour. Ideal for small to medium runs, the press handles up to 480 x 660 mm (19” x 26”) sheet size with excellent reliability.",
      features: [
        "Convertible Perfecting",
        "Komorimatic Dampening",
        "Hard Chrome Cylinders",
        "Chiller System",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 2,
      name: "HEIDELBERG 28X40 DOUBLE COLOUR",
      images: [HEIDELBERG28X40DOUBLECOLOUROne, HEIDELBERG28X40DOUBLECOLOURTwo],
      description:
        "This is a Heidelberg 28” x 40” double color offset press, featuring a straight printing configuration with water dampening system only. Equipped with a long delivery, it is ideal for high-quality two-color work in commercial printing. Reliable and efficient, this press offers consistent performance for medium-format print production.",
      features: [
        "2-Color Straight",
        "Water Dampening",
        "Long Delivery",
        "28x40 Format",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 3,
      name: "Polly 266 elcolor dumping",
      images: [
        Polly266elcolorDumpingOne,
        Polly266elcolorDumpingTwo,
        Polly266elcolorDumpingThree,
        Polly266elcolorDumpingFour,
        Polly266elcolorDumpingFive,
      ],
      description:
        "The Polly 266 is a 2-color offset press, manufactured in 2000, featuring Elcolor dampening and high pile delivery. Built for reliability and consistent performance, this straight press is ideal for short to medium-run commercial jobs. With its compact format and efficient output handling, it offers excellent value for everyday print production.",
      features: [
        "2-Color Press",
        "Elcolor Dampening",
        "High Pile Delivery",
        "Year 2000 Model",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 4,
      name: "Polly 725 PVBD",
      images: [
        Polly725ImageOne,
        Polly725ImageTwo,
        Polly725ImageThree,
        Polly725ImageFour,
      ],
      description:
        "Imported from Europe, the Polly 725 PVBD is a 2-color offset press built in 1996, featuring a 19” x 26” format. Equipped with a V-feeder, water dampening, high pile delivery, double panel controls, and powder spray, this machine is in excellent condition and well-suited for consistent, high-quality two-color printing in commercial applications.",
      features: [
        "2-Color Press",
        "V-Feeder System",
        "Hi Pile Delivery",
        "Double Panel",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 5,
      name: "508 Web Offset Printing Machine",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389415115/ER/PV/TL/29805837/whatsapp-image-2024-02-16-at-8-17-58-pm-1-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389415121/AM/KX/QQ/29805837/whatsapp-image-2024-02-16-at-8-17-58-pm-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389415122/DU/XD/IX/29805837/whatsapp-image-2024-02-16-at-8-17-57-pm-1-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389415124/GI/RQ/TF/29805837/whatsapp-image-2024-02-16-at-8-17-57-pm-500x500.jpeg",
      ],
      description:
        "The 508 Web Offset Printing Machine is a compact and efficient sheet-fed press designed for two-color printing. With a maximum paper size of 13 x 19 inches, it is ideal for medium-volume commercial jobs, delivering speeds of up to 1,000 pages per hour. Powered by a 2 HP motor, this machine offers reliable performance with low energy consumption, suitable for various paper stocks and print formats.",
      features: [
        "2 Colour Output",
        "Sheet Fed Input",
        "13x19 Inch Size",
        "1000 Pages/Hour",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
  ];

  const nextImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % imagesLength,
    }));
  };

  const prevImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const updatedIndexes = { ...prev };
        products.forEach((product) => {
          const currentIndex = prev[product.id] || 0;
          updatedIndexes[product.id] =
            (currentIndex + 1) % product.images.length;
        });
        return updatedIndexes;
      });
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* SEO Meta Tags */}
      {/* <head>
        <title>
          Premium Printing Machines | Anamika Machineries | Heidelberg & Komori
        </title>
        <meta
          name="description"
          content="Leading supplier of premium printing machines including Heidelberg and Komori offset printing machines. High-quality commercial printing solutions."
        />
        <meta
          name="keywords"
          content="printing machines, Heidelberg, Komori, offset printing, commercial printing, Anamika Machineries"
        />
      </head> */}

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1642969164999-979483e21601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Anamika Machineries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Premium Printing Machines for Professional Excellence
            </p>
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span>Warranty Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-6 h-6 text-yellow-400" />
                <span>Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Range Of&nbsp;
              <span className="text-blue-600">
                Double Color Printing Machines
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of world-class double color
              printing machines from industry leaders Heidelberg, Polly And
              Komori.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <div className="relative overflow-hidden group">
                  <AnimatePresence mode="sync">
                    <motion.img
                      src={product.images[currentImageIndex[product.id] || 0]}
                      alt={`${product.name} - Image ${
                        (currentImageIndex[product.id] || 0) + 1
                      }`}
                      className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  {/* Image Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(product.id, product.images.length);
                      }}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(product.id, product.images.length);
                      }}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [product.id]: idx,
                          }));
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          (currentImageIndex[product.id] || 0) === idx
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t z-10 pointer-events-none from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {/* <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                    {product.originalPrice && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Save ₹
                        {(
                          parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                          parseInt(product.price.replace(/[₹,]/g, ""))
                        ).toLocaleString()}
                      </div>
                    )} */}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-xl leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Zap className="w-3 h-3 text-orange-500 mr-1 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-green-600">
                        {product.price}
                      </div>
                      {/* {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </div>
                      )} */}
                    </div>
                    <button
                      onClick={() => (window.location.href = "tel:8051448069")}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-800 cursor-pointer text-white px-2 md:px-6 lg:px-6 xl:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                      Contact Us
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Why Choose{" "}
              <span className="text-orange-500">Anamika Machineries</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Only the finest printing machines from world-renowned manufacturers",
              },
              {
                icon: Shield,
                title: "Warranty Support",
                desc: "Comprehensive warranty and after-sales support for peace of mind",
              },
              {
                icon: Zap,
                title: "Expert Installation",
                desc: "Professional installation and setup by certified technicians",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Quick and safe delivery across the country with proper handling",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200">
                  <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Contact us today for personalized quotes and expert consultation
              on the perfect printing solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 80514 48069</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-blue-100">kshailesh712@gmail.com</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-blue-100">
                  Rampur Road, Near Ramratna Hospital Patna-800006, Bihar, India
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => (window.location.href = "tel:8051448069")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Quote Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoubleColorPrintingMachine;
