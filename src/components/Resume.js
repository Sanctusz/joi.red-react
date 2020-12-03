import React from "react";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";
import AnimatedText from "./AnimatedText.js";

export default function Resume({ currentIndex }) {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={4}>
          <img
            className="absolute right-3 bottom-3 w-6/12 sm:visible invisible 2xl:w-auto 2xl:h-2/4"
            backgroundImage
            src="/images/resume.svg"
            alt="man laptop"
          />
        </FadeInOpacityRenderWrapper>
        <div className="grid grid-cols-1 sm:w-6/12 h-screen content-center">
          <div className="pl-5">
            <h1 className="uppercase font-semibold">
              <AnimatedText
                text="My Resume"
                prefix="resume_start"
                colorFrom="#fff"
                colorTo="#b91c1c"
                fontSizeTo="7rem"
                fontSizeFrom="6rem"
              />
              <span className="text-red-700 red-text">.</span>
            </h1>
          </div>
          <div className="flex justify-center items-baseline flex-wrap">
            <div className="flex m-2">
              <a
                href="/files/JSINGASON_ISL_CV.pdf"
                download="JSINGASON_ISL_CV.pdf"
                className="text-base rounded-r-none focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-white  
        bg-red-700
        text-white
        hover:text-red-700
        border duration-200 ease-in-out"
              >
                <div className="flex leading-5">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  &nbsp; CV in Icelandic
                </div>
              </a>
              <a
                href="/files/JSINGASON_EN_CV.pdf"
                download="JSINGASON_EN_CV.pdf"
                className="text-base rounded-l-none border-l-0 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-white  
              bg-red-700
              text-white
              hover:text-red-700
                border duration-200 ease-in-out"
              >
                <div className="flex leading-5">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  &nbsp; CV in English
                </div>
              </a>
            </div>
          </div>
          <div className="pl-9 xl:pt-5 hidden lg:block">
            <h3 className="xl:text-4xl sm:text-xl text-red-700 font-semibold uppercase">
              Education
            </h3>
            <div className="grid grid-cols-1 divide-y divide-red-700 pl-12">
              <div className="p-2">
                <div className="text-white italic">Háskólinn í Reykjavík</div>
                <div className="text-white italic text-sm">
                  BS in Computer Science | June 2020
                </div>
                <ul className="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>
                    Focus on App Development, Web Solutions and Game Development
                  </li>
                  <li>Final project in cooperation with Origo</li>
                </ul>
              </div>
              <div className="p-2">
                <div className="text-white italic">Háskóli Íslands</div>
                <div className="text-white italic text-sm">
                  BA in Japanese Language and Culture | June 2017
                </div>
                <ul className="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>Exchange Year in Osaka, Japan 2016-2017</li>
                  <li>Current Japanese Level: N2</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pl-9 xl:pt-5 hidden xl:block">
            <h3 className="xl:text-4xl sm:text-xl text-red-700 font-semibold uppercase">
              Work History
            </h3>
            <div className="grid grid-cols-1 divide-y divide-red-700 pl-12">
              <div className="p-2">
                <div className="text-white italic">Hljóðbókasafn Íslands</div>
                <div className="text-white italic text-sm">
                  Computer Scientist, Summer 2020
                </div>
                <ul className="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>
                    Working on a full stack solution to automate the creation of
                    accessible books
                  </li>
                </ul>
              </div>
              <div className="p-2">
                <div className="text-white italic">Reykjavík Excursions</div>
                <div className="text-white italic text-sm">
                  Tour Guide, 2018-2020
                </div>
                <ul className="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>
                    Guiding Northern Light Tours and entertaining tourists
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}