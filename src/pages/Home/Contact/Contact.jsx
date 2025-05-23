import toast from "react-hot-toast";
import contactImg from "../../../assets/icons/contact.png";

const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
    toast.success("Success!");
    e.target.reset();
  };
  return (
    <>
      <div className="main-container py-12 md:py-20 lg:py-32 grid grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2 dark:bg-dark dark:text-white/90">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold leading-tight md:text-3xl lg:text-4xl">
              Let&apos;s talk!
            </h2>
            <div className="text-base-content-secondary ark:text-gray-600">
              For any query free free to contact with us
            </div>
          </div>
          <img src={contactImg} alt="Contact" className="p-6" />
        </div>
        <form onSubmit={formHandler} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-[#222222]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-[#222222]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-[#222222]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="primary-btn w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-primary dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
