import JobtitleInputLanding from "@/components/inputs/landing/JobTitleInput";
import LocationLandingInput from "@/components/inputs/landing/LocationInput";
import SearchButton from "@/components/inputs/landing/SearchButton";
import Image from "next/image";
import airbnb from "../../../../../public/airbnb.svg";
import dropbox from "../../../../../public/dropbox.svg";
import facebook from "../../../../../public/facebook.svg";
import google from "../../../../../public/google.svg";
import styles from "./LandingHeader.module.css"

const LandingHeader = () => {
  return (
    <header className={styles.header}>
      <section className="h-[140vh] lg:w-[1200px] lg:m-auto lg:px-0 lg:py-20">
        <div className="w-[85%] lg:w-[50%] m-auto lg:m-0 py-2">
          <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] text-white font-bold pt-8 text-center lg:text-left">
            Get The <span className="text-[#fa541c]">Career</span> You Deserve
          </h1>
        </div>
        <p className="text-[#919eab] text-center lg:text-left p-5 lg:py-10 lg:px-0 lg:w-[50%] lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque
          dolores repudiandae ullam magnam.
        </p>
        <div className="lg:flex lg:justify-start lg:items-center lg:ml-0 lg:w-[75%]">
          <JobtitleInputLanding />
          <LocationLandingInput />
          <SearchButton />
        </div>
        <section className="grid grid-cols-2 lg:grid-cols-4 lg:w-[50%] justify-items-center lg:justify-items-start gap-y-8 mt-10 lg:my-10">
          <Image
            src={airbnb}
            width="94"
            height="28"
            alt="airbnb"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={dropbox}
            width="94"
            height="28"
            alt="dropbox"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={facebook}
            width="94"
            height="28"
            alt="facebook"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={google}
            width="94"
            height="28"
            alt="google"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
        </section>
        <section className="grid grid-cols-2 justify-items-center lg:hidden lg:justify-items-start gap-y-8 mt-10 w-[100%] lg:w-[30%] m-auto lg:m-0 relative right-3 top-5 lg:static lg:py-10">
          <div className="flex flex-col justify-center items-center gap-y-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-xl">2m+</h1>
              <p className="text-gray-400 text-sm font-semibold">Jobs</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-xl">250k+</h1>
              <p className="text-gray-400 text-sm font-semibold">Partners</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10 relative left-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-xl">500k+</h1>
              <p className="text-gray-400 text-sm font-semibold">
                Successful Hiring
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-xl">156k+</h1>
              <p className="text-gray-400 text-sm font-semibold">Employee</p>
            </div>
          </div>
        </section>
        <section className="hidden lg:flex lg:justify-start lg:items-center lg:gap-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl">2m+</h1>
            <p className="text-gray-400 text-sm font-semibold">Jobs</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl">500k+</h1>
            <p className="text-gray-400 text-sm font-semibold">
              Successful Hiring
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl">250k+</h1>
            <p className="text-gray-400 text-sm font-semibold">Partners</p>
          </div>
          <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-xl">156k+</h1>
              <p className="text-gray-400 text-sm font-semibold">Employee</p>
            </div>
        </section>
      </section>
    </header>
  );
};

export default LandingHeader;
