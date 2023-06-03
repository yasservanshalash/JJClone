import JobHeader from "@/components/layout/jobPageLayout/JobHeader";
import styles from "./page.module.css";
import JobInfoCard from "@/components/layout/jobPageLayout/JobInfoCard";
import JobInfoText from "../../../components/layout/jobPageLayout/JobInfoText";
import JobSkills from "@/components/layout/jobPageLayout/JobSkills";
import OtherBenefits from "@/components/layout/jobPageLayout/OtherBenefits";
import { prisma } from "../../../../lib/prisma";
const JobPage = async ({params}: {params: {jobId: string}}) => {
  // const job = await prisma.job.create({
  //   data: {
  //     attractions: ["Working with agency for design drawing detail, quotation and local production.", "Produce window displays, signs, interior displays, floor plans and special promotions displays.", "Followup store maintenance procedure and keep updating SKU In & Out.", "Monitor costs and work within budget.", "Liaise with suppliers and source elements."],
  //     category: "Web Development",
  //     employerId: "647b6a3e85bc8c3331cb9298",
  //     jobSkills: ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "REDUX"],
  //     location: "Amsterdam",
  //     otherBenefits: ["Free Parking", `Travel`, "Health Care"],
  //     positionNeeded: "Frontend Developer",
  //     responsibilies: ["Working with agency for design drawing detail, quotation and local production.", "Produce window displays, signs, interior displays, floor plans and special promotions displays.", "Change displays to promote new product launches and reflect festive or seasonal themes.", "Planning and executing the open/renovation/ closing store procedure.", "Monitor costs and work within budget.      "],
  //     salary: 2400,
  //     title: "Frontend developer ( ReactJS )",
  //     typeOfContract: "Temporary",
  //     views: 420,
  //     yearsOfExperience: 0.5,
  //     jobDescription: "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.",
  //   },
  // });

  // ________________________________________________________

  // console.log(job);
  console.log(params)
    const job = await prisma.job.findUnique({
    where: {
      id: params.jobId,
    },
    include: {
      employer: true
    }
  })
  console.log(job);
  return (
    <main>
      <JobHeader job={job}/>
      <JobInfoCard job={job}/>
      <JobInfoText job={job}/>
      <JobSkills job={job}/>
      <OtherBenefits job={job}/>
    </main>
  );
};

export default JobPage;
