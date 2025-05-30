import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGlobe, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Container, Card, Badge, Button } from "../common";

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
          <div className="relative h-72">
            <img
              alt={project.title}
              src={project.images?.[0]?.image}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <Container className="h-full flex flex-col justify-end pb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech?.id}
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.keyfeature.map((feature) => (
                        <li key={feature.id} className="flex items-start gap-3">
                          <span className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                            <svg
                              className="w-3 h-3"
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
                          </span>
                          <span className="text-gray-600">{feature.title}</span>
                        </li>
                      ))}
                    </ul>
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
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <FaGlobe className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.repository_url && (
                        <a
                          href={project.repository_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.case_study_url && (
                        <a
                          href={project.case_study_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                          <span>Case Study</span>
                        </a>
                      )}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.id}
                          className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span className="w-2 h-2 mr-2 rounded-full bg-primary-500"></span>
                          <span className="text-gray-600">{tech.name}</span>
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
