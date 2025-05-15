import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaCloud, FaLaptopCode } from "react-icons/fa";
import { Container, Card } from "../../../components/common";

const solutions = [
  {
    icon: <FaDatabase className="w-6 h-6" />,
    title: "Enterprise Systems",
    description:
      "Custom enterprise solutions tailored to your business processes",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaServer className="w-6 h-6" />,
    title: "Web Applications",
    description: "Scalable and responsive web applications",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaCloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "Cloud-native applications and microservices",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Integration Services",
    description: "Seamless integration with existing systems",
    gradient: "from-red-500 to-red-600",
  },
];
const CustomSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Custom Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive custom solutions tailored to your specific
            needs
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomSolutions;
