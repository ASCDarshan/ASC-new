import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";
import { FaAndroid, FaApple, FaCode, FaBolt } from "react-icons/fa";

const capabilities = [
  {
    icon: <FaAndroid />,
    title: "Native Android",
    description: "High-performance Android apps with native capabilities",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FaApple />,
    title: "Native iOS",
    description: "Sleek and powerful iOS applications",
    color: "from-gray-700 to-gray-800",
  },
  {
    icon: <FaCode />,
    title: "Cross-Platform",
    description: "Cost-effective solutions that work on all platforms",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaBolt />,
    title: "PWA",
    description: "Progressive Web Apps for broader reach",
    color: "from-purple-500 to-purple-600",
  },
];

const DevelopmentCapabilities = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Development Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional mobile experiences across all major platforms
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full group hover:shadow-xl transition-all duration-300">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${capability.color} 
                             flex items-center justify-center text-white text-2xl
                             transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DevelopmentCapabilities;
