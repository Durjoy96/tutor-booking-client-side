import { useEffect, useState } from "react";
import AxiosSecure from "../../../hooks/AxiosSecure";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Categories = () => {
  const [tutorials, setTutorials] = useState([]);
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios.get("/languages").then((res) => setTutorials(res.data));
  });
  return (
    <>
      <div className="main-container mt-12 md:mt-20 lg:mt-32">
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Explore the World{" "}
            <span className="text-primary">Through Language</span>
          </h2>
          <p className="mt-2 text-base-content-secondary">
            Unlock the doors to global communication by discovering a variety of
            languages. Whether you&apos;re learning for travel, business, or
            personal growth
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tutorials.map((language, idx) => (
            <Link
              to={`/find-tutors/${language}`}
              className="px-8 py-5 bg-base-100 rounded-lg cursor-pointer flex items-center justify-between hover:bg-primary hover:text-primary-content group"
              key={idx}
            >
              <p className="text-lg font-medium text-base-content flex items-center gap-2 group-hover:text-primary-content">
                <span>
                  <GrLanguage />
                </span>{" "}
                {language.charAt(0).toUpperCase() + language.slice(1)}
              </p>
              <MdArrowForwardIos />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
