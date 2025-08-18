import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>

              <p className="text-gray-600 mb-8">
                Contact us today by phone or through our online form to request
                a quote or for any general inquiries about Vaishnavi Enterprise
                and the range of services we offer, including Roof Fabrication,
                Industrial Maintenance, and Construction Work. We look forward
                to working with you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 uppercase tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            {/* Mailing Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                MAILING ADDRESS
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Rampur Road, Near Ramratna Hospital</p>
                <p> Patna-800006, Bihar, India</p>
                {/* <p>Uttarakhand, India</p> */}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                CONTACT INFO
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">+91 80514 48069</p>
                <p className="text-gray-600">kshailesh712@gmail.com</p>
                {/* <p className="text-yellow-500">@construction_llc</p> */}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8751542425134!2d85.17120827539534!3d25.60906447744811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58c734b23047%3A0x6eddc4a63eb52d46!2sRam%20Ratan%20Hospital!5e0!3m2!1sen!2sin!4v1755442060711!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anamika Machineries Location"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Anamika Machineries
                    </h4>
                    <p className="text-sm text-gray-600">
                      Rampur Road, Near Ramratna Hospital
                      <br />
                      Patna-800006, Bihar, India
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Ram+Ratan+Hospital,+Rampur+Ln,+Musallahpur+Hat,+Bazar+Samiti,+Bahadurpur,+Patna,+Bihar+800006/@25.6090645,85.1712083,17z/data=!4m17!1m7!3m6!1s0x39ed58c734b23047:0x6eddc4a63eb52d46!2sRam+Ratan+Hospital!8m2!3d25.6090645!4d85.1737832!16s%2Fg%2F124ychmml!4m8!1m0!1m5!1m1!1s0x39ed58c734b23047:0x6eddc4a63eb52d46!2m2!1d85.1737832!2d25.6090645!3e2?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Directions
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Ram+Ratan+Hospital/@25.6090645,85.1737832,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed58c734b23047:0x6eddc4a63eb52d46!8m2!3d25.6090645!4d85.1737832!16s%2Fg%2F124ychmml?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Meta Information (would be in head in real application) */}
      <div className="hidden">
        <h1>Contact Construction Company - Get In Touch With Us</h1>
        <meta
          name="description"
          content="Contact our construction company for estimates and general questions. Located in Vill-Shekhpuri, Po-Laksar, Haridwar, Uttarakhand. Call +91 (123) 456-7890 or use our online form."
        />
        <meta
          name="keywords"
          content="construction company contact, building contractors Haridwar, construction services Uttarakhand, contact form, construction estimates"
        />
        <meta
          property="og:title"
          content="Contact Construction Company - Professional Building Services"
        />
        <meta
          property="og:description"
          content="Get in touch with our certified construction contractors for professional building services in Haridwar, Uttarakhand."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Haridwar, Uttarakhand" />
        <meta name="geo.position" content="29.8234567;77.8234567" />
        <meta name="ICBM" content="29.8234567, 77.8234567" />
      </div>
    </div>
  );
};

export default ContactPage;
