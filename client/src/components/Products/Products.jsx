// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   Printer,
//   BookOpen,
//   FolderOpen,
//   ArrowRight,
//   Award,
//   Users,
//   Clock,
//   Wrench,
// } from "lucide-react";

// const ProductsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       title: "Printing Machines",
//       description:
//         "State-of-the-art printing solutions for commercial and industrial applications, delivering exceptional print quality and reliability.",
//       icon: Printer,
//       features: [
//         "High-resolution printing capability",
//         "Energy-efficient operation",
//         "Multiple format support",
//         "Advanced color management",
//       ],
//       gradient: "from-blue-500 to-blue-600",
//     },
//     {
//       id: 2,
//       title: "Binding Machines",
//       description:
//         "Professional binding equipment for creating durable, high-quality bound documents and publications with various binding styles.",
//       icon: BookOpen,
//       features: [
//         "Multiple binding options",
//         "Automated feeding system",
//         "Precision alignment",
//         "Heavy-duty construction",
//       ],
//       gradient: "from-orange-500 to-orange-600",
//     },
//     {
//       id: 3,
//       title: "Folding Machines",
//       description:
//         "Precision folding equipment for creating professional brochures, leaflets, and documents with consistent, accurate folds every time.",
//       icon: FolderOpen,
//       features: [
//         "Variable fold patterns",
//         "High-speed processing",
//         "Easy setup and operation",
//         "Consistent fold quality",
//       ],
//       gradient: "from-blue-600 to-orange-500",
//     },
//   ];

//   const stats = [
//     { number: "2017", label: "Established", icon: Award },
//     { number: "1000+", label: "Happy Clients", icon: Users },
//     { number: "50+", label: "Machine Models", icon: Wrench },
//     { number: "24/7", label: "Support", icon: Clock },
//   ];

//   const ProductCard = ({ product, index }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const IconComponent = product.icon;

//     return (
//       <div
//         className={`group relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
//           isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//         }`}
//         style={{
//           animationDelay: `${index * 150}ms`,
//           transform: isVisible ? "translateY(0)" : "translateY(30px)",
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Top gradient line */}
//         <div
//           className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
//             product.gradient
//           } rounded-t-2xl transform origin-left transition-transform duration-300 ${
//             isHovered ? "scale-x-100" : "scale-x-0"
//           }`}
//         />

//         {/* Icon */}
//         <div
//           className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center transition-all duration-300 ${
//             isHovered ? "scale-110" : "scale-100"
//           }`}
//         >
//           <IconComponent
//             className={`w-8 h-8 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
//           />
//         </div>

//         {/* Content */}
//         <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//           {product.title}
//         </h3>

//         <p className="text-slate-600 mb-6 leading-relaxed">
//           {product.description}
//         </p>

//         {/* Features */}
//         <ul className="space-y-3 mb-8">
//           {product.features.map((feature, idx) => (
//             <li key={idx} className="flex items-center text-slate-700">
//               <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <button
//           className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300`}
//         >
//           <span>Learn More</span>
//           <ArrowRight
//             className={`w-5 h-5 transition-transform duration-300 ${
//               isHovered ? "translate-x-1" : ""
//             }`}
//           />
//         </button>
//       </div>
//     );
//   };

//   const StatCard = ({ stat, index }) => {
//     const IconComponent = stat.icon;

//     return (
//       <div
//         className={`text-center transition-all duration-500 ${
//           isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//         }`}
//         style={{
//           animationDelay: `${800 + index * 100}ms`,
//           transform: isVisible ? "translateY(0)" : "translateY(20px)",
//         }}
//       >
//         <div className="flex items-center justify-center mb-2">
//           <IconComponent className="w-6 h-6 text-orange-400 mr-2" />
//           <span className="text-3xl md:text-4xl font-bold text-orange-400">
//             {stat.number}
//           </span>
//         </div>
//         <span className="text-slate-300 text-sm uppercase tracking-wider">
//           {stat.label}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <section className="relative overflow-hidden">
//       {/* Products Section */}
//       <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
//         {/* Top gradient line */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div
//               className={`inline-block transition-all duration-700 ${
//                 isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//               }`}
//             >
//               <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4 shadow-lg">
//                 Our Products
//               </span>
//             </div>

