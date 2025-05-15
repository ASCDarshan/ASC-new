import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";
import { FaSearch, FaChartLine, FaTools, FaCogs } from "react-icons/fa";

const seoFeatures = [
  {
    icon: <FaSearch className="w-6 h-6" />,
    title: "Keyword Research",
    description:
      "In-depth analysis to target the most valuable search terms for your business",
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Performance Tracking",
    description: "Real-time monitoring of your SEO metrics and rankings",
  },
  {
    icon: <FaTools className="w-6 h-6" />,
    title: "Technical SEO",
    description:
      "Optimization of your website's technical aspects for better rankings",
  },
  {
    icon: <FaCogs className="w-6 h-6" />,
    title: "On-Page SEO",
    description:
      "Optimization of content and meta elements for maximum visibility",
  },
];

const SEOSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive SEO Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our SEO services are designed to help you achieve sustainable growth
            through improved search engine visibility.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SEOSolutions;
