import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";

const industries = [
  {
    name: "Healthcare",
    icon: "🏥",
    solutions: ["Hospital Management", "Patient Records", "Telemedicine"],
  },
  {
    name: "Education",
    icon: "🎓",
    solutions: ["Learning Management", "Student Portal", "Assessment Systems"],
  },
  {
    name: "Non-Profit",
    icon: "🤝",
    solutions: [
      "Donation Management",
      "Volunteer Tracking",
      "Event Management",
    ],
  },
  {
    name: "Finance",
    icon: "💰",
    solutions: ["Payment Processing", "Financial Reporting", "Risk Management"],
  },
];
const IndustryExpertise = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solutions tailored for various industries with proven success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-500"
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
                      {solution}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustryExpertise;
