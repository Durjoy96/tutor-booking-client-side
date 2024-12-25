import Categories from "./Categories/Categories";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
