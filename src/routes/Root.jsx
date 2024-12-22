import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <header className="sticky top-0 bg-base-100/70 backdrop-blur-lg">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
