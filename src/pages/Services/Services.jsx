import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/common";
import { CTA } from "../../components/common";
import { Testimonials } from "../../components/Home";
import {
  FaSearch,
  FaDesktop,
  FaMobile,
  FaCheck,
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaHandshake,
  FaDatabase,
  FaChartLine,
  FaCode,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ajaxCall from "../../helpers/ajaxCall";
import ServiceBanner from "../../components/Services/ServiceBanner";
import Stats from "../../components/Services/Stats";
import OurService from "../../components/Services/OurService";
import WhyChoose from "../../components/Services/WhyChoose";
import OurDevelopment from "../../components/Services/OurDevelopment";
import Technologies from "../../components/Services/Technologies";
import Faq from "../../components/Services/Faq";

const stats = [
  { number: "98%", label: "Client Satisfaction" },
  { number: "150+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Expert Team Members" },
];

const industries = [
  "Healthcare",
  "E-commerce",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Non-Profit",
  "Finance",
  "Retail",
];

const servicesIcons = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    gradient: "from-primary-400 to-primary-600",
  },
  {
    icon: <FaDesktop className="w-8 h-8" />,
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    gradient: "from-accent-400 to-accent-600",
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    gradient: "from-primary-400 to-primary-600",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    gradient: "from-accent-400 to-accent-600",
  },
];

const chooseUs = [
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    desc: "Cutting-edge technology combined with creative problem-solving",
  },
  {
    icon: <FaCogs />,
    title: "Proven Process",
    desc: "Streamlined development methodology ensuring project success",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Highly skilled professionals with diverse industry experience",
  },
  {
    icon: <FaHandshake />,
    title: "Client-Focused",
    desc: "Dedicated support and collaboration throughout the project",
  },
];

const technologies = [
  "ReactJs",
  "NodeJs",
  "Python",
  "AWS",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Firebase",
  "Redux",
  "Django",
  "GraphQL",
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your requirements and project goals",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Designing the solution and creating project roadmap",
  },
  {
    step: "03",
    title: "Development",
    desc: "Building your solution with regular updates",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Testing, deployment and ongoing support",
  },
];

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary based on complexity and scope. Typically, small projects take 4-8 weeks, while larger projects can take 3-6 months. We'll provide a detailed timeline during the initial consultation.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer comprehensive maintenance and support packages for all our services. This includes regular updates, bug fixes, and technical support to ensure your solution continues to perform optimally.",
  },
  {
    q: "What is your development process?",
    a: "We follow an agile development methodology with regular client check-ins and iterations. This ensures transparency and allows for feedback throughout the development process.",
  },
  {
    q: "How do you ensure project quality?",
    a: "We implement rigorous quality assurance processes, including automated testing, code reviews, and thorough QA testing before delivery. We also maintain open communication channels for feedback and improvements.",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [servicess, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchData("services/services/", setServices);
  }, []);

  const fetchData = async (url, setData) => {
    setIsLoading(true);
    try {
      const response = await ajaxCall(
        url,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        },
        8000
      );
      if (response?.status === 200) {
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleconsulting = () => {
    navigate("/contact");
  };

  const handlePortfolio = () => {
    navigate("/portfolio");
  };

  const transformServiceData = (service) => ({
    ...service,
    fullDesc: service.detailed_description || service.description,
    features:
      service.feature_list ||
      service.features?.split(",").filter(Boolean) ||
      [],
    benefits: (service.benefits || "").split(",").filter(Boolean),
    technologies: [],
  });

  const getIconComponent = (iconName) => {
    const icons = {
      FaSearch: FaSearch,
      FaDesktop: FaDesktop,
      FaMobile: FaMobile,
      FaChartLine: FaChartLine,
      FaDatabase: FaDatabase,
      FaCode: FaCode,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div>
      <ServiceBanner
        handleconsulting={handleconsulting}
        handlePortfolio={handlePortfolio}
      />
      <Stats stats={stats} />
      <OurService
        servicess={servicess}
        isLoading={isLoading}
        setSelectedService={setSelectedService}
        transformServiceData={transformServiceData}
        servicesIcons={servicesIcons}
      />
      <WhyChoose chooseUs={chooseUs} industries={industries} />
      <OurDevelopment developmentProcess={developmentProcess} />
      <Technologies technologies={technologies} />
      <Testimonials />
      <Faq faqs={faqs} />
      <CTA />
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="relative h-72 bg-gray-200">
              <img
                alt={selectedService.title}
                src={selectedService.images?.[0]?.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-600/10 rounded-lg flex items-center justify-center text-primary-600">
                      {getIconComponent(selectedService.icon)}
                    </div>
                    <h2 className="text-3xl font-semibold text-white">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white hover:bg-black/20 p-2 rounded-full"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-gray-600 mb-8">
                    {selectedService.fullDesc || selectedService.description}
                  </p>
                  {selectedService.features.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedService.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <FaCheck className="text-primary-600 flex-shrink-0" />
                            <span>{feature.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedService.benefits.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 text-gray-600"
                          >
                            <FaCheck className="text-primary-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50 flex justify-end gap-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
                onClick={handleconsulting}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
