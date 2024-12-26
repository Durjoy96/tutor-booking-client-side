/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import AxiosSecure from "../../hooks/AxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [updateTutorialId, setUpdateTutorialId] = useState(null);
  const [updateTutorialData, setUpdateTutorialData] = useState([]);
  const [refresh, setRefresh] = useState(false); //update the table ui after updating tutorial
  const { user } = useContext(AuthContext);
  const useAxios = AxiosSecure();

  useEffect(() => {
    useAxios.get(`/my-tutorials?email=${user.email}`).then((res) => {
      setTutorials(res.data);
    });
  }, [refresh]);

  const deleteBtnHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4438",
      cancelButtonColor: "#313140",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        useAxios
          .delete(`/tutorial/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            //instantly update the ui
            const filterTutorials = tutorials.filter(
              (tutorial) => tutorial._id !== id
            );
            setTutorials(filterTutorials);
          })
          .catch((error) => toast.error(error.message));
      }
    });
  };

  const updateBtnHandler = (id) => {
    document.getElementById("my_modal_3").showModal();
    setUpdateTutorialId(id);
    const [tutorial] = tutorials.filter((tutorial) => tutorial._id === id);
    setUpdateTutorialData(tutorial);
    console.log(tutorial);
  };

  const updateFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imageUrl = form.imageUrl.value;
    const language = form.language.value;
    const price = form.price.value;
    const review = form.review.value;
    const description = form.description.value;
    const tutorial = {
      name,
      email,
      imageUrl,
      language: language.toLowerCase(),
      price: Number(price),
      review: Number(review),
      description,
    };

    useAxios
      .put(`/tutorial/${updateTutorialId}`, tutorial)
      .then(() => {
        toast.success("Tutorial updated!");
        setRefresh((prev) => !prev); //update the table ui
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        <div className="overflow-x-auto bg-base-100 p-5 md:p-8 lg:p-12 rounded-xl shadow-sm">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Price</th>
                <th>Description</th>
                <th>Review</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {tutorials.length ? (
                tutorials.map((tutorial, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={tutorial?.imageUrl}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{tutorial?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost bg-primary/10 text-primary badge-md">
                          {tutorial?.language.charAt(0).toUpperCase() +
                            tutorial?.language.slice(1)}
                        </span>
                      </td>
                      <td>{tutorial.price} BDT</td>
                      <td>
                        <p className="text-base-content">
                          {tutorial.description}
                        </p>
                      </td>
                      <th>{tutorial.review}</th>
                      <th>
                        <div className="flex justify-end gap-6">
                          <button
                            onClick={() => deleteBtnHandler(tutorial._id)}
                            className="btn btn-ghost btn-xs bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-content"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => updateBtnHandler(tutorial._id)}
                            className="btn btn-ghost btn-xs bg-primary border-primary text-primary-content hover:bg-primary hover:opacity-80"
                          >
                            Update
                          </button>
                        </div>
                      </th>
                    </tr>
                  );
                })
              ) : (
                <p className="absolute left-1/2 -translate-x-1/2 mt-3 text-red-500">
                  Oops! There&apos;s Nothing Here
                </p>
              )}
            </tbody>
          </table>
        </div>
        {/* update modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-[.5fr_1fr] gap-6 md:gap-8 lg:gap-12">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-base-content">
                  Update Your Tutorial
                </h2>
                <p className="text-xs mt-2 md:text-base font-normal text-base-content-secondary">
                  Easily update and share your tutorial by providing essential
                  details such as image, description, and content.
                </p>
              </div>
              <div>
                <form onSubmit={updateFormHandler}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          What is your name?
                        </span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        value={user?.displayName}
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          What is your email address?
                        </span>
                      </div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        value={user?.email}
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          What is your image url?
                        </span>
                      </div>
                      <input
                        type="text"
                        defaultValue={updateTutorialData.imageUrl}
                        name="imageUrl"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          What language is your tutorial in?
                        </span>
                      </div>
                      <input
                        type="text"
                        name="language"
                        defaultValue={updateTutorialData.language}
                        placeholder="eg. English"
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          Set the price for your tutorial
                        </span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        defaultValue={updateTutorialData.price}
                        placeholder="eg. 5000"
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          Review
                        </span>
                      </div>
                      <input
                        type="number"
                        name="review"
                        placeholder=""
                        value={updateTutorialData.review}
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-base text-base-content">
                          Provide a Description
                        </span>
                      </div>
                      <textarea
                        name="description"
                        defaultValue={updateTutorialData.description}
                        className="textarea textarea-bordered"
                        placeholder="Type here"
                      ></textarea>
                    </label>
                  </div>
                  <div className="text-right mt-8">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                      className="primary-btn"
                    >
                      {" "}
                      <GrUpdate /> Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyTutorials;
