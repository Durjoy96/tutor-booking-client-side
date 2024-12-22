import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((res) => {
        toast.success("login Successfully!");
        form.reset();
        console.log(res);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="main-container mt-12 md:mt-20 flex justify-center">
        <div className="w-full max-w-md p-4 rounded-md shadow bg-base-100 sm:p-8 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-base text-center dark:text-gray-600">
            Dont have account?&nbsp;
            <Link
              to="/register"
              rel="noopener noreferrer"
              className="text-primary focus:underline hover:underline"
            >
              Sign up here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <GoogleLogin />
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form onSubmit={formHandler} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <button className="primary-btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
