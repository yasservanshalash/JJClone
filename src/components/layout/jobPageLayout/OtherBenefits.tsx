

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MoneyIcon from '@mui/icons-material/Money';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const OtherBenefits = () => {
  return (
    <main className='m-auto p-5'>
        <h1 className="text-black text-xl font-semibold mb-5">Other Benefits</h1>
        <section className='flex flex-col gap-5'>
        <div className='flex gap-3 text-gray-700'>
                <DirectionsCarIcon sx={{color: "rgb(234 88 12)"}}/>
                <p>Free Parking</p>
            </div>
            <div  className='flex gap-3 text-gray-700'>
                <MoneyIcon sx={{color: "rgb(234 88 12)"}}/>
                <p>Bonus commission</p>
            </div>
            <div  className='flex gap-3 text-gray-700'>
                <LocalAirportIcon sx={{color: "rgb(234 88 12)"}}/>
                <p>Travel</p>
            </div>
            <div  className='flex gap-3 text-gray-700'>
                <SchoolIcon sx={{color: "rgb(234 88 12)"}} />
                <p>Training</p>
            </div>
            <div  className='flex gap-3 text-gray-700'>
                <DevicesIcon sx={{color: "rgb(234 88 12)"}} />
                <p>Training</p>
            </div>
            <div  className='flex gap-3 text-gray-700'>
                <HealthAndSafetyIcon  sx={{color: "rgb(234 88 12)"}}/>
                <p>Health Care</p>
            </div>
        </section>
    </main>
  )
}

export default OtherBenefits