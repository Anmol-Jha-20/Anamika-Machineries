import React from "react";
import { Play, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnergyLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Industry Leaders Tag */}
            <div className="inline-flex items-center">
              <span className="text-orange-500 font-medium text-sm lg:text-base">
                — The Industry Leaders
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Print Industry Since 2017
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Established in the year 2017 in Patna, Bihar, Anamika Machineries
              has emerged as a trusted name in the field of industrial machinery
              supply. As a Sole Proprietorship, we specialize in the wholesale
              trading of a wide range of machines, including printing machines,
              binding machines, folding machines, and various finishing
              equipment essential for print production and packaging industries.
              With a strong focus on quality, durability, and after-sales
              support, we have built long-term relationships with clients across
              Bihar and beyond.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => navigate("/about-us")}
                className="group inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                {/* <div className="p-2 rounded-full">
                  <Play className="w-5 h-5 text-white fill-current" />
                </div> */}
                <span className="font-semibold text-lg cursor-pointer border-b-2 border-transparent transition-all duration-300">
                  Explore Our Solutions
                </span>
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Top Left - Team Image */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/389326264/DL/UG/ML/29805837/machine-500x500.jpeg"
                  alt="Energy professionals discussing project plans"
                  className="w-full h-48 lg:h-64 object-cover"
                />
              </div>

              {/* Top Right - Energy Icon with circular background */}
              <div className="flex items-center justify-center bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="text-orange-500 text-2xl lg:text-3xl font-bold">
                        ⚡
                      </div>
                      <div className="absolute -bottom-2 -right-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/393739791/FT/GN/JG/29805837/printing-machine-500x500.jpeg"
                  alt="Energy professionals discussing project plans"
                  className="w-full h-48 lg:h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Bottom spanning both columns - Worker Image */}
              <div className="col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/389414585/TE/QR/FD/29805837/brinder-trimmer-machine-500x500.jpeg"
                  alt="Energy sector worker with safety equipment"
                  className="w-full h-48 lg:h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Additional Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="text-blue-600 text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced technological integration for optimized energy
                management and sustainable operations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-green-600 text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sustainable Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Circular economy principles driving innovative approaches to
                energy sector development.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <div className="text-orange-600 text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Efficient Operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined processes and digital transformation for enhanced
                productivity and safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyLandingPage;
