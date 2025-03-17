import { motion } from "framer-motion";
import SectionOne from "../Components/sectionOne";
import SectionTwo from "../Components/sectionTwo";

export default function About() {
  return (
    <div className="bg-white max-w-7xl mb-16 mx-auto text-black min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-32 px-6"
      >
        <h1 className="text-5xl font-bold text-blue-900">Connecting People Across Faiths & Interests</h1>
        <p className="text-gray-600 mt-4 text-xl max-w-3xl mx-auto">
          Building bridges between communities by fostering meaningful connections.
        </p>
      </motion.div>

      {/* Sections */}
      <SectionOne />
      <SectionTwo />
      <SectionOne />
    </div>
  );
}
