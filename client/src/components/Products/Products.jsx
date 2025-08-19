import React from "react";
import { FaPrint, FaBook, FaLayerGroup } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Printing Machines",
    description:
      "High-quality printing machines suitable for all types of commercial printing needs with reliable performance.",
    icon: <FaPrint className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389326264/DL/UG/ML/29805837/machine-500x500.jpeg",
    link: "/printing-machine", // Replace with actual product page link
  },
  {
    title: "Binding Machines",
    description:
      "Durable and efficient binding machines designed for professional and industrial usage.",
    icon: <FaBook className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389414587/JL/HV/FT/29805837/brinder-trimmer-machine-500x500.jpeg",
    link: "/binding-machine",
  },
  {
    title: "Folding Machines",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389314914/BN/RW/RS/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
    link: "/folding-machine",
  },
  {
    title: "Pasting Machine",
    description:
      "High-quality printing machines suitable for all types of commercial printing needs with reliable performance.",
    icon: <FaPrint className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/394181020/JN/GT/KR/29805837/4-fold-side-lock-bottom-carton-paste-machine-500x500.jpg",
    link: "/pasting-machine", // Replace with actual product page link
  },
  {
    title: "Die Cutting Machine",
    description:
      "Durable and efficient binding machines designed for professional and industrial usage.",
    icon: <FaBook className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389412393/XZ/EL/CH/29805837/die-cutting-machine-28x40-500x500.jpeg",
    link: "/die-cutting-machine",
  },
  {
    title: "Paper Cutting Machine",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/394032590/GS/DX/PN/29805837/automatic-paper-cutting-machine-500x500.jpg",
    link: "/paper-cutting-machine",
  },
  {
    title: "Trimming Machine",
    description:
      "Precision folding machines to handle large volumes with consistent accuracy.",
    icon: <FaLayerGroup className="text-yellow-400 text-5xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389324403/LA/XS/CB/29805837/offset-printing-machines-500x500.jpeg",
    link: "/trimming-machine",
  },
];

export default function ProductsSection() {
  const navigate = useNavigate();
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
                <button
                  onClick={() => navigate(product.link)}
                  className="inline-block bg-orange-500 cursor-pointer text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
