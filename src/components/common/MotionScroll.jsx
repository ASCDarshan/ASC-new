import { motion } from "framer-motion";

const ProductStack = [
  {
    products: [
      "Appointment Booking System",
      "Patient Management System",
      "Website For Doctors and Hospitals",
      "Learning Management System",
      "Attendance Tracking",
      "Website for Schools and Universities",
      "Education CRM",
      "Alumni Management System",
      "SEO",
      "Chatbot Development and Training",
      "Payment Gateway Integration",
      "Event Management Portal",
      "Loyalty Management System",
    ],
  },
  {
    products: [
      "Chatbot Development and Training",
      "Payment Gateway Integration",
      "Event Management Portal",
      "Loyalty Management System",
      "CRM",
      "SEO",
      "Website",
      "Learning Management System",
      "Attendance Tracking",
      "Website for Schools and Universities",
      "Appointment Booking System",
      "Patient Management System",
      "Website For Doctors and Hospitals",
    ],
  },
];

const MotionScroll = () => {
  const selectedCategory = "default";

  return (
    <div className="w-full space-y-6">
      <motion.div
        key={`${selectedCategory}-left`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-x-scroll scrollbar-hide"
      >
        <div className="flex animate-scroll-left whitespace-nowrap py-2 mt-3">
          {ProductStack[0].products.map((tech) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 px-6 py-3 mr-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800 font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={`${selectedCategory}-right`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-x-scroll scrollbar-hide"
      >
        <div className="flex animate-scroll-right whitespace-nowrap py-2 mb-3">
          {ProductStack[1].products.map((tech) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 px-6 py-3 mr-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800 font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MotionScroll;
