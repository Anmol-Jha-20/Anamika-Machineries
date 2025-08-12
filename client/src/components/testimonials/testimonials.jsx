import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, PrintXpress",
    image:
      "https://wordpress.themeholy.com/builda/wp-content/uploads/2025/06/testi_6_1.png",
    feedback:
      "Anamika Machineries has been our trusted partner for years. Their printing machines are reliable and their service is exceptional.",
  },
  {
    name: "Priya Verma",
    role: "Manager, BindWell Pvt. Ltd.",
    image:
      "https://wordpress.themeholy.com/builda/wp-content/uploads/2025/06/testi_5_3.png",
    feedback:
      "The binding machines we purchased are of excellent quality. Timely delivery and great after-sales support.",
  },
  {
    name: "Amit Kumar",
    role: "Director, FoldTech Solutions",
    image: "https://i.pravatar.cc/40?img=2",
    feedback:
      "From folding machines to printing equipment, Anamika Machineries provides top-notch products at competitive prices.",
  },
];

const ClientTestimonials = () => {
  return (
    <section
      className="bg-white py-16 px-4 md:px-12"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Established in 2017 in Patna, Bihar, Anamika Machineries has been
          delivering high-quality Printing Machines, Binding Machines, and
          Folding Machines with unmatched service.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name} - ${testimonial.role}`}
                className="w-20 h-20 rounded-full mx-auto border-4 border-orange-400 mb-4 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-blue-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
