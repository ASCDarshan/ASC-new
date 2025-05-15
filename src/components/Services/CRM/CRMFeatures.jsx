import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";
import {
  FaUsers,
  FaChartBar,
  FaCogs,
  FaCloud,
  FaMobile,
  FaRegChartBar,
} from "react-icons/fa";

const crmModules = [
  {
    icon: <FaUsers />,
    title: "Contact Management",
    description:
      "Centralized customer data management with detailed profiles and interaction history",
  },
  {
    icon: <FaChartBar />,
    title: "Sales Pipeline",
    description:
      "Visual deal tracking and sales forecasting with automated workflows",
  },
  {
    icon: <FaCogs />,
    title: "Automation",
    description:
      "Streamlined business processes with smart automation triggers",
  },
  {
    icon: <FaRegChartBar />,
    title: "Analytics & Reports",
    description: "In-depth insights with customizable dashboards and reports",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    description: "Seamless integration with third-party tools and services",
  },
  {
    icon: <FaMobile />,
    title: "Mobile Access",
    description: "Access your CRM data on-the-go with mobile applications",
  },
];
const CRMFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful CRM Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our CRM solutions come packed with features designed to streamline
            your business operations and enhance customer relationships.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crmModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CRMFeatures;
