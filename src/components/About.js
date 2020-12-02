import React from "react";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";
import AnimatedText from "./AnimatedText.js";

export default function About({ currentIndex }) {
  return (
    <div className="relative w-screen h-screen">
      <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={2}>
        <img
          className="absolute right-3 bottom-3 w-6/12 lg:w-auto lg:h-2/4"
          backgroundImage
          src="/images/dev_productivity.svg"
          alt="man laptop"
        />
      </FadeInOpacityRenderWrapper>
      <div className="grid grid-cols-1 w-6/12 h-screen content-center">
        <div className="pl-5">
          <h1 className="uppercase text-white font-semibold">
            <AnimatedText text="About me" prefix="about_start" colorFrom="#fff" colorTo="#b91c1c" fontSizeTo="7rem" fontSizeFrom="6rem" />
            <span className="text-red-700 red-text">.</span>
          </h1>
        </div>
        <div className="pl-9 pt-5 text-white">My name is Jóhann, I'm a recent graduate of the University of Reykjavík in Iceland. I'm excited to work on challenging real world projects.</div>
        <div className="pl-9 text-white">I feel comfortable in any computer language but I am also fluent in Icelandic, English and Japanese.</div>
      </div>
    </div>
  );
}
