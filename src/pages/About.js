import React from "react";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";
import AnimatedText from "../components/AnimatedText.js";

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
      <div className="grid grid-cols-1 sm:w-6/12 w-full h-screen content-center text-white">
        <div className="pl-5">
          <h1 className="uppercase font-semibold">
            <AnimatedText text="About me" prefix="about_start" colorFrom="#fff" colorTo="#b91c1c" fontSizeTo="7rem" fontSizeFrom="6rem" />
            <span className="text-red-700 red-text">.</span>
          </h1>
        </div>
        <div className="px-9 pt-5 sm:text-lg text-sm">My name is Jóhann, I'm looking forward to working with you<span className="text-red-700 text-3xl">.</span></div>
        <div className="px-9 pt-2 sm:text-lg text-sm">I'm excited to work on challenging real world projects<span className="text-red-700 text-3xl">.</span></div>
        <div className="px-9 pt-2 sm:text-lg text-sm">My greatest hobbies are travel, languages and of course computers<span className="text-red-700 text-3xl">.</span></div>
        <div className="px-9 pt-2 sm:text-lg text-sm">I feel comfortable in any computer language<span className="text-red-700 text-3xl">.</span></div>
        <div className="px-9 pt-2 sm:text-lg text-sm">I am also fluent in Icelandic, English and Japanese<span className="text-red-700 text-3xl">.</span></div>
      </div>
    </div>
  );
}
