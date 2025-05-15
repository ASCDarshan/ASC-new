import { motion } from "framer-motion";
import { Container, Card, Badge } from "../../components/common";

const recruitmentProcess = [
  {
    title: "Application Review",
    duration: "1-2 days",
    description: "Initial screening of your application and resume",
    icon: "📝",
  },
  {
    title: "Technical Assessment",
    duration: "3-5 days",
    description: "Skills evaluation through practical assignments",
    icon: "💻",
  },
  {
    title: "Team Interview",
    duration: "1 day",
    description: "Discussion with potential team members",
    icon: "👥",
  },
  {
    title: "Final Discussion",
    duration: "1-2 days",
    description: "Offer discussion and documentation",
    icon: "🎉",
  },
];
const RecruitmentProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A transparent and efficient process designed to find the best talent
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />
            {recruitmentProcess.map((phase, index) => (
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

export default RecruitmentProcess;
