import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { LuSendHorizontal } from "react-icons/lu";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="main-container mx-5 md:mx-auto mt-12 md:mt-20 bg-base-100 px-5 py-8 md:p-12 rounded-xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-[.5fr_1fr] gap-6 md:gap-8 lg:gap-12">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-base-content">
              Add Tutorials
            </h2>
            <p className="text-sm mt-2 md:text-base font-normal text-base-content-secondary">
              Easily create and share tutorials by providing essential details
              such as title, description, and content.
            </p>
          </div>
          <div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base text-base-content">
                      What is your name?
                    </span>
                  </div>
                  <input
                    type="text"
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
                    placeholder="Type here"
                    value={user?.email}
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base text-base-content">
                      What is your tutorial image url?
                    </span>
                  </div>
                  <input
                    type="text"
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
                    placeholder="eg. 5000"
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
