import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";
import { FaRocket, FaShieldAlt, FaTools, FaCloud } from "react-icons/fa";

const techStack = [
  { name: "React Native", level: 95 },
  { name: "Flutter", level: 90 },
  { name: "Swift", level: 85 },
  { name: "Kotlin", level: 88 },
  { name: "Firebase", level: 92 },
];

const features = [
  {
    icon: <FaRocket />,
    title: "High Performance",
    description: "Optimized apps that deliver exceptional speed",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure",
    description: "Enterprise-grade security measures",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    description: "Seamless cloud service integration",
  },
  {
    icon: <FaTools />,
    title: "Scalable",
    description: "Built to grow with your business",
  },
];
const TechnologyStack = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
            <p className="text-gray-600 mb-8">
              We use the latest technologies to build robust and scalable mobile
              applications
            </p>
            <div className="space-y-6">
              {techStack.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{tech.name}</span>
                    <span className="text-primary-600">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TechnologyStack;
