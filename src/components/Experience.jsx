import React from "react";
import aboutMe from "../assets/about-me.jpg";

const Experience = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto py-32">
          <div className="flex w-full items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 px-4 text-5xl text-black">Experience</span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          {/* 1st section */}
          <div className="flex gap-10 py-10">
            <div className="w-1/4 text-right">
              <div className="">
                <div className="p-8">
                  <div className="mb-4 border-b-2 border-gray-600">
                    <h2 className="mb-1 text-3xl">Job Title</h2>
                    <p className="mb-2 text-lg">Company Name</p>
                  </div>
                  <p>Apr 2018 - Dec 2022</p>
                </div>
              </div>
            </div>

            <div className="flex w-3/4 flex-col justify-start gap-4">
              <div className="border-l-2 border-gray-500">
                <ul className="ml-12 list-disc">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* second section */}
          <div className="flex gap-10 py-10">
            <div className="flex w-3/4 flex-col justify-start gap-4">
              <div className="border-r-2 border-gray-500">
                <ul className="ml-12 list-disc">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ducimus ipsum qui enim reprehenderit est natus maiores
                    non accusamus eaque nobis praesentium dolorem cupiditate ex,
                    quo id nesciunt earum laborum consectetur tempora autem
                    aperiam illo, ab ipsa? Ab, quae necessitatibus quasi quia
                    reprehenderit qui corporis aperiam sunt magni repellendus
                    natus?
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/4 text-left">
              <div className="">
                <div className="p-8">
                  <div className="mb-4 border-b-2 border-gray-600">
                    <h2 className="mb-1 text-3xl">Job Title</h2>
                    <p className="mb-2 text-lg">Company Name</p>
                  </div>
                  <p>Apr 2018 - Dec 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
