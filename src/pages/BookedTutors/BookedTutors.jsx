import AxiosSecure from "../../hooks/AxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { BiStar } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import toast from "react-hot-toast";

const BookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
  console.log(bookedTutors);
  const { user } = useContext(AuthContext);
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios
      .get(`http://localhost:5000/booked?email=${user.email}`)
      .then((res) => setBookedTutors(res.data));
  }, [user, useAxios]);

  const reviewBtnHandler = (id) => {
    useAxios
      .patch(`/update-review/${id}`)
      .then(() => toast.success("Review Added Successfully!"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        <div className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookedTutors.map((tutor) => (
            <div
              key={tutor._id}
              className="w-full rounded-md shadow-md bg-base-100 dark:bg-[#222222]"
            >
              <img
                src={tutor.imageUrl}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-base-content dark:text-white/90">
                    {tutor.tutorName}
                  </h2>
                  <span className="badge badge-ghost bg-primary/10 text-primary badge-md dark:border-none">
                    {tutor?.language.charAt(0).toUpperCase() +
                      tutor?.language.slice(1)}
                  </span>
                  <p className=" text-xs sm:text-base dark:text-gray-600 flex items-center gap-1 dark:text-white/60">
                    <FaBangladeshiTakaSign className="w-4 h-4 fill-primary" />{" "}
                    {tutor.price} BDT
                  </p>
                </div>
                <button
                  onClick={() => reviewBtnHandler(tutor.tutorId)}
                  type="button"
                  className="primary-btn"
                >
                  <BiStar /> Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookedTutors;
