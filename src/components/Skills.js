import React from "react";
import Skill from "./Skill";
import { FadeInLRUDRenderWrapper } from "../libs/animations.js";

export default function Skills({ x, y, currentIndex }) {
  return (
    <div className="flex h-screen w-screen">
      <FadeInLRUDRenderWrapper
        currentIndex={currentIndex}
        index={1}
        fadeIn="left"
      >
        <div className="grid grid-cols-1 w-screen-50 h-screen content-center">
          <div className="pl-5">
            <h1 className="uppercase text-white subpixel-antialiased font-semibold text-6xl xl:text-8xl">
              Skills <span className="text-red-700">&</span> Experience
              <span className="text-red-700">.</span>
            </h1>
          </div>
          <div className="pl-5">
            <h2 className="text-2xl text-red-700 lowercase">
              Reykjavík University, HBS, etc.
            </h2>
          </div>
          <div>
            {/* <button
              onClick={() => scrollToIndex(5)}
              className="p-3 my-3 uppercase text-red-700 border font-medium rounded-lg focus:outline-none"
            >
              Contact
            </button> */}
          </div>
        </div>
      </FadeInLRUDRenderWrapper>
      <FadeInLRUDRenderWrapper
        currentIndex={currentIndex}
        index={3}
        fadeIn={"right"}
      >
        <div className="grid grid-cols-5 gap-4 flex-grow-0 p-9 w-screen-50 h-screen justify-items-end content-end">
          <div className="col-span-4"></div>
          <Skill
            svg="/images/skills/react.svg"
            bgColorFrom="from-cyan-300"
            bgColorTo="to-cyan-600"
            link="https://reactjs.org/"
          />
          <div className="col-span-3"></div>
          <Skill
            svg="/images/skills/python.svg"
            bgColorFrom="from-yellow-300"
            bgColorTo="to-blue-600"
            link="https://www.python.org/"
          />
          <Skill
            svg="/images/skills/node.svg"
            bgColorFrom="from-green-900"
            bgColorTo="to-green-600"
            link="https://nodejs.org/en/"
          />
          <div className="col-span-2"></div>
          <Skill
            svg="/images/skills/js.svg"
            bgColorFrom="from-yellow-300"
            bgColorTo="to-yellow-400"
            link="https://www.javascript.com"
          />
          <Skill
            svg="/images/skills/cpp.svg"
            bgColorFrom="from-red-900"
            bgColorTo="to-red-300"
            link="https://www.cplusplus.com/"
          />
          <Skill
            svg="/images/skills/csharp.svg"
            bgColorFrom="from-purple-900"
            bgColorTo="to-purple-300"
            link="https://docs.microsoft.com/en-us/dotnet/csharp/"
          />
          <div className="col-span-1"></div>
          <Skill
            svg="/images/skills/docker.svg"
            bgColorFrom="from-cyan-300"
            bgColorTo="to-cyan-800"
            link="https://www.docker.com/"
          />
          <Skill
            svg="/images/skills/ex.svg"
            bgColorFrom="from-gray-300"
            bgColorTo="to-yellow-400"
            link="https://expressjs.com/"
          />
          <Skill
            svg="/images/skills/git.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://git-scm.com/"
          />
          <Skill
            svg="/images/skills/github.svg"
            bgColorFrom="from-gray-600"
            bgColorTo="to-black"
            link="https://github.com/"
          />

          <Skill
            svg="/images/skills/html.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://www.w3schools.com/html/html_intro.asp"
          />
          <Skill
            svg="/images/skills/mongodb.svg"
            bgColorFrom="from-green-400"
            bgColorTo="to-green-900"
            link="https://www.mongodb.com/"
          />
          <Skill
            svg="/images/skills/postgresql.svg"
            bgColorFrom="from-cyan-700"
            bgColorTo="to-cyan-900"
            link="https://www.postgresql.org/"
          />
          <Skill
            svg="/images/skills/vue.svg"
            bgColorFrom="from-gray-900"
            bgColorTo="to-green-700"
            link="https://vuejs.org/"
          />
          <Skill
            svg="/images/skills/ubuntu.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://ubuntu.com/"
          />
        </div>
      </FadeInLRUDRenderWrapper>
    </div>
  );
}
