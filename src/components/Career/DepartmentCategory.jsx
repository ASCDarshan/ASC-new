import { Container } from "../../components/common";

const DepartmentCategory = ({
  departments,
  selectedDepartment,
  setSelectedDepartment,
}) => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="flex flex-wrap justify-center gap-4">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDepartment === dept.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-200/50"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DepartmentCategory;
