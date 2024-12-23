import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <header className="sticky top-0 bg-base-100/70 backdrop-blur-lg z-20">
        <Navbar></Navbar>
      </header>
      <main className="z-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
