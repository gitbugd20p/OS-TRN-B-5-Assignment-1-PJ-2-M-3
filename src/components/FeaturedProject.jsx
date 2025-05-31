import React from "react";
import aboutMe from "../assets/about-me.jpg";
import { Github, MessageSquareShare } from "lucide-react";
import OtherProjects from "./OtherProjects";

const FeaturedProject = () => {
  return (
    <>
      <div className="bg-[#c4c4c4]">
        <div className="container mx-auto py-32">
          <div className="flex w-full items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 px-4 text-5xl text-black">
              Featured Project
            </span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          <div className="flex gap-10 py-10">
            <div className="flex w-1/2 flex-col justify-center gap-4">
              <h2 className="text-4xl">Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.
              </p>
              <div className="border-t-2 border-black"></div>
              <div>HTML CSS JS Figma React</div>
              <div className="icons flex gap-2">
                <Github />
                <MessageSquareShare />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={aboutMe}
                alt="about-me"
                className="h-auto w-full rounded-[12px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-10 py-10">
            <div className="flex w-1/2 flex-col justify-center gap-4">
              <h2 className="text-4xl">Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.
              </p>
              <div className="border-t-2 border-black"></div>
              <div>HTML CSS JS Figma React</div>
              <div className="icons flex gap-2">
                <Github />
                <MessageSquareShare />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={aboutMe}
                alt="about-me"
                className="h-auto w-full rounded-[12px] object-cover"
              />
            </div>
          </div>
          {/* Other Projects */}
          <OtherProjects />
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
