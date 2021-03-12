import React from "react";
import Social from "../components/Social.js";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";
import AnimatedText from "../components/AnimatedText.js";

export default function Contact({ currentIndex }) {
  return (
    <div className="relative w-screen h-screen">
      <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={5}>
        <img
          className="absolute right-3 bottom-9 w-6/12 lg:w-auto lg:h-2/4 transform -rotate-12"
          backgroundImage
          src="/images/contact_me.svg"
          alt="man laptop"
        />
      </FadeInOpacityRenderWrapper>
      <div className="grid grid-cols-1 w-7/12 h-screen content-center">
        <div className="pl-5">
          <h1 className="uppercase font-semibold">
            <AnimatedText
              text="Contact Me"
              prefix="contact_start"
              colorFrom="#fff"
              colorTo="#b91c1c"
              fontSizeTo="7rem"
              fontSizeFrom="6rem"
            />
            <span className="red-text text-red-700">.</span>
          </h1>
        </div>
        <div className="pl-9 pt-5">
          <div className="grid grid-cols-4 grid-rows-1 divide-red-700 justify-items-center">
            <Social href="mailto:jsingason@gmail.com" svg="mail" />
            <Social href="https://www.github.com/Sanctusz" svg="github" />
            <Social href="https://www.linkedin.com/in/jsingason" svg="linkedin" />
            <Social href="https://yoppe.itch.io/" svg="itchio" />
          </div>
        </div>
      </div>
    </div>
  );
}
