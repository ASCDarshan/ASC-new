import { motion } from "framer-motion";

const OurResponse = () => {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Our Response Promise
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We understand the value of your time. Our team is committed to
          providing quick and meaningful responses to all inquiries.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-primary mb-2">24hrs</div>
            <div className="text-gray-600">Initial Response</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
            <div className="text-gray-600">Detailed Proposal</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-primary mb-2">7 Days</div>
            <div className="text-gray-600">Project Kickoff</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurResponse;
