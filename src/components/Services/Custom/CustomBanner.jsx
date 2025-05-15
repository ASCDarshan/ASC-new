import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Button, Card, Badge } from "../../../components/common";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const code = [
  { color: "text-blue-500", code: "// Custom Solutions" },
  {
    color: "text-purple-500",
    code: "function initializeProject() {",
  },
  {
    color: "text-green-500",
    code: "const solution = new CustomSolution({",
  },
  {
    color: "text-gray-600",
    code: 'client:"YourBusiness",',
  },
  {
    color: "text-gray-600",
    code: 'technology: "Latest",',
  },
  {
    color: "text-gray-600",
    code: 'scalability: "Infinite"',
  },
  { color: "text-green-500", code: "" },
  { color: "text-purple-500", code: "" },
];
const CustomBanner = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const handleconsulting = () => {
    navigate("/contact");
  };

  const handleLearnmore = () => {
    navigate("/services");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </motion.div>
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="primary"
              className="mb-6 bg-primary-100 text-primary-600 px-4 py-2"
            >
              Custom Development
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Tailored Solutions for Your Unique Challenges
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in developing custom software solutions that
              perfectly align with your business needs and drive digital
              transformation.
            </p>
            <div className="flex gap-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                onClick={handleconsulting}
              >
                Discuss Your Project
              </Button>
              <Button variant="outline" onClick={handleLearnmore}>
                Explore Solutions
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
              <Card className="p-8 backdrop-blur-sm">
                <div className="space-y-4 font-mono text-sm">
                  {code.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${line.color}`}
                    >
                      {line.code}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CustomBanner;
