import React from "react";
import aboutMe from "../assets/about-me.jpg";
const AboutMe = () => {
  return (
    <>
      <div className="bg-[#c4c4c4]">
        <div className="container mx-auto py-32">
          <div className="flex w-full items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 px-4 text-5xl text-black">About Me</span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <div className="flex gap-10 py-10">
            <div className="flex w-2/3 flex-col justify-start gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                sapiente odio eveniet cum ratione obcaecati fugiat suscipit
                voluptatem, nemo delectus corporis doloremque incidunt
                laudantium necessitatibus reiciendis est quisquam cumque error
                mollitia sed numquam ea itaque vitae! Accusamus magnam debitis
                corrupti. Voluptate nam ratione perferendis alias dolorem nemo
                saepe laboriosam eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                sapiente odio eveniet cum ratione obcaecati fugiat suscipit
                voluptatem, nemo delectus corporis doloremque incidunt
                laudantium necessitatibus reiciendis est quisquam cumque error
                mollitia sed numquam ea itaque vitae! Accusamus magnam debitis
                corrupti. Voluptate nam ratione perferendis alias dolorem nemo
                saepe laboriosam eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                sapiente odio eveniet cum ratione obcaecati fugiat suscipit
                voluptatem, nemo delectus corporis doloremque incidunt
                laudantium necessitatibus reiciendis est quisquam cumque error
                mollitia sed numquam ea itaque vitae! Accusamus magnam debitis
                corrupti. Voluptate nam ratione perferendis alias dolorem nemo
                saepe laboriosam eum?
              </p>
            </div>

            <div className="w-1/3">
              <img
                src={aboutMe}
                alt="about-me"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
