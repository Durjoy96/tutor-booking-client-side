import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <>
      <header
        className={`sticky top-0 bg-base-100/70 backdrop-blur-lg z-20  ${
          darkMode ? "dark" : ""
        }`}
      >
        <Navbar></Navbar>
      </header>
      <main className={`z-10 ${darkMode ? "dark" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
