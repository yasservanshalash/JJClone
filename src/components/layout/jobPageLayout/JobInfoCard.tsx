'use client';

import { Paper } from "@mui/material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import MoneyIcon from '@mui/icons-material/Money';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TranslateIcon from '@mui/icons-material/Translate';

const JobInfoCard = () => {
  return (
    <Paper className="w-[95%] flex flex-col p-5 gap-y-4 my-5 m-auto rounded-md" style={{boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.3) 0px 12px 24px -4px"}}>
            <div className="flex items-start gap-x-4">
                <CalendarTodayIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-gray-500">02 Jun 2023</p>
                </div>
            </div>
            <div className="flex items-start gap-x-4">
                <HourglassBottomIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-orange-500">02 Jun 2023</p>
                </div>
            </div>
            <div className="flex items-start gap-x-4">
                <MoneyIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-gray-500">competitive</p>
                </div>
            </div>
            <div className="flex items-start gap-x-4">
                <BarChartIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-gray-500">1 year exp</p>
                </div>
            </div>
            <div className="flex items-start gap-x-4">
                <PersonOutlineIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-gray-500">No experience</p>
                </div>
            </div>
            <div className="flex items-start gap-x-4">
                <TranslateIcon />
                <div className="flex flex-col">
                    <p className="font-semibold">Date Posted</p>
                    <p className="text-sm font-semibold text-gray-500">Russian, Spanish, English</p>
                </div>
            </div>
    </Paper>
  )
}

export default JobInfoCard