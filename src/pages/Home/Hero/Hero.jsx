import { Link } from "react-router-dom";
import heroImg from "../../../assets/icons/hero.png";
import Stats from "./Stats";

const Hero = () => {
  return (
    <>
      <section className="bg-base-100 py-12 lg:py-24 dark:bg-[#222222]">
        <div className="max-w-screen-xl px-5 container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-2xl lg:text-left">
            <h1 className="text-5xl font-bold leading-none text-base-content sm:text-6xl dark:text-white/90">
              Master Any <span className="text-primary">Language or Skill</span>{" "}
              with Expert Tutors!
            </h1>
            <p className="mt-6 mb-8 text-lg text-base-content-secondary sm:mb-12">
              Book personalized sessions with professional tutors from around
              the globe. Learn at your pace, anytime, anywhere.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/register"
                className="primary-btn text-lg font-semibold  dark:text-gray-50"
              >
                Find Tutors Now
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/register"
                className="secondary-btn text-lg font-semibold dark:text-gray-50"
              >
                Become a Tutor
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={heroImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Hero;
