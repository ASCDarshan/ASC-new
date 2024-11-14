import { useState } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { Container, Card, Badge, Button } from "../../components/common";
import { FaTimes, FaGlobe, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NarayanImg from "../../assets/images/Images/OurSolutions/Helthcare/PMS.png";
import SMHRI from "../../assets/images/Images/OurSolutions/Helthcare/ABS.jpg";
import DentArtistry from "../../assets/images/Images/OurSolutions/Helthcare/WDH.png";
import StudyStreak from "../../assets/images/Images/OurSolutions/Education/AT.png";
import OecIndia from "../../assets/images/Images/OurSolutions/Education/OEC.png";
import Edustation from "../../assets/images/Images/OurSolutions/Education/LMS.png";
import Bhavans from "../../assets/images/Images/OurSolutions/Non-Profit/Event.png";
import Indraprasthfoundation from "../../assets/images/Images/OurSolutions/Education/LMS.png";
import ESPI from "../../assets/images/Images/OurSolutions/Education/WSU.jpg";
import ESPIonline from "../../assets/images/Images/OurSolutions/Helthcare/ABS.jpg";
import flyUrDream from "../../assets/images/Images/OurSolutions/Retail/CRM.png";
import Gaushala from "../../assets/images/Images/OurSolutions/Retail/CRM.png";

const categories = [
    { id: "all", name: "All Projects", icon: "🌟" },
    {
        id: "healthcare",
        name: "Healthcare",
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

const projects = [
    {
        id: 1,
        title: "Narayan Eye Hospital - Tajpura",
        category: "healthcare",
        image: NarayanImg,
        shortDesc: "Quality eye care at Narayan Eye Hospital.",
        fullDesc:
            "Narayan Eye Hospital in Tajpura offers quality, affordable eye care with advanced treatments and skilled ophthalmologists.",
        technologies: ["PHP", "MySql", "Wordpress"],
        features: [
            "Patient Records Management",
            "Appointment Scheduling",
            "Billing System",
        ],
        results: [
            "50% reduction in administrative tasks",
            "Improved patient satisfaction",
        ],
        links: {
            live: "https://narayaneyehospital.org/",
            github: "#",
            case_study: "#",
        },
        stats: { users: "1000+", transactions: "50K+", uptime: "99.9%" },
        gradient: "from-blue-400 to-blue-600",
    },
    {
        id: 2,
        title: "StudyStreak",
        category: "education",
        image: StudyStreak,
        shortDesc: "Achieve academic goals with Studystreak.",
        fullDesc:
            "Studystreak is your partner in achieving academic success through consistent study habits and progress tracking. With personalized plans and motivational tools, Studystreak helps you stay focused, reach milestones, and build lasting study routines.",
        technologies: ["React", "Node", "Python", "Tailwind"],
        features: ["Course Management", "Live Classes", "Progress Tracking"],
        results: ["75% course completion rate", "Enhanced learner engagement"],
        links: {
            live: "https://studystreak.in/",
            github: "#",
            case_study: "#",
        },
        stats: { users: "5000+", courses: "200+", uptime: "99%" },
        gradient: "from-green-400 to-green-600",
    },
    {
        id: 3,
        title: "Bhavansalumniassociation",
        category: "non-profit",
        image: Bhavans,
        shortDesc: "Connecting Bhavan's alumni for life.",
        fullDesc:
            "Bhavans Alumni Association fosters lifelong connections among alumni, providing a vibrant network for personal and professional growth. Through events, mentorship, and community initiatives, it strengthens bonds and supports Bhavan’s legacy.",
        technologies: ["MUI", "Python", "React"],
        features: [
            "Campaign Management",
            "Payment Gateway Integration",
            "Donor Management",
        ],
        results: ["Over $1M raised for social causes", "Improved donor engagement"],
        links: {
            live: "https://bhavansalumniassociation.org/",
            github: "#",
            case_study: "#",
        },
        stats: { campaigns: "100+", donors: "10K+", uptime: "99.5%" },
        gradient: "from-pink-400 to-pink-600",
    },
    {
        id: 4,
        title: "ESPI CRM",
        category: "enterprise",
        image: ESPI,
        shortDesc: "Streamlined customer management with ESPI CRM.",
        fullDesc:
            "ESPI CRM offers a comprehensive solution for managing customer relationships, enhancing productivity, and streamlining sales processes. With intuitive tools and data insights, it helps businesses build stronger customer connections and drive growth.",
        technologies: ["Python", "Django"],
        features: [
            "Inventory Management",
            "Financial Reporting",
            "Supply Chain Management",
        ],
        results: [
            "30% increase in operational efficiency",
            "Improved decision-making",
        ],
        links: {
            live: "https://espicrm.co/admin",
            github: "#",
            case_study: "#",
        },
        stats: { clients: "200+", transactions: "1M+", uptime: "99.9%" },
        gradient: "from-purple-400 to-purple-600",
    },
    {
        id: 5,
        title: "SMHRI",
        category: "healthcare",
        image: SMHRI,
        shortDesc: "Quality healthcare services at SMHRI Hospital.",
        fullDesc:
            "SMHRI Hospital is committed to delivering high-quality healthcare with advanced medical facilities and compassionate care. Focused on patient well-being, SMHRI offers a range of specialized treatments and expert services.",
        technologies: ["Python", "Bootstrap"],
        features: [
            "Health Tracking",
            "Doctor Consultation",
            "Appointment Scheduling",
        ],
        results: ["Increased user engagement", "Reduced clinic visits by 30%"],
        links: {
            live: "https://smhri.com/crm/",
            github: "#",
            case_study: "#",
        },
        stats: { downloads: "50K+", users: "10K+", uptime: "98%" },
        gradient: "from-red-400 to-red-600",
    },
    {
        id: 6,
        title: "Edustation",
        category: "education",
        image: Edustation,
        shortDesc: "Empowering education through innovative solutions.",
        fullDesc:
            "Edustation offers cutting-edge educational tools and platforms to enhance learning experiences. Focused on student success, it provides personalized learning, resources, and support to help achieve academic goals.",
        technologies: ["PHP", "Bootstrap"],
        features: [
            "Live Video Classes",
            "Whiteboard Tools",
            "Chat and Collaboration",
        ],
        results: [
            "Increased student participation",
            "Higher course completion rate",
        ],
        links: {
            live: "https://www.edustation.online/",
            github: "#",
            case_study: "#",
        },
        stats: { classes: "500+", students: "10K+", uptime: "99%" },
        gradient: "from-yellow-400 to-yellow-600",
    },
    {
        id: 7,
        title: "Indraprasthfoundation",
        category: "non-profit",
        image: Indraprasthfoundation,
        shortDesc: "Empowering communities through Indraprasth Foundation.",
        fullDesc:
            "Indraprasth Foundation is dedicated to social welfare, focusing on empowering underprivileged communities through education, healthcare, and skill development. With a mission to foster sustainable growth, it strives to create lasting positive change.",
        technologies: ["React", "MUI"],
        features: [
            "Donor Management",
            "Campaign Analytics",
            "Volunteer Management",
        ],
        results: ["Increased donor retention", "Improved campaign effectiveness"],
        links: {
            live: "https://indraprasthfoundation.org/",
            github: "#",
            case_study: "#",
        },
        stats: { campaigns: "300+", donors: "20K+", uptime: "99.8%" },
        gradient: "from-teal-400 to-teal-600",
    },
    {
        id: 8,
        title: "DentArtistry",
        category: "healthcare",
        image: DentArtistry,
        shortDesc: "Transforming smiles with DentArtistry’s expertise.",
        fullDesc:
            "DentArtistry offers expert dental care with a focus on aesthetic and restorative treatments. Combining advanced techniques and personalized care, it aims to enhance your smile and overall oral health.",
        technologies: ["React", "Wix", "Node.js"],
        features: [
            "Health Tracking",
            "Doctor Consultation",
            "Appointment Scheduling",
        ],
        results: ["Increased user engagement", "Reduced clinic visits by 30%"],
        links: {
            live: "https://www.dentartistry.co.in/",
            github: "#",
            case_study: "#",
        },
        stats: { downloads: "50K+", users: "10K+", uptime: "98%" },
        gradient: "from-red-400 to-red-600",
    },
    {
        id: 9,
        title: "Espionline",
        category: "education",
        image: ESPIonline,
        shortDesc: "Real-time virtual classroom for remote learning",
        fullDesc:
            "A platform providing virtual classroom experiences with live classes and collaborative tools.",
        technologies: ["Vue.js", "Firebase", "Node.js"],
        features: [
            "Live Video Classes",
            "Whiteboard Tools",
            "Chat and Collaboration",
        ],
        results: [
            "Increased student participation",
            "Higher course completion rate",
        ],
        links: {
            live: "https://virtualclassroom.com",
            github: "https://github.com",
            case_study: "/case-study/virtual-classroom",
        },
        stats: { classes: "500+", students: "10K+", uptime: "99%" },
        gradient: "from-yellow-400 to-yellow-600",
    },
    {
        id: 10,
        title: "oecindia",
        category: "education",
        image: OecIndia,
        shortDesc: "Real-time virtual classroom for remote learning",
        fullDesc:
            "A platform providing virtual classroom experiences with live classes and collaborative tools.",
        technologies: ["Vue.js", "Firebase", "Node.js"],
        features: [
            "Live Video Classes",
            "Whiteboard Tools",
            "Chat and Collaboration",
        ],
        results: [
            "Increased student participation",
            "Higher course completion rate",
        ],
        links: {
            live: "https://virtualclassroom.com",
            github: "https://github.com",
            case_study: "/case-study/virtual-classroom",
        },
        stats: { classes: "500+", students: "10K+", uptime: "99%" },
        gradient: "from-yellow-400 to-yellow-600",
    },
    {
        id: 11,
        title: "Gaushala",
        category: "non-profit",
        image: Gaushala,
        shortDesc: "A platform to connect donors with social causes",
        fullDesc:
            "Empowers non-profits to raise funds through campaigns and manage donor relationships.",
        technologies: ["Ruby", "PostgreSQL", "React"],
        features: [
            "Campaign Management",
            "Payment Gateway Integration",
            "Donor Management",
        ],
        results: ["Over $1M raised for social causes", "Improved donor engagement"],
        links: {
            live: "https://ngoplatform.com",
            github: "https://github.com",
            case_study: "/case-study/non-profit",
        },
        stats: { campaigns: "100+", donors: "10K+", uptime: "99.5%" },
        gradient: "from-pink-400 to-pink-600",
    },
    {
        id: 12,
        title: "OEC CRM",
        category: "enterprise",
        image: OecIndia,
        shortDesc: "Optimizing customer relationships with OEC CRM.",
        fullDesc:
            "OEC CRM provides a powerful platform for managing customer interactions, streamlining sales processes, and enhancing customer satisfaction. With advanced features and intuitive tools, it helps businesses strengthen relationships and drive success.",
        technologies: ["React", "Vue"],
        features: [
            "Inventory Management",
            "Financial Reporting",
            "Supply Chain Management",
        ],
        results: [
            "30% increase in operational efficiency",
            "Improved decision-making",
        ],
        links: {
            live: "https://oecindia.com/oeccrm/login",
            github: "#",
            case_study: "#",
        },
        stats: { clients: "200+", transactions: "1M+", uptime: "99.9%" },
        gradient: "from-purple-400 to-purple-600",
    },
    {
        id: 13,
        title: "flyUrDream",
        category: "enterprise",
        image: flyUrDream,
        shortDesc: "Empowering success with flyUrDream CRM.",
        fullDesc:
            "flyUrDream CRM helps businesses manage and nurture customer relationships effectively, driving growth and customer loyalty. With tailored solutions, it streamlines communication, sales, and support to ensure a seamless customer experience.",
        technologies: ["React"],
        features: [
            "Inventory Management",
            "Financial Reporting",
            "Supply Chain Management",
        ],
        results: [
            "30% increase in operational efficiency",
            "Improved decision-making",
        ],
        links: {
            live: "https://crm.flyurdream.com/login",
            github: "#",
            case_study: "#",
        },
        stats: { clients: "200+", transactions: "1M+", uptime: "99.9%" },
        gradient: "from-purple-400 to-purple-600",
    },
];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        selectedCategory === "all"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

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
                                            <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                                <div className="flex gap-4">
                                                    {project.technologies &&
                                                        Object.entries(project.technologies)
                                                            .slice(0, 3)
                                                            .map(([key, value]) => (
                                                                <div key={key} className="text-center">
                                                                    <div className="text-primary-600 font-semibold">
                                                                        {value}
                                                                    </div>
                                                                    {/* <div className="text-xs text-gray-500 capitalize">{key}</div> */}
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
                            style={{ maxWidth: "1200px", margin: "auto" }}
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
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                        Overview
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        {selectedProject.fullDesc}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                        Key Features
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {selectedProject.features.map((feature) => (
                                                            <li
                                                                key={feature}
                                                                className="flex items-start gap-3"
                                                            >
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
                                                                <span className="text-gray-600">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                        Results & Impact
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {selectedProject.results.map((result) => (
                                                            <li
                                                                key={result}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
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
                                                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                                        />
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
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                        Project Links
                                                    </h3>
                                                    <div className="space-y-3">
                                                        {Object.entries(selectedProject.links).map(
                                                            ([key, url]) => (
                                                                <a
                                                                    key={key}
                                                                    href={url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                                                                >
                                                                    {key === "live" && (
                                                                        <FaGlobe className="w-5 h-5" />
                                                                    )}
                                                                    {key === "github" && (
                                                                        <FaGithub className="w-5 h-5" />
                                                                    )}
                                                                    {key === "case_study" && (
                                                                        <FaExternalLinkAlt className="w-5 h-5" />
                                                                    )}
                                                                    <span className="capitalize">
                                                                        {key.replace("_", " ")}
                                                                    </span>
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                </Card>

                                                <Card className="p-6">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                        Technology Stack
                                                    </h3>
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

                                                <div className="flex gap-4">
                                                    <Button
                                                        variant="primary"
                                                        className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                                                        onClick={() =>
                                                            window.open(selectedProject.links.live, "_blank")
                                                        }
                                                    >
                                                        <FaGlobe className="mr-2" />
                                                        View Live
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        className="flex-1"
                                                        onClick={() =>
                                                            window.open(
                                                                selectedProject.links.case_study,
                                                                "_blank"
                                                            )
                                                        }
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
        </motion.div>
    );
};

export default PortfolioSection;
