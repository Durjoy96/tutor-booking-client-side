/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import AxiosSecure from "../../hooks/AxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const { user } = useContext(AuthContext);
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios.get(`/tutorials?email=${user.email}`).then((res) => {
      setTutorials(res.data);
      console.log(res.data);
    });
  }, []);
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
              {tutorials.map((tutorial, idx) => {
                return (
                  <>
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
                          <button className="btn btn-ghost btn-xs bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-content">
                            Delete
                          </button>
                          <button className="btn btn-ghost btn-xs bg-primary border-primary text-primary-content hover:bg-primary hover:opacity-80">
                            Update
                          </button>
                        </div>
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyTutorials;
