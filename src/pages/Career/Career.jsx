import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Button, Card, Badge } from "../../components/common";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRegBuilding,
  FaRegHandshake,
  FaRegLightbulb,
  FaRegSmile,
} from "react-icons/fa";
import ajaxCall from "../../components/helpers/ajaxCall";
import { useNavigate } from "react-router-dom";
import JobApplication from "./JobApplication";


const benefits = [
  {
    icon: <FaRegBuilding className="w-6 h-6" />,
    title: "Modern Workplace",
    description: "State-of-the-art office with recreational areas",
  },
  {
    icon: <FaRegHandshake className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
  },
  {
    icon: <FaRegLightbulb className="w-6 h-6" />,
    title: "Learning & Growth",
    description: "Regular training sessions and learning opportunities",
  },
  {
    icon: <FaRegSmile className="w-6 h-6" />,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and family",
  },
];

const Careers = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("career/jobs/", setJobs);
    fetchData("career/departments/", (data) => {
      const allDepartments = [{ id: "all", name: "All Departments" }, ...data];
      setDepartments(allDepartments);
    });
  }, []);

  useEffect(() => {
    if (selectedDepartment === "all") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) => job.department.id === selectedDepartment
      );
      setFilteredJobs(filtered);
    }
  }, [selectedDepartment, jobs]);

  const fetchData = async (url, setData) => {
    setLoading(true);
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
        setData(response?.data || []);
        setLoading(false);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleLearnMore = () => {
    navigate("/about")
  };

  const handlePosition = () => {
    navigate("/careers")
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Join Our Team of Innovators
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 mt-2">
                Shape the Future of Technology
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Work with talented individuals who share your passion for
              innovation and excellence. Discover exciting opportunities to grow
              your career with us.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "50+", label: "Open Positions" },
                { value: "35+", label: "Countries" },
                { value: "96%", label: "Employee Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedDepartment === dept.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-200/50"
                  : "bg-primary-50 text-primary-600"
                  }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured Posts Grid */}
            {Loading ? (
              <div className="flex justify-center items-center w-full py-12">
                <div className="flex flex-col items-center">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
                  <p className="text-gray-600 text-lg">Loading Jobs...</p>
                </div>
              </div>
            ) :
              filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="primary"
                              className="bg-primary-100 text-primary-600"
                            >
                              {job.department.name}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-600"
                            >
                              {job.job_type.replace("_", " ").toUpperCase()}
                            </Badge>
                            {job.is_urgent && (
                              <Badge
                                variant="accent"
                                className="bg-red-100 text-red-600"
                              >
                                Urgent
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(job.posting_date).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>
                            {job.location.city}, {job.location.state},{" "}
                            {job.location.country}
                            {job.location.is_remote && " (Remote)"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaRegClock className="w-4 h-4" />
                          <span>{job.experience_range}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaRupeeSign className="w-4 h-4" />
                          <span>{job.salary_range}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.required_skills.map((skill) => (
                          <span
                            key={skill.id}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>

                    </Card>
                  </motion.div>
                ))) : (
                <div className="text-center text-gray-600 text-lg">
                  No Jobs for this category.
                </div>
              )}
          </div>
        </Container>
      </section>

      {/* job applications section */}

      <JobApplication />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join us and be part of a culture
              that values growth, innovation, and work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What is your recruitment process?",
                  answer:
                    "Our recruitment process typically includes initial screening, technical assessment, cultural fit interview, and final discussion. The entire process usually takes 2-3 weeks.",
                },
                {
                  question: "Do you offer remote work options?",
                  answer:
                    "Yes, we offer hybrid and remote work options depending on the role and team requirements. We believe in providing flexibility while maintaining collaborative efficiency.",
                },
                {
                  question: "What learning opportunities do you provide?",
                  answer:
                    "We offer regular training sessions, conference attendance opportunities, online course subscriptions, and dedicated learning time for personal development.",
                },
                {
                  question: "How do you support career growth?",
                  answer:
                    "We have a structured career development program with regular performance reviews, mentorship opportunities, and clear growth paths across technical and management tracks.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent and efficient process designed to find the best
              talent
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />

              {[
                {
                  title: "Application Review",
                  duration: "1-2 days",
                  description:
                    "Initial screening of your application and resume",
                  icon: "📝",
                },
                {
                  title: "Technical Assessment",
                  duration: "3-5 days",
                  description:
                    "Skills evaluation through practical assignments",
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
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-12 ${index % 2 === 0
                    ? "ml-[50%] pl-8"
                    : "mr-[50%] pr-8 text-right"
                    }`}
                >
                  <div
                    className={`absolute top-0 ${index % 2 === 0 ? "left-0" : "right-0"
                      } w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 ${index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                      }`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-lg">
                      {phase.icon}
                    </span>
                  </div>
                  <Card
                    className={`p-6 ${index % 2 === 0 ? "" : "flex flex-col items-end"
                      }`}
                  >
                    <Badge variant="primary" className="mb-2">
                      {phase.duration}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Your Journey With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our team of innovators and help us shape the future of
                technology. Explore our open positions and find your perfect
                role.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                  onClick={handlePosition}
                >
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg" onClick={handleLearnMore}>
                  Learn More About Us
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </motion.div>
  );
};

export default Careers;
