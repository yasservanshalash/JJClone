'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function JobtitleInputLanding() {
  return (
    <form
      className="bg-white py-[10px] px-[4px] flex items-center w-[90%] lg:w-[30%] m-auto lg:m-0 shadow-none rounded-t-md rounded-b-none lg:rounded-l-md lg:rounded-r-none"
    >
      <IconButton aria-label="menu" disabled>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Job title, keywords..."
        inputProps={{ 'aria-label': 'search jobs' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <KeyboardArrowDownIcon />
      </IconButton>
    </form>
  );
}