import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  Target,
  Eye,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Wrench,
  Package,
  Printer,
  Settings,
  Newspaper,
  FoldHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id, delay = 0) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease-out ${delay}s`,
  });

  const scaleIn = (id, delay = 0) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? "scale(1)" : "scale(0.9)",
    transition: `all 0.6s ease-out ${delay}s`,
  });

  const machinery = [
    {
      icon: Printer,
      name: "Printing Machines",
      desc: "High-quality printing solutions",
    },
    {
      icon: Package,
      name: "Binding Machines",
      desc: "Professional binding equipment",
    },
    {
      icon: Settings,
      name: "Pasting Machine",
      desc: "Precision folding machinery",
    },
    {
      icon: Wrench,
      name: "Die Cutting Machine",
      desc: "Complete finishing solutions",
    },
    {
      icon: Newspaper,
      name: "Paper Cutting Machine",
      desc: "Complete finishing solutions",
    },
    {
      icon: FoldHorizontal,
      name: "Folding Machine",
      desc: "Complete finishing solutions",
    },
    {
      icon: Wrench,
      name: "Trimming Machine",
      desc: "Complete finishing solutions",
    },
  ];

  const stats = [
    { number: "2017", label: "Established", icon: Calendar },
    { number: "7+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Satisfaction", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would be handled by helmet or similar in real app */}
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-blue-800 via-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>

        
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-700"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              id="hero-content"
              data-animate
              style={fadeInUp("hero-content")}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Anamika Machineries
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your Trusted Partner in Industrial Machinery Solutions
              </p>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>Patna, Bihar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span>Established 2017</span>
                </div>
              </div>
            </div>

            <div
              id="hero-image"
              data-animate
              style={scaleIn("hero-image", 0.3)}
              className="relative"
            >
              
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/2/389326264/DL/UG/ML/29805837/machine-500x500.jpeg"
                alt="Anamika Machineries Industrial Equipment"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </section> */}
      {/* hero Section 2 */}

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden min-h-screen flex items-center">
        {/* Layered Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 lg:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium border border-white/20">
                  <Award className="w-4 h-4" />
                  Trusted Industrial Partner
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                About{" "}
                <motion.span
                  className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Anamika Machineries
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Your Trusted Partner in Industrial Machinery Solutions
              </motion.p>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="p-2 bg-yellow-400/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-blue-200">Location</p>
                    <p className="text-white font-semibold">Patna, Bihar</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="p-2 bg-orange-400/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-blue-200">Since</p>
                    <p className="text-white font-semibold">2017</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="p-2 bg-purple-400/20 rounded-lg">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-blue-200">Experience</p>
                    <p className="text-white font-semibold">8+ Years</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-2xl blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/389326264/DL/UG/ML/29805837/machine-500x500.jpeg"
                  alt="Anamika Machineries Industrial Equipment"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl relative z-10"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-8 right-8 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  Premium Quality
                </motion.div>
              </motion.div>

              {/* Corner Accents */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-yellow-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 border-4 border-orange-400/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  id={`stat-${index}`}
                  data-animate
                  style={scaleIn(`stat-${index}`, index * 0.1)}
                  className="text-center group"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story */}
            <div>
              <div
                id="story-intro"
                data-animate
                style={fadeInUp("story-intro")}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Our Journey Since 2017
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Established in <strong className="text-blue-600">2017</strong>{" "}
                  in <strong className="text-blue-600">Patna, Bihar</strong>,
                  Anamika Machineries has grown to become a reliable and
                  respected name in the
                  <strong className="text-orange-500">
                    {" "}
                    industrial machinery supply sector
                  </strong>
                  . As a <strong>sole proprietorship</strong>, we take pride in
                  offering high-quality, efficient, and cost-effective machinery
                  solutions to businesses in the
                  <strong className="text-blue-600">
                    {" "}
                    print production and packaging industries
                  </strong>
                  .
                </p>
              </div>

              <div
                id="specialization"
                data-animate
                style={fadeInUp("specialization", 0.2)}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  What We Specialize In
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We specialize in the{" "}
                  <strong className="text-orange-500">wholesale trading</strong>{" "}
                  of a wide range of industrial machines. Each product in our
                  portfolio is carefully selected for its{" "}
                  <strong>performance, durability, and reliability</strong>,
                  ensuring it meets the demanding needs of modern industrial
                  workflows.
                </p>
              </div>

              <div
                id="commitment"
                data-animate
                style={fadeInUp("commitment", 0.4)}
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we have developed strong partnerships with
                  manufacturers and clients alike, enabling us to deliver{" "}
                  <strong className="text-blue-600">top-tier machinery</strong>{" "}
                  along with exceptional{" "}
                  <strong className="text-orange-500">
                    after-sales service and technical support
                  </strong>
                  . Our customer-centric approach and commitment to excellence
                  have earned us the trust of businesses across{" "}
                  <strong>Bihar and neighboring regions</strong>.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium italic">
                    "At Anamika Machineries, we don't just sell machines — we
                    deliver
                    <strong className="text-orange-600">
                      {" "}
                      solutions that drive productivity and growth
                    </strong>
                    ."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Machinery Cards */}
            <div>
              <div
                id="machinery-title"
                data-animate
                style={fadeInUp("machinery-title")}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Our Product Range
                </h3>
                <p className="text-gray-600">
                  Comprehensive solutions for your industrial needs
                </p>
              </div>

              <div className="space-y-6">
                {machinery.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.name}
                      id={`machinery-${index}`}
                      data-animate
                      style={fadeInUp(`machinery-${index}`, index * 0.1)}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-gray-600">{item.desc}</p>
                          <div className="flex items-center gap-2 mt-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-medium">
                              Learn More
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              id="mission"
              data-animate
              style={fadeInUp("mission")}
              className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses with{" "}
                <strong className="text-blue-600">
                  reliable industrial machinery
                </strong>{" "}
                that enhances{" "}
                <strong className="text-orange-500">
                  efficiency, productivity, and quality
                </strong>
                .
              </p>
            </div>

            {/* Vision */}
            <div
              id="vision"
              data-animate
              style={fadeInUp("vision", 0.2)}
              className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full p-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the{" "}
                <strong className="text-orange-500">
                  preferred machinery supplier
                </strong>{" "}
                in Eastern India, known for{" "}
                <strong className="text-blue-600">
                  integrity, service, and value
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div
            id="values-title"
            data-animate
            style={fadeInUp("values-title")}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the industrial machinery industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                desc: "Every machine is carefully selected for performance and durability",
                icon: CheckCircle,
                color: "blue",
              },
              {
                title: "Expert Support",
                desc: "Comprehensive after-sales service and technical assistance",
                icon: Users,
                color: "orange",
              },
              {
                title: "Trusted Partnerships",
                desc: "Strong relationships with manufacturers and clients across regions",
                icon: Award,
                color: "blue",
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  id={`value-${index}`}
                  data-animate
                  style={scaleIn(`value-${index}`, index * 0.2)}
                  className="group text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-shadow`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div
            id="cta-content"
            data-animate
            style={fadeInUp("cta-content")}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get in touch with Anamika Machineries today and let us help you
              find the right solution for your industrial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Contact Us Today
              </button>
              {/* <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3">
                View Our Products
                <ArrowRight className="w-5 h-5" />
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Final Message */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div
            id="final-message"
            data-animate
            style={fadeInUp("final-message")}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're setting up a new facility or upgrading existing
              equipment, our team is here to guide you every step of the way.
              Experience the difference of working with a trusted partner who
              understands your industrial needs.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
