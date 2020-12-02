import React, { createRef, useEffect, useRef } from "react";
import Skill from "./Skill";
import { FadeInLRUDRenderWrapper } from "../libs/animations.js";
import { Back, TweenMax } from "gsap/gsap-core";
import AnimatedText from "./AnimatedText";

export default function Skills({ x, y, currentIndex }) {
  let refArray = [...new Array(15)].map(() => createRef());
  let cardRef = useRef(refArray);

  function animateGrid() {
    const cards = cardRef.current.map((card) => card.current);
    TweenMax.to(cards, 0, {transform: "translate3d(100vw, 0, 0)"});
    TweenMax.staggerTo(
      cards,
      1,
      {
        transform: "translate3d(0, 0, 0)",
        ease: Back.easeOut.config(1.4),
      },
      0.1
    );
  }

  useEffect(() => {
    
    if (currentIndex === 3) {
      animateGrid();
    }
  }, [currentIndex]);

  return (
    <div className="flex h-screen w-screen">
      <FadeInLRUDRenderWrapper
        currentIndex={currentIndex}
        index={1}
        fadeIn="left"
      >
        <div className="grid grid-cols-1 w-screen-50 h-screen content-center">
          <div className="pl-5">
            <h1 className="uppercase text-white subpixel-antialiased font-semibold">
              <AnimatedText text="Skills" prefix="skills_start" colorFrom="#fff" colorTo="#b91c1c" fontSizeTo="7rem" fontSizeFrom="6rem" />
              <span className="text-red-700 red-text"> & </span>
              <AnimatedText text="Experience" prefix="skills_end" colorFrom="#fff" colorTo="#b91c1c" fontSizeTo="7rem" fontSizeFrom="6rem" />
              <span className="text-red-700 red-text">.</span>
            </h1>
          </div>
          <div className="pl-9 pt-5 text-white">
            I thorougly enjoy working on full-stack projects. Treating it as if I were finishing up a good puzzle, building each element/puzzle piece and making sure everything connects up beautifully at the end.
          </div>
          <div className="pl-9 pt-5 text-xl text-white">
            <span className="text-red-700">
              Recently
            </span> worked with <a href="https://hbs.is" className="text-red-700">
              HBS
            </a> on the project "<a href="https://github.com/Sanctusz/Ascanius" className="text-red-700">Ascanius</a>" which focuses on automating <span className="text-red-700">full-text audio books</span>.
          </div>
        </div>
      </FadeInLRUDRenderWrapper>
      <div className="grid grid-cols-5 gap-4 max-w-screen-sm bottom-3 right-3 p-3 absolute">
        <div className="col-span-4"></div>
        <div ref={cardRef.current[0]}>
          <Skill
            svg="react.svg"
            bgColorFrom="from-cyan-300"
            bgColorTo="to-cyan-600"
            link="https://reactjs.org/"
          />
        </div>
        <div className="col-span-3"></div>
        <div ref={cardRef.current[1]}>
          <Skill
            svg="python.svg"
            bgColorFrom="from-yellow-300"
            bgColorTo="to-blue-600"
            link="https://www.python.org/"
          />
        </div>
        <div ref={cardRef.current[2]}>
          <Skill
            svg="node.svg"
            bgColorFrom="from-green-900"
            bgColorTo="to-green-600"
            link="https://nodejs.org/en/"
          />
        </div>
        <div className="col-span-2"></div>
        <div ref={cardRef.current[3]}>
          <Skill
            svg="js.svg"
            bgColorFrom="from-yellow-300"
            bgColorTo="to-yellow-400"
            link="https://www.javascript.com"
          />
        </div>
        <div ref={cardRef.current[4]}>
          <Skill
            svg="cpp.svg"
            bgColorFrom="from-red-900"
            bgColorTo="to-red-300"
            link="https://www.cplusplus.com/"
          />
        </div>
        <div ref={cardRef.current[5]}>
          <Skill
            svg="csharp.svg"
            bgColorFrom="from-purple-900"
            bgColorTo="to-purple-300"
            link="https://docs.microsoft.com/en-us/dotnet/csharp/"
          />
        </div>
        <div className="col-span-1"></div>
        <div ref={cardRef.current[6]}>
          <Skill
            svg="docker.svg"
            bgColorFrom="from-cyan-300"
            bgColorTo="to-cyan-800"
            link="https://www.docker.com/"
          />
        </div>
        <div ref={cardRef.current[7]}>
          <Skill
            svg="ex.svg"
            bgColorFrom="from-gray-300"
            bgColorTo="to-yellow-400"
            link="https://expressjs.com/"
          />
        </div>
        <div ref={cardRef.current[8]}>
          <Skill
            svg="git.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://git-scm.com/"
          />
        </div>
        <div ref={cardRef.current[9]}>
          <Skill
            svg="github.svg"
            bgColorFrom="from-gray-600"
            bgColorTo="to-black"
            link="https://github.com/"
          />
        </div>
        <div ref={cardRef.current[10]}>
          <Skill
            svg="html.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://www.w3schools.com/html/html_intro.asp"
          />
        </div>
        <div ref={cardRef.current[11]}>
          <Skill
            svg="mongodb.svg"
            bgColorFrom="from-green-400"
            bgColorTo="to-green-900"
            link="https://www.mongodb.com/"
          />
        </div>
        <div ref={cardRef.current[12]}>
          <Skill
            svg="postgresql.svg"
            bgColorFrom="from-cyan-700"
            bgColorTo="to-cyan-900"
            link="https://www.postgresql.org/"
          />
        </div>
        <div ref={cardRef.current[13]}>
          <Skill
            svg="vue.svg"
            bgColorFrom="from-gray-900"
            bgColorTo="to-green-700"
            link="https://vuejs.org/"
          />
        </div>
        <div ref={cardRef.current[14]}>
          <Skill
            svg="ubuntu.svg"
            bgColorFrom="from-yellow-600"
            bgColorTo="to-yellow-800"
            link="https://ubuntu.com/"
          />
        </div>
      </div>
    </div>
  );
}
