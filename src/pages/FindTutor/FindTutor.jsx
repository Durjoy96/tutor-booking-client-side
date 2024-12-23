import { BiStar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";

const FindTutor = () => {
  const tutorials = useLoaderData();

  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        {/* search by language */}
        <div className="flex justify-end mb-12">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by language"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="max-w-xs rounded-md shadow-md bg-base-100 dark:bg-gray-50 dark:text-gray-800"
            >
              <img
                src={tutorial.imageUrl}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-base-content">
                    {tutorial.name}
                  </h2>
                  <span className="badge badge-ghost bg-primary/10 text-primary badge-md">
                    {tutorial?.language.charAt(0).toUpperCase() +
                      tutorial?.language.slice(1)}
                  </span>
                  <p className="text-base text-base-content-secondary flex items-center gap-1">
                    <BiStar />
                    Review:{" "}
                    <span className="text-base-content font-semibold">
                      {tutorial.review}
                    </span>
                  </p>
                </div>
                <button type="button" className="primary-btn">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindTutor;
