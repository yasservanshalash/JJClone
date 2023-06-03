"use client";

import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadCVButton = () => {
  return (
    <Button variant="contained" sx={{color: "white", px: 3, py: 1.5, my: 2}} style={{backgroundColor: "#212b36",textTransform: "none", borderRadius: "7px"}} startIcon={<CloudUploadIcon />}>Upload Your CV</Button>
  )
}

export default UploadCVButton