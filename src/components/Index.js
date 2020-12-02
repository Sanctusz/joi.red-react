import React from "react";
import {
  FadeInLRUDRenderWrapper,
  FadeInOpacityRenderWrapper,
} from "../libs/animations.js";

export default function Index({ currentIndex, scrollToIndex }) {
  return (
    <div className="sm:pl-32 pl-6">
      <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={1}>
        <img
          className="absolute right-3 bottom-3 w-8/12 lg:w-auto lg:h-2/4"
          backgroundImage
          src="/images/programming.svg"
          alt="man laptop"
        />
      </FadeInOpacityRenderWrapper>
      <FadeInLRUDRenderWrapper
        currentIndex={currentIndex}
        index={1}
        fadeIn="left"
      >
        <div className="grid grid-cols-1 sm:w-7/12 xl:w-9/12 h-screen content-center">
          <div>
            <h1 className="uppercase text-white subpixel-antialiased font-semibold text-6xl xl:text-9xl">
              Hi<span className="text-red-700">,</span> I<span className="text-red-700">'</span>m Jóhann<span className="text-red-700">.</span>
            </h1>
          </div>
          <div>
            <h2 className="text-2xl text-red-700 lowercase">
              Computer Scientist
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
        index={1}
        fadeIn="up"
        delay={1}
      >
        <div className="absolute bottom-20 -left-10 pb-9">
          <h3 className="transform rotate-90 text-white font-semibold tracking-widest text-xl">
            SCROLLDOWN
          </h3>
        </div>
        <div className="absolute bottom-0 left-6 px-0.5 pb-3">
          <h3 className="text-white font-semibold text-5xl">↓</h3>
        </div>
      </FadeInLRUDRenderWrapper>
    </div>
  );
}
