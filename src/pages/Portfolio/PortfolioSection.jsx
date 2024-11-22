import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Button } from "../../components/common";
import ajaxCall from "../../components/helpers/ajaxCall";
import ProjectDetailsModal from "./ProjectDetailsModal";

const categories = [
    { id: "all", name: "All Projects", icon: "🌟" },
    {
        id: "health-care",
        name: "Health Care",
        icon: "🏥",
        products: [
            "Appointment Booking System",
            "Patient Management System",
            "Website For Doctors and Hospitals",
        ],
    },
    {
        id: "education",
        name: "Education",
        icon: "🎓",
        products: [
            "Learning Management System",
            "Attendance Tracking",
            "Website for Schools and Universities",
            "Education CRM",
            "Alumni Management System",
            "SEO",
        ],
    },
    {
        id: "non-profit",
        name: "Non-Profit",
        icon: "🤝",
        products: [
            "Chatbot Development and Training",
            "Payment Gateway Integration",
            "Event Management Portal",
            "Loyalty Management System",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        icon: "🏢",
        products: ["CRM", "SEO", "Website"],
    },
];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const [project, setProject] = useState([]);
    useEffect(() => {
        fetchData("portfolio/projects/", setProject);
    }, []);

    const fetchData = async (url, setData) => {
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
            } else {
                console.error("Fetch error:", response);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    const filteredProjects =
        selectedCategory === "all"
            ? project
            : project.filter(
                (project) => project.category.identifier === selectedCategory
            );
    const currentCategory =
        categories.find((cat) => cat.id === selectedCategory) || categories[0];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
        >
            {/* Portfolio Content */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <Container>
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 mb-16"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                  px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  flex items-center gap-2 backdrop-blur-sm
                  ${selectedCategory === category.id
                                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                                        : "bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
                                    }
                `}
                            >
                                <span className="text-lg">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>

                    {selectedCategory !== "all" && (
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-16 text-center"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                                Our Product Stack
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {currentCategory.products.map((tech) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <span className="text-gray-800 font-medium">{tech}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Card
                                        className="h-full overflow-hidden bg-white/80 backdrop-blur-sm
                            hover:shadow-2xl hover:shadow-primary-200/20 transition-all duration-500
                            border border-gray-100 hover:border-primary-200"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={
                                                    project.images?.[0]?.image ||
                                                    "/api/placeholder/400/320"
                                                }
                                                alt={project.images?.[0]?.alt_text || project.title}
                                                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4 right-4"></div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {project.description ||
                                                    project.description?.slice(0, 150)}
                                            </p>
                                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                                <div className="flex gap-4">
                                                    {project.technologies?.slice(0, 3).map((tech) => (
                                                        <div
                                                            key={tech.id || tech.name}
                                                            className="text-center"
                                                        >
                                                            <div className="text-primary-600 font-semibold">
                                                                {tech.name}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                                                    onClick={() => setSelectedProject(project)}
                                                >
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </section>

            {selectedProject && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </motion.div>
    );
};

export default PortfolioSection;