//             <h1
//               className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
//                 isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//               }`}
//               style={{ animationDelay: "200ms" }}
//             >
//               <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
//                 Premium Machinery Solutions
//               </span>
//             </h1>

//             <p
//               className={`text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${
//                 isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//               }`}
//               style={{ animationDelay: "400ms" }}
//             >
//               Discover our comprehensive range of high-quality printing,
//               binding, and folding machines designed to meet all your industrial
//               printing needs with precision and reliability.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {products.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Company Info Section */}
//       <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-16">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div
//             className={`mb-8 transition-all duration-700 ${
//               isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//             }`}
//             style={{ animationDelay: "600ms" }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               <span className="text-orange-400">Anamika</span>{" "}
//               <span className="text-white">Machineries</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto mb-6" />
//           </div>

//           <p
//             className={`text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-700 ${
//               isVisible ? "animate-fade-in opacity-100" : "opacity-0"
//             }`}
//             style={{ animationDelay: "700ms" }}
//           >
//             Established in 2017 in Patna, Bihar, we are a trusted wholesale
//             trader specializing in premium printing, binding, and folding
//             machines. As a Sole Proprietorship, we are committed to providing
//             our clients with the highest quality machinery solutions backed by
//             exceptional service and support.
//           </p>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//             {stats.map((stat, index) => (
//               <StatCard key={index} stat={stat} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProductsSection;

import React from "react";
import { FaPrint, FaBook, FaLayerGroup } from "react-icons/fa";

const products = [
  {
    title: "Printing Machines",
    description:
      "High-quality printing machines suitable for all types of commercial printing needs with reliable performance.",
    icon: <FaPrint className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389326264/DL/UG/ML/29805837/machine-500x500.jpeg",
    link: "#", // Replace with actual product page link
  },
  {
    title: "Binding Machines",
    description:
      "Durable and efficient binding machines designed for professional and industrial usage.",
    icon: <FaBook className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389414587/JL/HV/FT/29805837/brinder-trimmer-machine-500x500.jpeg",
    link: "#",
  },
  {
    title: "Folding Machines",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389314914/BN/RW/RS/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
    link: "#",
  },
  {
    title: "Pasting Machine",
    description:
      "High-quality printing machines suitable for all types of commercial printing needs with reliable performance.",
    icon: <FaPrint className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/394181020/JN/GT/KR/29805837/4-fold-side-lock-bottom-carton-paste-machine-500x500.jpg",
    link: "#", // Replace with actual product page link
  },
  {
    title: "Die Cutting Machine",
    description:
      "Durable and efficient binding machines designed for professional and industrial usage.",
    icon: <FaBook className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389412393/XZ/EL/CH/29805837/die-cutting-machine-28x40-500x500.jpeg",
    link: "#",
  },
  {
    title: "Paper Cutting Machine",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/394032590/GS/DX/PN/29805837/automatic-paper-cutting-machine-500x500.jpg",
    link: "#",
  },
  {
    title: "Trimming Machine",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389324403/LA/XS/CB/29805837/offset-printing-machines-500x500.jpeg",
    link: "#",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white py-16" id="our-products">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Established in 2017 in Patna, Bihar,{" "}
          <span className="font-semibold text-blue-900">
            Anamika Machineries
          </span>{" "}
          is a trusted wholesale trader of Printing Machines, Binding Machines,
          Folding Machines, and more.
        </p>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* <div className="mb-4">{product.icon}</div> */}
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {product.description}
                  </p>
                </div>
                {/* Learn More Button */}
                <a
                  href={product.link}
                  className="inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
