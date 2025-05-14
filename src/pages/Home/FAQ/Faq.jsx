const Faq = () => {
  return (
    <div className="bg-base-100 dark:bg-[#222222] px-5 py-12 md:py-20 lg:py-32">
      <div className="flex gap-8 flex-col md:flex-row max-w-screen-xl mx-auto ">
        <h2 className="text-xl md:text-3xl lg:text-4xl text-base-content font-bold dark:text-white/90">
          Frequently Asked Questions
        </h2>
        <div className="join join-vertical bg-transparent">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold dark:text-white/80">
              1. What is Titly?
            </div>
            <div className="collapse-content text-sm dark:text-white/60">
              Titly is an online platform that connects you with expert language
              tutors from around the world. Whether you are learning for travel,
              school, work, or just for fun, Titly makes it easy to book
              personalized, one-on-one sessions and learn at your own
              pace—anytime, anywhere.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold dark:text-white/60">
              2. Can I choose more than one tutor or language?
            </div>
            <div className="collapse-content text-sm dark:text-white/60">
              Yes! You can learn multiple languages or try sessions with
              different tutors until you find the perfect match. Titly is
              designed to be flexible for your needs.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold dark:text-white/60">
              3. What devices can I use for lessons?
            </div>
            <div className="collapse-content text-sm dark:text-white/60">
              You can access Titly on any device—laptop, tablet, or
              smartphone—using a modern web browser. No downloads or special
              software are needed.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold dark:text-white/60">
              4. What kind of tutors are on Titly?
            </div>
            <div className="collapse-content text-sm dark:text-white/60">
              Our tutors include certified language teachers, native speakers,
              and professional educators—all vetted through a thorough
              application and review process to ensure top-quality instruction.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold dark:text-white/60">
              5. How much do lessons cost?
            </div>
            <div className="collapse-content text-sm dark:text-white/60">
              Tutors set their own rates based on experience and specialization.
              You can filter tutors by price, and most lessons start around $10.
              There’s something for every budget.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
