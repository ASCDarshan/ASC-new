// src/pages/Portfolio.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Container, Card, Badge, Button } from '../components/common';
import { CTA } from '../components/sections';
import { FaTimes, FaGlobe, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'non-profit', name: 'Non-Profit', icon: '🤝' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      category: 'healthcare',
      image: '/api/placeholder/600/400',
      shortDesc: 'Comprehensive hospital management solution',
      fullDesc: 'A complete hospital management system with patient records, appointment scheduling, and billing management.',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
      features: ['Patient Records Management', 'Appointment Scheduling', 'Billing System'],
      results: ['50% reduction in administrative tasks', 'Improved patient satisfaction'],
      links: { live: 'https://example.com', github: 'https://github.com', case_study: '/case-study/hospital' },
      stats: { users: '1000+', transactions: '50K+', uptime: '99.9%' },
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      category: 'education',
      image: '/api/placeholder/600/400',
      shortDesc: 'Online platform for interactive courses and training programs',
      fullDesc: 'An all-in-one learning platform offering interactive courses, assessments, and certifications.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      features: ['Course Management', 'Live Classes', 'Progress Tracking'],
      results: ['75% course completion rate', 'Enhanced learner engagement'],
      links: { live: 'https://elearning.com', github: 'https://github.com', case_study: '/case-study/elearning' },
      stats: { users: '5000+', courses: '200+', uptime: '99%' },
      gradient: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      title: 'Crowdfunding Platform for NGOs',
      category: 'non-profit',
      image: '/api/placeholder/600/400',
      shortDesc: 'A platform to connect donors with social causes',
      fullDesc: 'Empowers non-profits to raise funds through campaigns and manage donor relationships.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'React'],
      features: ['Campaign Management', 'Payment Gateway Integration', 'Donor Management'],
      results: ['Over $1M raised for social causes', 'Improved donor engagement'],
      links: { live: 'https://ngoplatform.com', github: 'https://github.com', case_study: '/case-study/non-profit' },
      stats: { campaigns: '100+', donors: '10K+', uptime: '99.5%' },
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Enterprise Resource Planning System',
      category: 'enterprise',
      image: '/api/placeholder/600/400',
      shortDesc: 'Streamlined operations with a powerful ERP solution',
      fullDesc: 'A robust ERP system to manage business processes across departments efficiently.',
      technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Angular'],
      features: ['Inventory Management', 'Financial Reporting', 'Supply Chain Management'],
      results: ['30% increase in operational efficiency', 'Improved decision-making'],
      links: { live: 'https://erp.com', github: 'https://github.com', case_study: '/case-study/enterprise' },
      stats: { clients: '200+', transactions: '1M+', uptime: '99.9%' },
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      id: 5,
      title: 'Healthcare Mobile App',
      category: 'healthcare',
      image: '/api/placeholder/600/400',
      shortDesc: 'Mobile app for health tracking and doctor consultations',
      fullDesc: 'An app enabling users to track health metrics and consult with doctors remotely.',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      features: ['Health Tracking', 'Doctor Consultation', 'Appointment Scheduling'],
      results: ['Increased user engagement', 'Reduced clinic visits by 30%'],
      links: { live: 'https://healthapp.com', github: 'https://github.com', case_study: '/case-study/healthcare-app' },
      stats: { downloads: '50K+', users: '10K+', uptime: '98%' },
      gradient: 'from-red-400 to-red-600',
    },
    {
      id: 6,
      title: 'Virtual Classroom System',
      category: 'education',
      image: '/api/placeholder/600/400',
      shortDesc: 'Real-time virtual classroom for remote learning',
      fullDesc: 'A platform providing virtual classroom experiences with live classes and collaborative tools.',
      technologies: ['Vue.js', 'Firebase', 'Node.js'],
      features: ['Live Video Classes', 'Whiteboard Tools', 'Chat and Collaboration'],
      results: ['Increased student participation', 'Higher course completion rate'],
      links: { live: 'https://virtualclassroom.com', github: 'https://github.com', case_study: '/case-study/virtual-classroom' },
      stats: { classes: '500+', students: '10K+', uptime: '99%' },
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 7,
      title: 'CRM for Non-Profit Organizations',
      category: 'non-profit',
      image: '/api/placeholder/600/400',
      shortDesc: 'Manage donors and campaigns effectively',
      fullDesc: 'A CRM designed specifically for non-profits to manage relationships with donors and volunteers.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      features: ['Donor Management', 'Campaign Analytics', 'Volunteer Management'],
      results: ['Increased donor retention', 'Improved campaign effectiveness'],
      links: { live: 'https://crm-nonprofit.com', github: 'https://github.com', case_study: '/case-study/nonprofit-crm' },
      stats: { campaigns: '300+', donors: '20K+', uptime: '99.8%' },
      gradient: 'from-teal-400 to-teal-600',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-secondary-100 opacity-90" />
          <div className="absolute inset-0">
            {/* Animated background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </motion.div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of successful projects across various industries.
            </p>
          </motion.div>
        </Container>
      </section>

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
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100'
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

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
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="primary"
                                className={`bg-gradient-to-r ${project.gradient} text-white`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.shortDesc}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex gap-4">
                          {project.stats && Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-primary-600 font-semibold">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-10 z-50 overflow-hidden rounded-2xl bg-white"
              style={{ maxWidth: '1200px', margin: 'auto' }}
            >
              <div className="h-full flex flex-col">
                {/* Modal Header */}
                <div className="relative h-72">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <Container className="h-full flex flex-col justify-end pb-6">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="primary"
                            className={`bg-gradient-to-r ${selectedProject.gradient} text-white`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Container>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
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
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                          <p className="text-gray-600">{selectedProject.fullDesc}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                          <ul className="space-y-3">
                            {selectedProject.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Results & Impact</h3>
                          <ul className="space-y-3">
                            {selectedProject.results.map((result) => (
                              <li key={result} className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                  </svg>
                                </span>
                                <span className="text-gray-600">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                          <div className="space-y-3">
                            {Object.entries(selectedProject.links).map(([key, url]) => (
                              <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                              >
                                {key === 'live' && <FaGlobe className="w-5 h-5" />}
                                {key === 'github' && <FaGithub className="w-5 h-5" />}
                                {key === 'case_study' && <FaExternalLinkAlt className="w-5 h-5" />}
                                <span className="capitalize">{key.replace('_', ' ')}</span>
                              </a>
                            ))}
                            </div>
                        </Card>

                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                          <div className="space-y-3">
                            {selectedProject.technologies.map((tech) => (
                              <div
                                key={tech}
                                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                              >
                                <span className="text-gray-600">{tech}</span>
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                              </div>
                            ))}
                          </div>
                        </Card>

                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Stats</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(selectedProject.stats).map(([key, value]) => (
                              <div
                                key={key}
                                className="p-4 rounded-lg bg-gray-50 text-center"
                              >
                                <div className="text-2xl font-bold text-primary-600">{value}</div>
                                <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                              </div>
                            ))}
                          </div>
                        </Card>

                        <div className="flex gap-4">
                          <Button 
                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                            onClick={() => window.open(selectedProject.links.live, '_blank')}
                          >
                            <FaGlobe className="mr-2" />
                            View Live
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex-1"
                            onClick={() => window.open(selectedProject.links.case_study, '_blank')}
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Projects Completed', value: '150+', icon: '🚀' },
              { label: 'Happy Clients', value: '50+', icon: '😊' },
              { label: 'Team Members', value: '25+', icon: '👥' },
              { label: 'Years Experience', value: '10+', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise
              in custom software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline"
                size="lg"
              >
                View More Work
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  );
};

export default Portfolio;