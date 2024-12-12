import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Badge } from "../common";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "crm", name: "CRM Systems" },
  { id: "healthcare", name: "Healthcare" },
  { id: "education", name: "Education" },
  { id: "mobile", name: "Mobile Apps" },
];

const projects = [
  {
    id: 1,
    title: "Gaushala Management System",
    category: "crm",
    tags: ["Python", "Django", "React"],
    image: "/api/placeholder/600/400",
    description:
      "Comprehensive management system for Gaushalas with donation tracking and cattle management.",
    gradient: "from-primary-400 to-primary-600",
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "healthcare",
    tags: ["Node.js", "React", "MongoDB"],
    image: "/api/placeholder/600/400",
    description:
      "End-to-end hospital management solution with patient records and appointment scheduling.",
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "education",
    tags: ["Django", "React", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    description:
      "Feature-rich LMS with course management and student progress tracking.",
    gradient: "from-accent-400 to-accent-600",
  },
  {
    id: 4,
    title: "Overseas Education CRM",
    category: "crm",
    tags: ["Node.js", "Vue.js", "MySQL"],
    image: "/api/placeholder/600/400",
    description:
      "CRM system for overseas education consultants with student application tracking.",
    gradient: "from-primary-400 to-primary-600",
  },
  {
    id: 5,
    title: "Healthcare Mobile App",
    category: "mobile",
    tags: ["React Native", "Node.js", "Firebase"],
    image: "/api/placeholder/600/400",
    description:
      "Mobile application for patient health monitoring and appointment booking.",
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    id: 6,
    title: "Education Portal",
    category: "education",
    tags: ["Python", "React", "AWS"],
    image: "/api/placeholder/600/400",
    description:
      "Online education portal with live classes and resource management.",
    gradient: "from-accent-400 to-accent-600",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section className="py-20 relative bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-secondary-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 text-lg font-normal mt-2">
              Showcasing Our Best Work
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our diverse range of successful projects that demonstrate
            our expertise in creating innovative digital solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-200/30"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-200/20">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="primary"
                              size="sm"
                              className={`bg-gradient-to-r ${project.gradient} text-white shadow-sm`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2">
                        View Details
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;
