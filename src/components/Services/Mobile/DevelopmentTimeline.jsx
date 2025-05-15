import { motion } from "framer-motion";
import { Container, Card, Badge } from "../../../components/common";

const developmentPhases = [
  {
    title: "Project Kickoff",
    duration: "Week 1",
    description: "Requirements gathering and project planning",
    icon: "🚀",
  },
  {
    title: "UI/UX Design",
    duration: "Weeks 2-3",
    description: "Creating wireframes and visual designs",
    icon: "🎨",
  },
  {
    title: "Core Development",
    duration: "Weeks 4-9",
    description: "Building the main features and functionality",
    icon: "💻",
  },
  {
    title: "Testing & QA",
    duration: "Weeks 10-11",
    description: "Thorough testing and bug fixing",
    icon: "🔍",
  },
  {
    title: "Launch Preparation",
    duration: "Week 12",
    description: "Store submission and deployment",
    icon: "🎯",
  },
];

const DevelopmentTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A transparent view of your app development journey
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
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
                  className={`p-6 ${
                    index % 2 === 0 ? "" : "flex flex-col items-end"
                  }`}
                >
                  <Badge variant="primary" className="mb-2">
                    {phase.duration}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DevelopmentTimeline;
