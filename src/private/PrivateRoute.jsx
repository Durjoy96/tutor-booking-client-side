/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../assets/Lottie/loading.json";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-base-200/70 flex justify-center items-center">
          <div className="w-96">
            <Lottie animationData={Loading} loop={true} />
          </div>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
