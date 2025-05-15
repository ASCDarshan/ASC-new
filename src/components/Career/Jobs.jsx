import { motion } from "framer-motion";
import { FaRegClock, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { Container, Card, Badge, Loader } from "../../components/common";

const Jobs = ({ isLoading, filteredJobs }) => {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        {isLoading ? (
          <Loader size="lg" className="mx-auto" />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
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
              ))
            ) : (
              <div className="text-center text-gray-600 text-lg">
                No Jobs for this category.
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Jobs;
