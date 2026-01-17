import { motion } from "framer-motion";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
motion;

const testimonials = [
  {
    name: "Suprabhat Jana",
    role: "Student at KIIT University",
    review:
      "Soumyadip is a visionary developer. His attention to detail and creativity blew us away. My project was a massive success because of him.",
    image: testimonial1,
  },
  {
    name: "Subhadip Adgiri",
    role: "Student at KIIT University",
    review:
      "Working with Soumyadip was an absolute pleasure. He brings design and code together like magic. Highly recommend him!",
    image: testimonial2,
  },
];

export default function Testimonals() {
  return (
    <section
      id="testimonials"
      className="relative min-h-scrren bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + 1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-gray-200 italic mb-4">{t.review}</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
