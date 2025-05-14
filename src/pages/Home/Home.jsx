import Categories from "./Categories/Categories";
import Contact from "./Contact/Contact";
import Faq from "./FAQ/Faq";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Testimonials />
      <Contact />
      <Faq />
    </>
  );
};

export default Home;
