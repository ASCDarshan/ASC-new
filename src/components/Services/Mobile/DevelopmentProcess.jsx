import { motion } from "framer-motion";
import { Container, Card, Badge } from "../../../components/common";
const developmentProcess = [
  {
    phase: "Discovery",
    description: "Understanding your requirements and planning the solution",
    duration: "1-2 Weeks",
    icon: "🎯",
  },
  {
    phase: "Design",
    description: "Creating intuitive user interfaces and experiences",
    duration: "2-3 Weeks",
    icon: "🎨",
  },
  {
    phase: "Development",
    description: "Building your application with clean, efficient code",
    duration: "8-12 Weeks",
    icon: "⚙️",
  },
  {
    phase: "Testing",
    description: "Rigorous testing across devices and platforms",
    duration: "2-3 Weeks",
    icon: "🔍",
  },
  {
    phase: "Deployment",
    description: "Launching your app to the stores and monitoring performance",
    duration: "1-2 Weeks",
    icon: "🚀",
  },
];
const DevelopmentProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach to turning your app idea into reality
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {developmentProcess.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <Card className="p-6 pl-20">
                <div
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 
                            rounded-full flex items-center justify-center text-2xl"
                >
                  {phase.icon}
                </div>
                {index < 4 && (
                  <div className="absolute left-9 top-[calc(50%+2rem)] w-0.5 h-8 bg-primary-200" />
                )}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{phase.phase}</h3>
                  <Badge
                    variant="primary"
                    className="bg-primary-100 text-primary-600"
                  >
                    {phase.duration}
                  </Badge>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DevelopmentProcess;
