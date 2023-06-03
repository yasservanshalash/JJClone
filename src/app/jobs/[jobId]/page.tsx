'use client';

import JobHeader from "@/components/layout/jobPageLayout/JobHeader"
import styles from "./page.module.css"
import JobInfoCard from "@/components/layout/jobPageLayout/JobInfoCard"
import JobInfoText from "../../../components/layout/jobPageLayout/JobInfoText"
import JobSkills from "@/components/layout/jobPageLayout/JobSkills"
import OtherBenefits from "@/components/layout/jobPageLayout/OtherBenefits"
const JobPage = () => {
  return (
    <main>
        <JobHeader />
        <JobInfoCard />
        <JobInfoText />
        <JobSkills />
        <OtherBenefits />
    </main>
  )
}

export default JobPage