'use client';
import { IconButton, InputBase, Paper } from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CategoryInput = () => {
  return (
    <Paper
      className="bg-[rgba(145,158,171,0.08)] py-[10px] px-[4px] flex items-center w-[90%] lg:w-[30%] m-auto lg:m-0 shadow-none rounded-lg"
    >
      <IconButton aria-label="menu" disabled>
        <CategoryIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Job title, keywords..."
        inputProps={{ 'aria-label': 'search jobs' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Paper>
  )
}

export default CategoryInput