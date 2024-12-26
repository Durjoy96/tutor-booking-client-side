import { Link, useParams } from "react-router-dom";
import AxiosSecure from "../../../hooks/AxiosSecure";
import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CategoryPage = () => {
  const [tutors, setTutors] = useState([]);
  const { category } = useParams();
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios
      .get(`/language?language=${category}`)
      .then((res) => setTutors(res.data));
  }, [useAxios, category]);
  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="w-full rounded-md shadow-md bg-base-100 dark:bg-[#222222] dark:text-gray-800"
            >
              <img
                src={tutor.imageUrl}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-base-content dark:text-white/90">
                    {tutor.name}
                  </h2>
                  <span className="badge badge-ghost bg-primary/10 text-primary badge-md dark:border-none">
                    {tutor?.language.charAt(0).toUpperCase() +
                      tutor?.language.slice(1)}
                  </span>
                  <p className="text-xs sm:text-base dark:text-white/60 flex items-center gap-1">
                    <FaBangladeshiTakaSign className="w-4 h-4 fill-primary" />{" "}
                    {tutor.price} BDT
                  </p>
                  <p className="text-base text-base-content-secondary flex items-center gap-1">
                    <BiStar />
                    Review:{" "}
                    <span className="text-base-content font-semibold dark:text-white/90">
                      {tutor.review}
                    </span>
                  </p>
                </div>
                <Link
                  to={`/tutor/${tutor._id}`}
                  type="button"
                  className="secondary-btn"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
