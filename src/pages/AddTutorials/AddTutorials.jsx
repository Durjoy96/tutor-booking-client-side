import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { LuSendHorizontal } from "react-icons/lu";
import AxiosSecure from "../../hooks/AxiosSecure";
import toast from "react-hot-toast";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const useAxios = AxiosSecure();

  const formHandler = (e) => {
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
      .post("/tutorials", tutorial)
      .then((res) => {
        console.log(res.data);
        toast.success("Tutorial Successfully Added!");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="main-container mx-5 md:mx-auto mt-12 md:mt-20 bg-base-100 px-5 py-8 md:p-12 rounded-xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-[.5fr_1fr] gap-6 md:gap-8 lg:gap-12">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-base-content">
              Add Tutorials
            </h2>
            <p className="text-xs mt-2 md:text-base font-normal text-base-content-secondary">
              Easily create and share tutorials by providing essential details
              such as title, description, and content.
            </p>
          </div>
          <div>
            <form onSubmit={formHandler}>
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
                    value={0}
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
                    className="textarea textarea-bordered"
                    placeholder="Type here"
                  ></textarea>
                </label>
              </div>
              <div className="text-right mt-8">
                <button className="primary-btn">
                  {" "}
                  <LuSendHorizontal /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTutorials;
