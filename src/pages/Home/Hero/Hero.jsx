import { Link } from "react-router-dom";
import heroImg from "../../../assets/icons/hero.png";

const Hero = () => {
  return (
    <>
      <section className="bg-base-100 dark:bg-gray-100 dark:text-gray-800">
        <div className="main-container container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left">
            <h1 className="text-5xl font-bold leading-none text-base-content sm:text-6xl">
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
                className="primary-btn text-lg font-semibold dark:bg-violet-600 dark:text-gray-50"
              >
                Find Tutors Now
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/register"
                className="primary-btn text-lg font-semibold dark:bg-violet-600 dark:text-gray-50"
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
      </section>
    </>
  );
};

export default Hero;
