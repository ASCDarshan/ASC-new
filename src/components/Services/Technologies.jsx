import { motion } from "framer-motion";
import { Container, Card } from "../../components/common";

const Technologies = ({ technologies }) => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-600">
            We leverage the latest technologies to build robust and scalable
            solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-primary-600 font-semibold">{tech}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
