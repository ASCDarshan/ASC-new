import { motion } from "framer-motion";
import { Container, Card } from "../../components/common";
import {
  FaRegBuilding,
  FaRegHandshake,
  FaRegLightbulb,
  FaRegSmile,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaRegBuilding className="w-6 h-6" />,
    title: "Modern Workplace",
    description: "State-of-the-art office with recreational areas",
  },
  {
    icon: <FaRegHandshake className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
  },
  {
    icon: <FaRegLightbulb className="w-6 h-6" />,
    title: "Learning & Growth",
    description: "Regular training sessions and learning opportunities",
  },
  {
    icon: <FaRegSmile className="w-6 h-6" />,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and family",
  },
];

const WhyJoin = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer more than just a job. Join us and be part of a culture that
            values growth, innovation, and work-life balance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyJoin;
