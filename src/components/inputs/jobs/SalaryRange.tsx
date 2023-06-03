'use client';

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Slider } from '@mui/material';
import { relative } from 'path';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500,
      height: 100,
      padding: 10,
      borderRadius: 10,
    },
  },
};
function valuetext(value: number) {
    return `${value}€`;
  }
const names = [
  'Frontend',
  'Backend',
  'Design',
  'Development',
  'Testing',
];

const marks = [
    {
      value: 0,
      label: '€0',
    },
    {
        value: 25,
        label: '€1000'
    },
    {
      value: 50,
      label: '€2000',
    },
    {
      value: 75,
      label: '€3000',
    },
    {
      value: 100,
      label: '€400',
    },
  ];

export default function SalaryRange() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  console.log(personName);


  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label" className='text-gray-400' color='warning'>Salary</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Job Type" className='text-gray-600'/>}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          sx={{  "& fieldset": {
            border: "none",
          },}}
          className='text-black border border-spacing-1 border-t-0 border-r-0 border-l-0'
        >
              <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
        sx={{width: "60%", position: "relative", top: "10px", left: "90px",    '& .MuiSlider-thumb': {
            color: "rgb(251, 146, 60)"
        },
        '& .MuiSlider-track': {
            color: "rgb(251, 146, 60)"
        },
        '& .MuiSlider-rail': {
            color: "#acc4e4"
        },
        '& .MuiSlider-active': {
            color: "rgb(251, 146, 60)"
        }}}
        className='text-orange-400'
        onChange={(event: Event, newValue: number | number[]) => {
            console.log(newValue as number * 40);
          }}
      />
        </Select>
      </FormControl>
    </div>
  );
}
