import { useEffect, useState } from "react";

import ajaxCall from "../../helpers/ajaxCall";
import JobApplication from "./JobApplication";
import CareerBanner from "../../components/Career/CareerBanner";
import DepartmentCategory from "../../components/Career/DepartmentCategory";
import Jobs from "../../components/Career/Jobs";
import WhyJoin from "../../components/Career/WhyJoin";
import Faq from "../../components/Career/Faq";
import RecruitmentProcess from "../../components/Career/RecruitmentProcess";
import CareerCTA from "../../components/Career/CareerCTA";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  useEffect(() => {
    fetchData("career/jobs/", setJobs);
    fetchData("career/departments/", (data) => {
      const allDepartments = [{ id: "all", name: "All Departments" }, ...data];
      setDepartments(allDepartments);
    });
  }, []);

  useEffect(() => {
    if (selectedDepartment === "all") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) => job.department.id === selectedDepartment
      );
      setFilteredJobs(filtered);
    }
  }, [selectedDepartment, jobs]);

  const fetchData = async (url, setData) => {
    setIsLoading(true);
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
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <CareerBanner />
      <DepartmentCategory
        departments={departments}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      <Jobs isLoading={isLoading} filteredJobs={filteredJobs} />
      <JobApplication />
      <WhyJoin />
      <Faq />
      <RecruitmentProcess />
      <CareerCTA />
    </div>
  );
};

export default Careers;
