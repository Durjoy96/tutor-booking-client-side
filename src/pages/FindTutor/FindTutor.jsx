import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import AxiosSecure from "../../hooks/AxiosSecure";
import Loading from "../../components/Loading/Loading";
import {
  TbSortAscendingNumbers,
  TbSortDescendingNumbers,
} from "react-icons/tb";

const FindTutor = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ascending, setAscending] = useState(true);
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios
      .get("/tutorials")
      .then((res) => {
        setTutorials(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [useAxios, setLoading]);

  if (loading) {
    return <Loading />; //Display a loading message until the data has been received
  }

  const searchHandler = (e) => {
    const value = e.target.value;
    useAxios
      .get(`/language?language=${value}`)
      .then((res) => setTutorials(res.data));
  };

  const sortHandler = () => {
    let sorted = [];
    if (ascending) {
      sorted = [...tutorials].sort(
        (item1, item2) => item1.review - item2.review
      );
      setAscending(false);
    } else {
      sorted = [...tutorials]
        .sort((item1, item2) => item1.review - item2.review)
        .reverse();
      setAscending(true);
    }
    setTutorials(sorted);
  };

  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        {/* search by language */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-6 mb-12">
          <label className="input input-bordered flex items-center gap-2 dark:bg-[#222222] ">
            <input
              type="text"
              className="grow dark:text-white/90"
              onChange={searchHandler}
              placeholder="Search by language"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:fill-white/90"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* Sort by price */}
          <div>
            <button onClick={sortHandler} className="secondary-btn py-3">
              {ascending ? (
                <TbSortAscendingNumbers />
              ) : (
                <TbSortDescendingNumbers />
              )}
              Sort by review
            </button>
          </div>
        </div>
        {/* cards */}
        <div className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="w-full rounded-md shadow-md bg-base-100 dark:bg-[#222222] dark:text-white/90"
            >
              <img
                src={tutorial.imageUrl}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-base-content dark:text-white/90">
                    {tutorial.name}
                  </h2>
                  <span className="badge badge-ghost bg-primary/10 text-primary badge-md dark:border-none">
                    {tutorial?.language.charAt(0).toUpperCase() +
                      tutorial?.language.slice(1)}
                  </span>
                  <p className="text-base text-base-content-secondary flex items-center gap-1">
                    <BiStar />
                    Review:{" "}
                    <span className="text-base-content font-semibold dark:text-white/90">
                      {tutorial.review}
                    </span>
                  </p>
                </div>
                <Link
                  to={`/tutor/${tutorial._id}`}
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

export default FindTutor;
