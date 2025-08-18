import React, { useState } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
  Search,
  Menu,
  X,
} from "lucide-react";
import Logo from "../assets/anamikalogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const navigate = useNavigate();

  // Menu data structure
  const menuItems = [
    {
      name: "SERVICES",
      submenu: [
        {
          category: "Printing Machine",
          items: [],
          link: "/printing-machine",
        },
        {
          category: "Perfect Binding Machine",
          items: [],
          link: "",
        },
        {
          category: "Pasting Machine",
          items: [],
          link: "",
        },
        {
          category: "Die Cutting Machine",
          items: [],
          link: "",
        },
        {
          category: "Paper Cutting Machine",
          items: [],
          link: "",
        },
        {
          category: "Folding Machine",
          items: [],
          link: "",
        },
        {
          category: "Trimming Machine",
          items: [],
          link: "",
        },
      ],
    },
    {
      name: "PAGES",
      submenu: [
        {
          category: "Company Pages",
          items: [],
        },
        {
          category: "Project Pages",
          items: [],
        },
      ],
    },
  ];

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileActiveMenu(null);
  };

  const handleMobileMenuClick = (menuName) => {
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
  };

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-blue-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 mb-2 lg:mb-0">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1-(980)-514-48069</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>kshailesh712@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Mon to Fri : 9am to 6pm</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Facebook
              size={18}
              className="hover:text-orange-400 cursor-pointer transition-colors"
            />
            <Linkedin
              size={18}
              className="hover:text-orange-400 cursor-pointer transition-colors"
            />
            <MessageCircle
              size={18}
              className="hover:text-orange-400 cursor-pointer transition-colors"
            />
            <Twitter
              size={18}
              className="hover:text-orange-400 cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">A</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Anamika Machineries
                </h1>
                <p className="text-sm text-gray-600">The Industry Leaders</p>
              </div> */}
              <img
                src={Logo}
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-gray-700 font-semibold hover:text-orange-600 transition-colors"
              >
                HOME
              </a>
              <a
                href="/about-us"
                className="text-gray-700 font-semibold hover:text-orange-500 transition-colors"
              >
                ABOUT US
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("SERVICES")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 uppercase text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                  Our Products
                  <ChevronDown size={16} />
                </button>

                {activeDropdown === "SERVICES" && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      {menuItems[0].submenu.map((category, idx) => (
                        <div key={idx} className="mb-6 last:mb-0">
                          <div className="text-gray-600 border-white hover:text-orange-500 font-semibold text-sm mb-2 hover:border-l-4 hover:border-orange-500 pl-3">
                            <button onClick={() => navigate(category.link)}>
                              {category.category}
                            </button>
                          </div>
                          <div className="ml-7">
                            {category.items.map((item, itemIdx) => (
                              <button
                                onClick={() => navigate(item.link)}
                                key={itemIdx}
                                className="block text-gray-600 hover:text-orange-500 text-sm py-1 transition-colors"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pages Dropdown */}
              {/* <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("PAGES")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                  PAGES
                  <ChevronDown size={16} />
                </button>

                {activeDropdown === "PAGES" && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      {menuItems[1].submenu.map((category, idx) => (
                        <div key={idx} className="mb-6 last:mb-0">
                          <div className="text-gray-600 border-white hover:text-orange-500 font-semibold text-sm mb-2 hover:border-l-4 hover:border-orange-500 pl-3">
                            {category.category}
                          </div>
                          <div className="ml-7">
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href="#"
                                className="block text-gray-600 hover:text-orange-500 text-sm py-1 transition-colors"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}

              <a
                href="/gallery"
                className="text-gray-700 font-semibold uppercase hover:text-orange-500 transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 font-semibold hover:text-orange-500 transition-colors"
              >
                CONTACT
              </a>

              {/* <Search
                size={20}
                className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors"
              /> */}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:block bg-orange-500 cursor-pointer text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors">
                GET A QUOTE
              </button>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a href="/" className="block text-orange-500 font-semibold py-2">
                HOME
              </a>
              <a
                href="/about-us"
                className="block text-gray-700 font-semibold py-2 hover:text-orange-500 transition-colors"
              >
                ABOUT US
              </a>

              {/* Mobile Services Menu */}
              <div>
                <button
                  onClick={() => handleMobileMenuClick("SERVICES")}
                  className="flex items-center justify-between uppercase w-full text-gray-700 font-semibold py-2 hover:text-orange-500 transition-colors"
                >
                  Our Products
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileActiveMenu === "SERVICES" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "SERVICES" && (
                  <div className="ml-4 mt-2 space-y-3">
                    {menuItems[0].submenu.map((category, idx) => (
                      <div key={idx}>
                        <div className="text-gray-600 border-white hover:text-orange-500 font-semibold text-sm mb-2 hover:border-l-4 hover:border-orange-500 pl-3">
                          <button onClick={() => navigate(category.link)}>
                            {category.category}
                          </button>
                        </div>
                        <div className="ml-7 space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href="#"
                              className="block text-gray-600 hover:text-orange-500 text-sm py-1 transition-colors"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Pages Menu */}
              {/* <div>
                <button
                  onClick={() => handleMobileMenuClick("PAGES")}
                  className="flex items-center justify-between w-full text-gray-700 font-semibold py-2 hover:text-orange-500 transition-colors"
                >
                  PAGES
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileActiveMenu === "PAGES" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "PAGES" && (
                  <div className="ml-4 mt-2 space-y-3">
                    {menuItems[1].submenu.map((category, idx) => (
                      <div key={idx}>
                        <div className="text-orange-500 font-semibold text-sm mb-2 border-l-4 border-orange-500 pl-3">
                          {category.category}
                        </div>
                        <div className="ml-7 space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href="#"
                              className="block text-gray-600 hover:text-orange-500 text-sm py-1 transition-colors"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}

              <a
                href="/gallery"
                className="block text-gray-700 uppercase font-semibold py-2 hover:text-orange-500 transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact-us"
                className="block text-gray-700 font-semibold py-2 hover:text-orange-500 transition-colors"
              >
                CONTACT
              </a>

              <button className="w-full bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors mt-4">
                GET A QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
