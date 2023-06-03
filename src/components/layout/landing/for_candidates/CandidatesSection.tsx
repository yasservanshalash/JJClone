import Image from "next/image";
import JobApplication from "../../../../../public/jobapplication.svg";
import JobSearch from "../../../../../public/jobsearch.svg";
import UploadCVButton from "@/components/inputs/landing/UploadCVButton";
const CandidatesSection = () => {
  return (
    <section className="lg:w-[1200px] m-auto">
      <header className="flex flex-col items-center w-[100%] m-auto text-center mt-16">
        <p className="text-[0.75rem] font-extrabold text-gray-400 mb-10">
          FOR CANDIDATES
        </p>
        <h1 className="text-[2rem] font-bold text-[#212b36] mb-6">
          Explore Thousands of Jobs
        </h1>
        <p className="text-[1rem] text-gray-500 font-semibold">
          Animi rerum nesciunt iusto praesentium, qui voluptatem sunt omnis
          aliquam, quo incidunt beatae? Obcaecati fugit illum asperiores.
        </p>
      </header>
      <section className="flex flex-col items-center text-center lg:grid lg:grid-cols-3 lg:w-[100%] lg:m-auto">
        <div className="flex flex-col items-center my-10">
          <Image
            src={JobApplication}
            width={80}
            height={80}
            alt="Job Application Icon"
            style={{
              margin: "30px 0px",
              filter:
                "invert(58%) sepia(57%) saturate(6847%) hue-rotate(349deg) brightness(98%) contrast(100%)",
            }}
          />
          <p className="text-[0.75rem] font-extrabold text-gray-400 mb-5">
            STEP 1
          </p>
          <p className="text-[1.2rem] font-semibold text-[#212b36] mb-3">
            Create an account
          </p>
          <p className="text-[1rem] text-gray-500">
            Nunc nonummy metus. Donec elit libero.
          </p>
        </div>
        <div className="flex flex-col items-center my-10">
          <Image
            src={JobApplication}
            width={80}
            height={80}
            alt="Job Application Icon"
            style={{
              margin: "30px 0px",
              filter:
                "invert(58%) sepia(57%) saturate(6847%) hue-rotate(349deg) brightness(98%) contrast(100%)",
            }}
          />
          <p className="text-[0.75rem] font-extrabold text-gray-400 mb-5">
            STEP 2
          </p>
          <p className="text-[1.2rem] font-semibold text-[#212b36] mb-3">
            Complete your profile
          </p>
          <p className="text-[1rem] text-gray-500">
            Nunc nonummy metus. Donec elit libero.
          </p>
        </div>
        <div className="flex flex-col items-center my-10">
          <Image
            src={JobSearch}
            width={80}
            height={80}
            alt="Job Application Icon"
            style={{
              margin: "30px 0px",
              filter:
                "invert(58%) sepia(57%) saturate(6847%) hue-rotate(349deg) brightness(98%) contrast(100%)",
            }}
          />
          <p className="text-[0.75rem] font-extrabold text-gray-400 mb-5">
            STEP 3
          </p>
          <p className="text-[1.2rem] font-semibold text-[#212b36] mb-3">
            Search your job
          </p>
          <p className="text-[1rem] text-gray-500">
            Nunc nonummy metus. Donec elit libero.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <UploadCVButton />
      </section>
    </section>
  );
};

export default CandidatesSection;
