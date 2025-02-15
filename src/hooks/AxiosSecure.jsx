import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const instance = axios.create({
  baseURL: "https://tutor-booking-server.vercel.app",
  withCredentials: true,
});

const AxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        if (error.status === 401) {
          signOutUser();
        }
        return Promise.reject(error);
      }
    );
  }, [signOutUser]);
  return instance;
};

export default AxiosSecure;
