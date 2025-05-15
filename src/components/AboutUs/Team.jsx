import { motion } from "framer-motion";
import { Container, Badge, Card } from "../../components/common";

const teamMembers = [
  {
    name: "Jigar Desai",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of software industry experience.",
  },
  {
    name: "Vijendrasinh",
    role: "SEO Manager",
    bio: "Expert in enterprise solutions and system architecture.",
  },
  {
    name: "Mehul Machhi",
    role: "Back End Developer",
    bio: "Full-stack developer specializing in scalable applications.",
  },
  {
    name: "Sagar Ramani",
    role: "Front End Developer",
    bio: "Experienced front-end developer with a passion for crafting responsive, user-friendly interfaces.",
  },
  {
    name: "Darshan Patel",
    role: "Front End Developer",
    bio: "Creative problem solver focused on building dynamic and efficient web applications.",
  },
];
const Team = (fadeIn) => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div {...fadeIn} className="text-center mb-16">
          <Badge
            variant="primary"
            className="mb-4 bg-primary-100 text-primary-600 px-4 py-2"
          >
            Our Team
          </Badge>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driven by passion and expertise, our leadership team brings together
            decades of industry experience to guide our vision forward.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              {...fadeIn}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
