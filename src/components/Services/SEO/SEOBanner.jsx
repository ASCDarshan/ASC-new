import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Button, Card, Badge } from "../../common";

const stats = [
  { value: "150+", label: "SEO Projects" },
  { value: "85%", label: "Avg. Traffic Increase" },
  { value: "95%", label: "Client Satisfaction" },
];

const stats2 = [
  {
    label: "Keyword Rankings",
    value: 85,
    color: "bg-primary-500",
  },
  {
    label: "Organic Traffic",
    value: 92,
    color: "bg-secondary-500",
  },
  {
    label: "Domain Authority",
    value: 78,
    color: "bg-accent-500",
  },
];
const SeoBanner = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const handleconsulting = () => {
    navigate("/contact");
  };

  const handleLearnmore = () => {
    navigate("/services");
  };
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
              SEO Services
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Boost Your Online Visibility
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Drive organic traffic and increase your search engine rankings
              with our data-driven SEO strategies and advanced optimization
              techniques.
            </p>
            <div className="flex gap-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                onClick={handleconsulting}
              >
                Get Started
              </Button>
              <Button variant="outline" onClick={handleLearnmore}>
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
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
                <div className="space-y-6">
                  {stats2.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${metric.color}`}
                        />
                      </div>
                    </div>
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

export default SeoBanner;
