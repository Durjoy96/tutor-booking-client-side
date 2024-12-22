import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
