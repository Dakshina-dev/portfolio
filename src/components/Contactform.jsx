import React from "react";

const Contactform = () => {
  return (
    <div id="contact" className="pt-10">
      <div className="flex flex-col my-10 p-2 gap-8 justify-center items-center">
        <p className="text-xl text-center">Connect with me</p>
        <h2 className="text-6xl text-center">Get in touch</h2>
        <p className="px-10 text-center">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
        <form action="https://formspree.io/f/xanqarzl" method="post" className="flex flex-col gap-8 ">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
          <input required type="text" name="name" placeholder=" Enter your name" className="w-80 outline-none bg-transparent border px-2 py-3 rounded-md"/>
          <input required type="email" name="email" placeholder="Enter your email"  className="w-80 outline-none bg-transparent border px-2 py-3 rounded-md"/>
          </div>
          <textarea type="text-area" name="message" placeholder="Enter your message" className="w-80 h-44 sm:w-full outline-none bg-transparent border px-2 py-3 rounded-md"/>
          <div className="flex items-center justify-center">
          <button type="submit" className="border w-fit px-6 py-3 rounded-3xl font-semibold hover:bg-[#19002c]/20 transition-all ease-in-out text-lg">Submit now</button>
          </div>
        </form>
        <div />
      </div>
    </div>
  );
};

export default Contactform;
