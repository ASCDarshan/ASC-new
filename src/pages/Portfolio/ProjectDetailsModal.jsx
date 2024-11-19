import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Badge, Button } from "../../components/common";
import { FaTimes, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-10 z-50 overflow-hidden rounded-2xl bg-white"
                style={{ maxWidth: "1200px", margin: "auto" }}
            >
                <div className="h-full flex flex-col">
                    {/* Modal Header */}
                    <div className="relative h-72">
                        <img alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <Container className="h-full flex flex-col justify-end pb-6">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech.id}
                                            variant="primary"
                                            className={`bg-gradient-to-r ${project.gradient} text-white`}
                                        >
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </Container>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="flex-1 overflow-auto">
                        <Container className="py-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            Overview
                                        </h3>
                                        <p className="text-gray-600">{project.description}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            Detailed Description
                                        </h3>
                                        <p className="text-gray-600">
                                            {project.detailed_description}
                                        </p>
                                    </div>

                                    {project.images.length > 1 && (
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                Project Gallery
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {project.images.slice(1).map((image) => (
                                                    <img
                                                        key={image.id}
                                                        src={image.image}
                                                        alt={image.alt_text}
                                                        className="rounded-lg w-full h-48 object-cover"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <Card className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Project Details
                                        </h3>
                                        <div className="space-y-3">
                                            {project.client && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Client</span>
                                                    <span className="font-medium">{project.client}</span>
                                                </div>
                                            )}
                                            {/* {project.duration && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Duration</span>
                                                    <span className="font-medium">
                                                        {project.duration} months
                                                    </span>
                                                </div>
                                            )}
                                            {project.completion_date && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Completed</span>
                                                    <span className="font-medium">
                                                        {new Date(
                                                            project.completion_date
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            )} */}
                                        </div>
                                    </Card>

                                    <Card className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Technology Stack
                                        </h3>
                                        <div className="space-y-3">
                                            {project.technologies.map((tech) => (
                                                <div
                                                    key={tech.id}
                                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    <span className="text-gray-600">{tech.name}</span>
                                                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>

                                    <div className="flex gap-4">
                                        {project.live_url && (
                                            <Button
                                                variant="primary"
                                                className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                                                onClick={() => window.open(project.live_url, "_blank")}
                                            >
                                                <FaGlobe className="mr-2" />
                                                View Live
                                            </Button>
                                        )}
                                        {project.case_study_url && (
                                            <Button
                                                variant="outline"
                                                className="flex-1"
                                                onClick={() =>
                                                    window.open(project.case_study_url, "_blank")
                                                }
                                            >
                                                <FaExternalLinkAlt className="mr-2" />
                                                Case Study
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;