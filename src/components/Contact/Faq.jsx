import { motion } from "framer-motion";

const faqs = [
  {
    q: "What information should I prepare before contacting?",
    a: "Having a clear project overview, timeline, budget range, and specific requirements will help us understand your needs better.",
  },
  {
    q: "How quickly can you start on my project?",
    a: "Our typical response time is within 24 hours, and we can usually begin project planning within a week of agreement.",
  },
  {
    q: "Do you provide post-development support?",
    a: "Yes, we offer comprehensive post-development support and maintenance packages tailored to your needs.",
  },
  {
    q: "Can we have face-to-face meetings?",
    a: "Absolutely! We welcome both in-person meetings at our office and virtual meetings via your preferred platform.",
  },
];
const Faq = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
