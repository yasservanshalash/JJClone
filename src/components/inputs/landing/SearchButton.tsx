"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

export default function SearchButton() {
  return (
    // <Paper
    //   component="form"
    //   className="py-[10px] px-[4px] lg:py-2 flex items-center justify-center w-[90%] lg:w-[auto] m-auto lg:m-0 shadow-none rounded-t-none rounded-b-md lg:rounded-l-none lg:rounded-r-md lg:justify-start"
    // >
    //   {/* <IconButton className="w-[97%] lg:w-[24px] lg:h-[24px] m-auto lg:m-0 bg-[#fa541c] p-2 lg:p-6 rounded-lg lg:mr-2"> */}
    //   <IconButton style={{backgroundColor: "#fa541c"}} sx={{width: { xs: "97%", lg: "24px"},height: {lg: "24px"}, margin: {xs: "0 auto", lg: "0"}, p: {xs: 2, md: 1.5, lg:3}, borderRadius: "10px", mr: {lg: 0}}}>
    //     <SearchIcon sx={{ color: "white" }} />
    //   </IconButton>
    // </Paper>
    <form
    className="bg-white py-[10px] px-[4px] lg:py-2 flex items-center justify-center w-[90%] lg:w-[auto] m-auto lg:m-0 shadow-none rounded-t-none rounded-b-md lg:rounded-l-none lg:rounded-r-md lg:justify-start"
  >
    {/* <IconButton className="w-[97%] lg:w-[24px] lg:h-[24px] m-auto lg:m-0 bg-[#fa541c] p-2 lg:p-6 rounded-lg lg:mr-2"> */}
    <IconButton style={{backgroundColor: "#fa541c"}} sx={{width: { xs: "97%", lg: "24px"},height: {lg: "24px"}, margin: {xs: "0 auto", lg: "0"}, p: {xs: 2, md: 1.5, lg:3}, borderRadius: "10px", mr: {lg: 0}}}>
      <SearchIcon sx={{ color: "white" }} />
    </IconButton>
  </form>
  );
}
