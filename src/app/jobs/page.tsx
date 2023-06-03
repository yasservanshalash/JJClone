import JobCard from "@/components/cards/JobCard";
import CategoryInput from "@/components/inputs/jobs/Category";
import JobTypeSelect from "@/components/inputs/jobs/JobTypeSelect";
import KeywordInput from "@/components/inputs/jobs/Keyword";
import LocationInput from "@/components/inputs/jobs/Location";
import SalaryRange from "@/components/inputs/jobs/SalaryRange";
import SearchJobsButton from "@/components/inputs/jobs/SearchButton";
import SearchForms from "@/components/inputs/jobs/SearchForms";

const page = () => {
  return (
    <main className="lg:w-[1200px] m-auto">
      <SearchForms/>
      <section className="flex">
      <JobTypeSelect />
      <SalaryRange />
      </section>
      <section className="flex flex-wrap md:grid md:grid-cols-2 lg:w-[1200px] lg:m-auto lg:grid lg:grid-cols-3 items-center">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </section>
    </main>
  );
};

export default page;
