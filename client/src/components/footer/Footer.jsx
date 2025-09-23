import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Anamika Machineries
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Established in 2017 in Patna, Bihar, we are a Sole Proprietorship,
            engaged as the Wholesale Trader of Printing Machines, Binding
            Machine, Folding Machines, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-300">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
              Patna, Bihar, India
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-yellow-400" />
              +91 80514 48069
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-yellow-400" />
              kshailesh712@gmail.com
            </li>
          </ul>
        </div>

        <div className="fixed bottom-6 left-0 z-50">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/918051448069?text=Hey!%20I%20am%20interested%20in%20your%20services.",
                "_blank"
              )
            }
            className="bg-green-600 hover:bg-green-700 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Need Help?"
          >
            <FaWhatsapp size={24} />
          </button>
        </div>
        <div className="fixed bottom-6 right-0 z-50">
          <button
            onClick={() => (window.location.href = "tel:8051448069")}
            className="bg-orange-500 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Need Help?"
          >
            <MdCall size={24} />
          </button>
        </div>
        <div className="fixed bottom-28 right-0 z-50">
          <button
            onClick={() =>
              (window.location.href = "mailto:kshailesh712@gmail.com")
            }
            className="bg-orange-500 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Email Us"
          >
            <MdEmail size={24} />
          </button>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-yellow-300"
            >
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-center py-4 text-sm">
        © {new Date().getFullYear()} Anamika Machineries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
