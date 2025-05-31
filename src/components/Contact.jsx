import React from "react";
import aboutMe from "../assets/about-me.jpg";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto pt-32">
          <div className="flex w-full items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 px-4 text-5xl text-black">Contact</span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <div className="flex justify-center gap-10 pt-10">
            <div className="flex flex-col gap-12">
              <p className="mx-auto w-2/3 text-center">
                I am currently seeking employment, and I would appreciate it if
                you could contact me with any available job opportunities.
              </p>
              <button className="mx-auto w-fit rounded-[8px] border border-gray-600 px-3 py-1">
                Write Message
              </button>
              <div className="icons-c flex justify-center gap-2">
                <Github />
                <Linkedin />
              </div>
            </div>
          </div>
          <p className="py-5 text-center">John Smith - 2023</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
