'use client';

import { Paper } from '@mui/material'
import Image from 'next/image'
import CardImage from "../../../public/lidl.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import styles from "./JobCard.module.css"
import Link from 'next/link';
const JobCard = () => {
  return (
        <Paper className='w-[90%] m-auto p-5 my-5' sx={{boxShadow: "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)", transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",'&:hover': {boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}}>
          <Link href="/jobs/2">
          <Image src={CardImage} width={48} height={48} alt=''  className='rounded-md'/>
        <section className='my-4'>
        <p className='font-semibold text-lg'>Corporate Data Officer</p>
        <p className='text-[#00b8d9] text-sm font-semibold'>Altenwerth, Medhurst and Roberts</p>
        <p className='text-gray-400 text-sm flex items-center font-[400]'><LocationOnIcon sx={{fontSize: "100%", mr: "5px"}}/>Sierra Leone</p>
        </section>
        <p className='text-[#919eab] text-xs mb-5 font-[400]'>Posted day: 29 May 2023</p>
        <hr className='mb-5'/>
        <section className='grid grid-cols-2 gap-5'>
        <p className='text-gray-400 text-xs flex items-center gap-1 font-[500]'><SignalCellularAltIcon sx={{fontSize: "140%"}}/> 7 Year Exp</p>
        <p className='text-gray-400 text-xs flex items-center gap-1 font-[500]'><AccessTimeIcon sx={{fontSize: "140%"}}/> Freelance</p>
        <p className='text-gray-400 text-xs flex items-center gap-1 font-[500]'><LocalAtmIcon sx={{fontSize: "140%"}}/>Competitive</p>
        <p className='text-gray-400 text-xs flex items-center gap-1 font-[500]'><PersonOutlineIcon sx={{fontSize: "140%"}}/>Intern/Student</p>

        </section>
          </Link>
    </Paper>
  )
}

export default JobCard