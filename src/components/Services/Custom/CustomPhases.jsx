import { motion } from "framer-motion";
import { Container, Card, Badge } from "../../../components/common";

const phases = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    description: "Understanding your requirements, challenges, and objectives",
    details: [
      "Business analysis",
      "Technical requirements",
      "Solution architecture",
      "Project planning",
    ],
    icon: "🎯",
  },
  {
    phase: "Design & Planning",
    duration: "Week 2-3",
    description: "Creating detailed technical specifications and architecture",
    details: [
      "System architecture",
      "Database design",
      "API specifications",
      "Technology stack selection",
    ],
    icon: "📝",
  },
  {
    phase: "Development",
    duration: "Week 4-10",
    description: "Agile development with regular updates and demonstrations",
    details: [
      "Sprint planning",
      "Regular deployments",
      "Code reviews",
      "Quality assurance",
    ],
    icon: "💻",
  },
  {
    phase: "Testing",
    duration: "Week 11-12",
    description: "Comprehensive testing and quality assurance",
    details: [
      "Unit testing",
      "Integration testing",
      "Performance testing",
      "Security testing",
    ],
    icon: "🔍",
  },
  {
    phase: "Deployment",
    duration: "Week 13",
    description: "Smooth deployment and system integration",
    details: [
      "Production deployment",
      "System integration",
      "Performance monitoring",
      "Documentation",
    ],
    icon: "🚀",
  },
];
const CustomPhases = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "ml-[50%] pl-8" : "mr-[50%] pr-8 text-right"
                }`}
              >
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0" : "right-0"
                  } w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 ${
                    index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-lg">
                    {phase.icon}
                  </span>
                </div>
                <Card
                  className={`p-6 hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? "" : "flex flex-col items-end"
                  }`}
                >
                  <Badge variant="primary" className="mb-2">
                    {phase.duration}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul
                    className={`space-y-2 text-sm ${
                      index % 2 === 0 ? "" : "text-right"
                    }`}
                  >
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-primary-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CustomPhases;
