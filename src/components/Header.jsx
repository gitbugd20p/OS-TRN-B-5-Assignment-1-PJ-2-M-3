import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-img-set relative">
        <div className="container mx-auto flex justify-between py-5 text-xl">
          <div>Logo</div>
          <div className="">
            <a href="#" className="pr-8">
              About
            </a>
            <a href="#" className="pr-8">
              Experience
            </a>
            <a href="#" className="pr-8">
              Project
            </a>
            <a href="#" className="pr-8">
              Contact
            </a>
          </div>
          <div>
            <button className="mr-8 rounded-[8px] border border-gray-600 px-3 py-1">
              Resume
            </button>
            <button className="mr-8 rounded-[8px] border border-gray-600 px-3 py-1">
              Hire Me
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <h1 className="text-8xl">Hi, I’m John Smith</h1>
          <p className="text-2xl text-gray-600">I design and build things.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
