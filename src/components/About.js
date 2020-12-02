import React from "react";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";

export default function About({ currentIndex }) {
  return (
    <div className="relative w-screen h-screen">
      <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={2}>
        <img
          className="absolute right-3 bottom-3 w-8/12 lg:w-auto lg:h-2/4"
          backgroundImage
          src="/images/dev_productivity.svg"
          alt="man laptop"
        />
      </FadeInOpacityRenderWrapper>
      <div className="grid grid-cols-1 w-6/12 h-screen content-center">
        <div className="pl-5">
          <h1 className="uppercase text-white text-7xl font-semibold">
            About Me
            <span className="text-red-700">.</span>
          </h1>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}
