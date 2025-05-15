import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";
import { Container, Badge, Card } from "../../components/common";

const values = [
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Client-Centric",
    description:
      "Every decision we make is guided by our commitment to client success.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We continuously explore and implement cutting-edge technologies.",
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Excellence",
    description:
      "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Integrity",
    description:
      "Trust and transparency are the foundations of our relationships.",
  },
];
const Values = (fadeIn) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div {...fadeIn} className="text-center mb-16">
          <Badge
            variant="primary"
            className="mb-4 bg-primary-100 text-primary-600 px-4 py-2"
          >
            Our Core Values
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Drives Us Forward
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our values shape every decision we make and every solution we
            deliver, ensuring consistent excellence in everything we do.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;
