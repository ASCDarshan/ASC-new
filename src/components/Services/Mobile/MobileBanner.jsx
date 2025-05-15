import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Button, Card, Badge } from "../../../components/common";
import phoneImg from "../../../assets/images/phone.png";

const stats = [
  { value: "100+", label: "Apps Delivered" },
  { value: "4.8★", label: "App Rating" },
  { value: "1M+", label: "Downloads" },
];
const MobileBanner = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const handleconsulting = () => {
    navigate("/contact");
  };

  const handleLearnmore = () => {
    navigate("/portfolio");
  };
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
      >
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
              Mobile App Development
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Transform Your Ideas Into Mobile Reality
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We craft beautiful, high-performance mobile applications that
              deliver exceptional user experiences across all platforms.
            </p>
            <div className="flex gap-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                onClick={handleconsulting}
              >
                Start Your Project
              </Button>
              <Button variant="outline" onClick={handleLearnmore}>
                View Portfolio
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
            className="relative max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6" />
              <Card className="p-8 backdrop-blur-sm">
                <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] ring-1 ring-gray-900/10">
                  <div className="absolute top-[0.8rem] left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full" />
                  <div className="absolute top-[2rem] bottom-[2rem] left-[0.8rem] right-[0.8rem] bg-white rounded-[2.25rem] overflow-hidden">
                    <img
                      src={phoneImg}
                      alt="App Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-[0.8rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full" />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MobileBanner;
