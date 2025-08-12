import React, { useState } from "react";
import { ShieldCheck, Star, Clock, Award, X } from "lucide-react";
import GstImage from "../assets/gstimageone.png";

const WhyChooseUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            Why Choose{" "}
            <span className="text-orange-500">Anamika Machineries</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Established in the year <strong>2017</strong> in Patna, Bihar, we
            are a Sole Proprietorship, engaged as the Wholesale Trader of
            Printing Machines, Binding Machines, Folding Machines, and more.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-4">
          <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <ShieldCheck className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">
              Trusted Since 2017
            </h3>
            <p className="mt-2 text-gray-600">
              Over 7 years of trust, quality service, and customer satisfaction.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <Star className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">
              Top Quality Products
            </h3>
            <p className="mt-2 text-gray-600">
              We offer only the best in printing, binding, and folding
              machinery.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <Clock className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">
              On-Time Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              We ensure quick and reliable delivery of all orders.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <Award className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">
              Certified Business
            </h3>
            <p className="mt-2 text-gray-600">
              Registered under Form GST REG-06 for complete authenticity.
            </p>
          </div>
        </div>

        {/* GST Certificate */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Our GST Registration
          </h3>
          <div className="flex justify-center">
            <img
              src={GstImage} // Replace with actual GST certificate image path
              alt="GST Registration Certificate - Anamika Machineries"
              className="rounded-lg shadow-lg w-full max-w-md border-3 border-orange-400"
              loading="lazy"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        {/* Fullscreen Image Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-5 right-5 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>
            <img
              src={GstImage} // Same GST image
              alt="GST Registration Certificate - Anamika Machineries"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
