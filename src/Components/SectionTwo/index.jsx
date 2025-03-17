import { motion } from "framer-motion";

export default function SectionTwo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto px-8 py-10 grid md:grid-cols-2 gap-6 items-center"
    >
      <motion.img
        src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Community engagement"
        className="rounded-3xl shadow-xl w-[80%] mx-auto md:w-[70%]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div>
        <h2 className="text-4xl font-semibold text-blue-600">Empowering Conversations</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Our mission is to provide a safe space for individuals to connect, learn, and grow together.
          Engage in enriching discussions, find support, and celebrate shared values.
        </p>
      </div>
    </motion.div>
  );
}
