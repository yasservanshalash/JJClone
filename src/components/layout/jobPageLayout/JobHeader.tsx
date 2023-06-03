'use client';
import styles from './JobHeader.module.css'
import WorkIcon from '@mui/icons-material/Work';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

const JobHeader = () => {
  return (
    <main  className={styles.header} style={{height: "85vh"}}>

    <section className="h-[55vh] lg:w-[1200px] m-auto  ml-3">
    <div className="flex items-center gap-x-3 py-10 ml-4">
        <Link href="/">
        <p className="text-white">Home</p>
        </Link>
        <span className="bg-gray-400 w-[4px] h-[4px] rounded-full"></span>
        <Link href="/jobs">
        <p className="text-white">Jobs</p>
        </Link>
        <span className="bg-gray-400 w-[4px] h-[4px] rounded-full"></span>
        <Link href="/3">
        <p className="text-white">Marketing Coordinator</p>
        </Link>        </div> 
        <h1 className='text-white text-3xl font-semibold ml-4 py-5'>
            Marketing Coordinator
        </h1>
        <div>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><WorkIcon /> Design</p>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><RemoveRedEyeIcon /> 420 views</p>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><LocationOnIcon /> Kenya</p>

        </div>
        <div className='w-[300px] flex flex-col'>
            <button className='w-[260px] h-[32px] px-6 py-6 bg-[rgb(250,84,28)] text-white rounded-md m-5 mb-4 font-semibold flex items-center justify-center'>Apply Now</button>
            <p className='text-white text-center'>Expiration date: <span className='text-orange-600'>02 Jun 2023</span></p>

        </div>
</section>
</main>
  )
}

export default JobHeader