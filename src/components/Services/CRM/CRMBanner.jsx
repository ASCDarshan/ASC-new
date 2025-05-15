import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Button, Card, Badge } from "../../../components/common";
import {
  FaUsers,
  FaChartBar,
  FaRegChartBar,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    label: "Total Leads",
    value: "2,547",
    icon: <FaUsers />,
  },
  {
    label: "Pipeline Value",
    value: "$1.2M",
    icon: <FaChartLine />,
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    icon: <FaRegChartBar />,
  },
];

const activities = [
  {
    title: "New Lead",
    desc: "Tech Solutions Ltd.",
    time: "2h ago",
  },
  {
    title: "Deal Closed",
    desc: "Project Alpha - $45,000",
    time: "4h ago",
  },
];
const CRMBanner = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const handleconsulting = () => {
    navigate("/contact");
  };

  const handleLearnmore = () => {
    navigate("/services");
  };
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
              CRM Development
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Custom CRM Solutions for Your Business Growth
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your customer relationships with our tailored CRM
              solutions. Streamline operations, boost productivity, and drive
              growth with powerful automation.
            </p>
            <div className="flex gap-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                onClick={handleconsulting}
              >
                Schedule Demo
              </Button>
              <Button variant="outline" onClick={handleLearnmore}>
                View Features
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-semibold text-gray-900">
                  Trusted by 500+ Businesses
                </div>
                <div className="text-sm text-gray-600">
                  Across multiple industries
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
              <Card className="p-6 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                  <div className="bg-primary-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FaChartBar className="w-6 h-6" />
                        <h3 className="text-lg font-semibold">
                          Sales Dashboard
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-white/20 rounded-full text-xs">
                          Live
                        </div>
                        <span className="text-sm">Last updated: Just now</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm text-gray-600">
                              {stat.label}
                            </span>
                            <span className="text-primary-500">
                              {stat.icon}
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="h-32 flex items-end justify-between gap-2">
                        {[40, 70, 45, 65, 90, 75, 60].map((height, index) => (
                          <div
                            key={index}
                            className="w-full bg-primary-200 rounded-t transition-all duration-500"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-500">Mon</span>
                        <span className="text-xs text-gray-500">Sun</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {activities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-100"
                        >
                          <div>
                            <div className="font-medium text-sm">
                              {activity.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {activity.desc}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="text-sm text-gray-600">Monthly Growth</div>
                    <div className="text-2xl font-bold text-primary-600">
                      +28%
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="text-sm text-gray-600">Active Users</div>
                    <div className="text-2xl font-bold text-primary-600">
                      2.5k+
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CRMBanner;
