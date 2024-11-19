import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Card, Button } from "../../components/common";
import { CTA, Testimonials } from "../../components/sections";
import {
  FaSearch,
  FaDesktop,
  FaMobile,
  FaCheck,
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "seo",
    icon: <FaSearch className="w-8 h-8" />,
    title: "SEO Optimization",
    shortDesc: "Boost your online visibility with data-driven SEO strategies.",
    fullDesc:
      "Comprehensive SEO services to improve your search engine rankings and drive organic traffic.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Content Strategy",
      "Performance Tracking",
      "Local SEO Optimization",
      "Mobile SEO",
      "Link Building Strategy",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Google Search Console",
      "Moz",
      "Screaming Frog",
    ],
    benefits: [
      "Increased organic traffic",
      "Higher conversion rates",
      "Better ROI on marketing",
      "Enhanced brand visibility",
    ],
  },
  {
    id: "crm",
    icon: <FaDesktop className="w-8 h-8" />,
    title: "CRM Development",
    shortDesc: "Custom CRM solutions for improved business operations.",
    fullDesc:
      "Tailored CRM systems that streamline your business processes and enhance customer relationships.",
    features: [
      "Contact Management",
      "Sales Pipeline Tracking",
      "Reporting & Analytics",
      "Email Integration",
      "Task Automation",
      "Customer Support Integration",
      "Mobile Access",
      "Custom Workflows",
    ],
    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    benefits: [
      "Improved customer retention",
      "Streamlined operations",
      "Data-driven decisions",
      "Enhanced team collaboration",
    ],
  },
  {
    id: "mobile",
    icon: <FaMobile className="w-8 h-8" />,
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile applications.",
    fullDesc:
      "Cutting-edge mobile applications that provide seamless user experiences across all platforms.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support",
      "Push Notifications",
      "Offline Functionality",
      "Analytics Integration",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Node.js", "MongoDB"],
    benefits: [
      "Wider market reach",
      "Enhanced user engagement",
      "Improved brand loyalty",
      "Competitive advantage",
    ],
  },
  // Add other services similarly...
];

const stats = [
  { number: "98%", label: "Client Satisfaction" },
  { number: "200+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Expert Team Members" },
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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate()

  const handleconsulting = () => {
    navigate("/contact")
  }

  const handlePortfolio = () => {
    navigate("/portfolio")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-primary/5 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <Container className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                With Our Digital Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              We deliver cutting-edge technology solutions that drive growth,
              enhance efficiency, and create lasting competitive advantages.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" variant="primary" onClick={handleconsulting}>
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={handlePortfolio}>
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600">
              From concept to execution, we provide end-to-end solutions
              tailored to your specific needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer hover:-translate-y-2 transition-all duration-300
                            hover:shadow-xl hover:shadow-primary-100/50"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                    <Button variant="primary" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
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
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-primary-600 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheck className="text-primary-200" />
                      <span>{industry}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600">
              We follow a systematic approach to ensure the success of every
              project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
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
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600">
              We leverage the latest technologies to build robust and scalable
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React",
              "Node.js",
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
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-primary-600 font-semibold">{tech}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your project and see how we can help
              transform your business
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Details Modal */}
      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center text-primary-600">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 p-1"
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

              <p className="text-gray-600 mb-8">{selectedService.fullDesc}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FaCheck className="text-primary-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FaCheck className="text-primary-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  className="flex-1 bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
                >
                  Get Started
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <CTA />
    </motion.div>
  );
};

export default Services;
