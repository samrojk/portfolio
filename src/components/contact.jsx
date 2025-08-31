import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;

    const subject = `Message from ${name}`;
    const body = `Hi, my name is ${name}.\n\n${message}`;

    // Open Gmail compose in new tab with prefilled subject & body
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=samrojk7744@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <div className="text-primary-dark dark:text-primary mx-[42px] justify-items-center mt-[86px]">
      {/* Heading */}
      <div>
        <h1 className="text-[42px] font-semibold tracking-wide">
          Let's Connect
        </h1>
      </div>

      {/* Main Form */}
      <div className="w-[580px] mt-[28px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <span className="mb-[-4px]">Name</span>
          <input
            title="Enter your name here!"
            type="text"
            name="name"
            maxlength="80"
            placeholder="What's your name?"
            className="w-full px-[16px] py-[10px] border-2 border-primary-dark/20 dark:border-primary/20 focus:border-primary-dark/70 dark:focus:border-primary/70 rounded-[10px] focus:outline-none transition-all duration-300"
            required
          />
          <span className="mb-[-4px]">Message</span>
          <textarea
            title="Tell me how can i help you?"
            name="message"
            maxlength="500"
            placeholder="Hi, let's connect!"
            className="w-full h-[160px] px-[16px] py-[10px] border-2 border-primary-dark/20 dark:border-primary/20 focus:border-primary-dark/70 dark:focus:border-primary/70 rounded-[10px] focus:outline-none transition-all duration-300"
            required
          ></textarea>

          <button
            title="Send email via google!"
            type="submit"
            className="flex flex-row items-center mt-[6px] gap-[14px] text-[18px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-[16px] py-[10px] rounded-[10px] w-fit bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800 hover:bg-green-800/8 dark:hover:bg-red-100/4 cursor-pointer"
          >
            <MdEmail size={24} />
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
