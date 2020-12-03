import React from "react";
import { Reveal, Tween } from "react-gsap";

export default function Navbar({ currentIndex, scrollToIndex }) {
  return (
    <div className="fixed z-50 mx-auto px-4">
      <div className="flex items-center justify-center h-24 w-screen relative">
        <Reveal repeat>
          <Tween from={{ opacity: 0 }} delay={1} duration={2}>
            <button onClick={() => scrollToIndex(1)} className="h-16 w-16 focus:outline-none sm:top-6 sm:left-6 top-1 -left-1 absolute">
              <img
                className=""
                src="/images/jsi_logo.svg"
                alt="logo"
              />
            </button>
          </Tween>
        </Reveal>
        <Tween from={{ y: "-100vh" }} stagger={0.1}>
          <input
            to="p1"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => scrollToIndex(1)}
            checked={currentIndex === 1 ? true : false}
            type="radio"
            className="form-radio mx-2 text-red-700 ring-2 bg-transparent ring-red-700 cursor-pointer"
          />
        <input
          to="p2"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={() => scrollToIndex(2)}
          checked={currentIndex === 2 ? true : false}
          type="radio"
          className="form-radio mx-2 text-red-700 ring-2 bg-transparent ring-red-700 cursor-pointer"
        />
        <input
          to="p3"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={() => scrollToIndex(3)}
          checked={currentIndex === 3 ? true : false}
          type="radio"
          className="form-radio mx-2 text-red-700 ring-2 bg-transparent ring-red-700 cursor-pointer"
        />
        <input
          to="p4"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={() => scrollToIndex(4)}
          checked={currentIndex === 4 ? true : false}
          type="radio"
          className="form-radio mx-2 text-red-700 ring-2 bg-transparent ring-red-700 cursor-pointer"
        />
        <input
          to="p5"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={() => scrollToIndex(5)}
          checked={currentIndex === 5 ? true : false}
          type="radio"
          className="form-radio mx-2 text-red-700 ring-2 bg-transparent ring-red-700 cursor-pointer"
        />
        </Tween>
        <Reveal repeat>
          <Tween from={{ opacity: 0 }} delay={1} duration={2}>
            <button onClick={() => scrollToIndex(5)} className="text-white font-bold text-xl focus:outline-none uppercase p-5 sm:top-3 top-12 right-16 absolute sm:visible invisible">
              Contact <span className="text-5xl text-red-700 absolute top-1 -right-6">→</span>
            </button>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
}
