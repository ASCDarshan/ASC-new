import { motion } from "framer-motion";
import { Container, Card } from "../../components/common";

const OurDevelopment = ({ developmentProcess }) => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-gray-600">
            We follow a systematic approach to ensure the success of every
            project
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {developmentProcess.map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.desc}</p>
              </Card>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurDevelopment;
