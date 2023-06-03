'use client';

import { Box } from '@mui/material';
import React from 'react'
import KeywordInput from './Keyword';
import CategoryInput from './Category';
import LocationInput from './Location';
import SearchJobsButton from './SearchButton';

const SearchForms = () => {
  return (
    <Box sx={{display: {xs: "none", md: "none", lg:"flex"}, gap: 2, my: 5}}>
    <KeywordInput />
    <CategoryInput />
    <LocationInput />
    <SearchJobsButton />
  </Box>
  )
}

export default SearchForms