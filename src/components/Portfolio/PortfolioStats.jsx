import { motion } from "framer-motion";
import { Container } from "../../components/common";

const stats = [
  { label: "Projects Completed", value: "150+", icon: "🚀" },
  { label: "Happy Clients", value: "50+", icon: "😊" },
  { label: "Team Members", value: "25+", icon: "👥" },
  { label: "Years Experience", value: "10+", icon: "⭐" },
];
const PortfolioStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioStats;
