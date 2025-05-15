import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";

const processSteps = [
  {
    step: "01",
    title: "Audit & Analysis",
    description:
      "Comprehensive analysis of your current SEO status and competitors",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Creating a customized SEO strategy based on analysis results",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Executing optimization techniques and content strategies",
  },
  {
    step: "04",
    title: "Monitoring & Adjustment",
    description: "Continuous monitoring and strategy refinement",
  },
];
const SEOProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach to improving your search engine rankings
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="p-6 h-full border-2 border-primary-100 hover:border-primary-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SEOProcess;
