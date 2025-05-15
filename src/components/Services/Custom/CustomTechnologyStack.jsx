import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";

const technologies = {
  frontend: ["React", "Vue.js", "Angular", "Next.js"],
  backend: ["Node.js", "Python", "Java", "Go"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  cloud: ["AWS", "Azure", "Google Cloud", "Digital Ocean"],
};

const CustomTechnologyStack = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable
            solutions
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomTechnologyStack;
