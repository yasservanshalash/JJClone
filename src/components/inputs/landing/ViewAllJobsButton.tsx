'use client';

import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ViewAllJobsButton = () => {
  return (
    <Button variant="contained" style={{backgroundColor: "transparent", color: "#212b36", textTransform: "none", margin: "30px 0px"}} endIcon={<ChevronRightIcon />} sx={{px: 3, py: 1.5, my: 2, "&:hover": { border: "2px solid #212b36", backgroundColor: "#212b3600"}}}>View All Jobs</Button>
  )
}

export default ViewAllJobsButton