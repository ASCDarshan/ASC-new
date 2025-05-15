import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";

const steps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We analyze your business needs and processes",
  },
  {
    step: "02",
    title: "Custom Development",
    description: "Building your CRM solution with customized features",
  },
  {
    step: "03",
    title: "Data Migration",
    description: "Seamless transfer of your existing data",
  },
  {
    step: "04",
    title: "Training & Support",
    description: "Comprehensive training and ongoing support",
  },
];

const ImplementationProcess = () => {
  return (
    <section className="py-8 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured approach ensures a smooth transition to your new CRM
            system
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {steps.map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <Card className="p-6 ml-12">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                {index < 3 && (
                  <div className="absolute left-4 top-full w-0.5 h-8 bg-primary-200" />
                )}
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImplementationProcess;
