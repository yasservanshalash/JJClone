'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function LocationInput() {
  return (
    <Paper
    className="bg-[rgba(145,158,171,0.08)] py-[10px] px-[4px] flex items-center w-[90%] lg:w-[30%] m-auto lg:m-0 shadow-none rounded-lg"

    >
      <IconButton aria-label="menu" disabled>
        <LocationOnIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Locations"
        inputProps={{ 'aria-label': 'Locations' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Paper>
  );
}