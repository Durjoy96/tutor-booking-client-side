const Testimonials = () => {
  return (
    <>
      <section className="bg-base-100 dark:bg-[#222222] dark:text-gray-800">
        <div className="main-container py-12 md:py-20 lg:py-32">
          <div className="container max-w-xl ">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-base-content dark:text-white/90 font-semibold leading-none">
              What Our <span className="text-primary">Learners Say</span>
            </h2>
            <p className="mt-2 text-base text-base-content-secondary">
              Hear from our learners about how our platform has transformed
              their language-learning journey. Real experiences, real growth,
              and real success stories from around the globe.
            </p>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* testimonial 1 */}
            <div className="flex flex-col max-w-sm mx-4 my-6 border rounded-xl shadow-sm hover:rotate-2 dark:border-none">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-[#4e4e4e]">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-primary"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  The platform made it so easy for me to connect with a Spanish
                  tutor and start speaking confidently within weeks. I love the
                  personalized approach!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-primary"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#4e4e4e] dark:text-gray-50">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  Sarah Johnson
                </p>
                <p className="text-sm uppercase">Marketing Specialist</p>
              </div>
            </div>
            {/* testimonial 2 */}
            <div className="flex flex-col max-w-sm mx-4 my-6 border rounded-xl shadow-sm hover:rotate-2 dark:border-none">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-[#4e4e4e]">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-primary"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I’ve always wanted to learn Japanese, and this site helped me
                  find the perfect tutor. The lessons are engaging, and the
                  tutors are very patient.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-primary"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#4e4e4e] dark:text-gray-50">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  Aisha Patel
                </p>
                <p className="text-sm uppercase">Travel Blogger</p>
              </div>
            </div>
            {/* testimonial 3 */}
            <div className="flex flex-col max-w-sm mx-4 my-6 border rounded-xl shadow-sm hover:rotate-2 dark:border-none">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-[#4e4e4e]">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-primary"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Learning French has been a dream of mine, and this platform
                  made it possible. The flexibility of booking sessions is a
                  game-changer!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-primary"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#4e4e4e] dark:text-gray-50">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  Michael Lee
                </p>
                <p className="text-sm uppercase">Software Engineer</p>
              </div>
            </div>
            {/* testimonial 4 */}
            <div className="flex flex-col max-w-sm mx-4 my-6 border rounded-xl shadow-sm hover:rotate-2 dark:border-none">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-[#4e4e4e]">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-primary"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  As someone who’s always struggled with language learning, I
                  was amazed at how effective and enjoyable the lessons are
                  here. Highly recommended!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-primary"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#4e4e4e] dark:text-gray-50">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  James Carter
                </p>
                <p className="text-sm uppercase">High School Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
