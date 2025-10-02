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

import FoldingMachineImage1 from "../../../assets/FoldingMachineImage/FoldingMachineImage1.jpeg";
import FoldingMachineImage2 from "../../../assets/FoldingMachineImage/FoldingMachineImage2.jpeg";
import FoldingMachineImage3 from "../../../assets/FoldingMachineImage/FoldingMachineImage3.jpeg";
import FoldingMachineImage4 from "../../../assets/FoldingMachineImage/FoldingMachineImage4.jpeg";

import HeidelbergStahlfolderImage1 from "../../../assets/FoldingMachineImage/HeidelbergStahlfolderImage1.jpeg";
import HeidelbergStahlfolderImage2 from "../../../assets/FoldingMachineImage/HeidelbergStahlfolderImage2.jpeg";
import HeidelbergStahlfolderImage3 from "../../../assets/FoldingMachineImage/HeidelbergStahlfolderImage3.jpeg";
import HeidelbergStahlfolderImage4 from "../../../assets/FoldingMachineImage/HeidelbergStahlfolderImage4.jpeg";

const FoldingMachinesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "GUK FA 49/4/4",
      images: [
        FoldingMachineImage3,
        FoldingMachineImage4,
        FoldingMachineImage1,
        FoldingMachineImage2,
      ],
      description:
        "This GUK FA 49/4/4 paper folding machine is a high-performance, precision folder tailored for pharmaceutical applications, where compact, accurate folds are essential. With a maximum speed of 15,000 sheets per hour, it’s perfect for high-volume operations. Equipped with 4 + 4 folding pockets, this machine handles a variety of fold types and sizes with ease. It includes a pile feeder, original stacker, air compressor, and comes complete with tools and manuals.",
      features: [
        "Pharma-Optimized",
        "High-Speed Folding",
        "Pile Feeder System",
        "Air Compressor",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 2,
      name: "Heidelberg Stahlfolder KH 55/6 KTTL",
      images: [
        HeidelbergStahlfolderImage1,
        HeidelbergStahlfolderImage2,
        HeidelbergStahlfolderImage3,
        HeidelbergStahlfolderImage4,
      ],
      description:
        'This Heidelberg Stahlfolder KH 55/6 KTTL is a robust and versatile folding machine ideal for high-output commercial and pharmaceutical folding operations. With a maximum sheet size of 22" x 32" and 55 cm folding width, it delivers exceptional flexibility and accuracy. It features 6 folding pockets, 2 folding knives, and a knife shaft for complex folding patterns. The Tremat sheet separation system ensures smooth, jam-free feeding, while the pallet feeder and stream delivery maximize productivity.',
      features: [
        "Tremat Feeder System",
        "6-Pocket Folder",
        "Knife Folding Unit",
        "Noise-Reduction Hood",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 3,
      name: "Fully Automatic Paper Folding Machine",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/2/394185071/SU/AX/JT/29805837/stahl-t-36-paper-folding-machine-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389314914/BN/RW/RS/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389314915/BB/CB/VE/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389314922/SB/UF/ID/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
      ],
      description:
        "Paper Folding Machine For Sale STAHL T /36  SPCIAL FOR PHARMA WORK - Size : 14×20- Pockets - 4 + 4 - Knife - 1- Age : 1994- Pile Feeder, - Speed  : 15,000 , - ⁠Air Compressor - Original Stacker - ⁠Original Pressure Stacker - Import From Australia 🇪🇺- Tools 🛠️ - ⁠Books 📚- Available Immediately",
      features: [
        "2-Color Printing",
        "High Speed Operation",
        "Precision Registration",
        "Auto Plate Loading",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 4,
      name: "Stahl KC 66/4 Paper Folding Machines",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389281947/HM/NY/AC/29805837/paper-folding-machines-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389282097/MP/QB/CW/29805837/paper-folding-machines-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389281947/HM/NY/AC/29805837/paper-folding-machines-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389282097/MP/QB/CW/29805837/paper-folding-machines-500x500.jpeg",
      ],
      description:
        "Paper Folding Machine For Sale STAHL КС 66/4 KTL-FE- Pockets - 4- Knife - 2 - Side Pocket Aftrt 1st Knife - Age : 1994- Size : 25 X 36- Pile Feeder, - With Tremat Head - Speed  : 15,000 , Digital - - Display- Original Stacker - Import From Europe 🇪🇺- Books 📚- Tools 🛠️ - Available",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
    },
    {
      id: 5,
      name: "Stahl KD 66/4 Paper Folding Machine",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393737542/KP/FR/CU/29805837/whatsapp-image-2024-02-27-at-9-12-01-am-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393737542/KP/FR/CU/29805837/whatsapp-image-2024-02-27-at-9-12-01-am-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393737542/KP/FR/CU/29805837/whatsapp-image-2024-02-27-at-9-12-01-am-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393737542/KP/FR/CU/29805837/whatsapp-image-2024-02-27-at-9-12-01-am-500x500.jpeg",
      ],
      description:
        "Combi-Foldingmachine for 16 pages !Make: StahlfolderType: KD -66/4 KTLFormat:                           660 x 1280 mmbuilt:                                2002-  Treatment  feeder- 66 cm, 4  combi-buckles- cross-fold-unit KTL  with 2 fold-knifes for 16 pages- center control-station for all functions- swingable control-panel on cross-fold-unit- compressor - tools, technical documentation Available in Stock",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
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
          backgroundImage: `url("https://images.unsplash.com/photo-1522753071498-f3137a65aee3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
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
              Premium Folding Machines for Professional Excellence
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
              <span className="text-blue-600">Folding Machines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneers in the industry, we offer Fully Automatic Paper Folding
              Machine, Stahl KC 66 4 Paper Folding Machines and Stahl KD 66 4
              Paper Folding Machine from India.
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
                      className="w-full h-96 object-fill transition-transform duration-500 group-hover:scale-105"
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
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-800 text-white px-2 md:px-6 lg:px-6 xl:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
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

export default FoldingMachinesPage;
