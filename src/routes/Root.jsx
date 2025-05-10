import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <>
      <div
        className={`sticky top-0 z-[999] ${
          darkMode ? "dark text-white/80" : ""
        }`}
      >
        <header
          className={`bg-base-100/70 backdrop-blur-lg z-20 dark:bg-[#4e4e4e]/80`}
        >
          <Navbar></Navbar>
        </header>
      </div>
      <main className={`z-10 ${darkMode ? "dark" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
