import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function CommunionSec() {

  const features = [
    {
      title: "Unifying Communities",
      description: "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions."
    },
    {
      title: "Innovative and Fun",
      description: "Experience faith in a fresh way through our interactive features, engaging events, and modern approach to spiritual connection."
    },
    {
      title: "Promoting Unity",
      description: "We foster understanding and harmony between different faith communities through shared experiences and meaningful dialogue."
    }
  ];

  return (
    <>
      <section className="bg-gray-900 text-white py-30 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Communion Matters!</h2>
          <p className="text-lg text-gray-300">
            Communion isn&apos;t just another platform it&apos;s a thriving hub where diverse faiths, traditions, and beliefs come together. By fostering collaboration and meaningful connections, we&apos;re transforming differences into strengths and building a world where unity is the foundation of every interaction.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <a href="#" className="text-blue-400 font-medium flex items-center gap-2 hover:underline">
                Learn More <span className='flex items-center'><FaArrowRightLong /></span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
