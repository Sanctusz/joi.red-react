import React from "react";
import { FadeInOpacityRenderWrapper } from "../libs/animations.js";
import AnimatedText from "./AnimatedText.js";

export default function Resume({ currentIndex }) {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <FadeInOpacityRenderWrapper currentIndex={currentIndex} index={4}>
          <img
            className="absolute right-3 bottom-3 w-6/12 2xl:w-auto 2xl:h-2/4"
            backgroundImage
            src="/images/resume.svg"
            alt="man laptop"
          />
        </FadeInOpacityRenderWrapper>
        <div className="grid grid-cols-1 w-6/12 h-screen content-center">
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
          <div className="pl-9 pt-5">
            <h3 className="text-4xl text-red-700 font-semibold uppercase">
              Education
            </h3>
            <div className="grid grid-cols-1 divide-y divide-red-700 pl-12">
              <div className="p-2">
                <div className="text-white italic">Háskólinn í Reykjavík</div>
                <div className="text-white italic text-sm">
                  BS in Computer Science<span className="text-red-700"> | </span>
                  June 2020
                </div>
                <ul class="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>
                    Focus on App Development, Web Solutions and Game Development
                  </li>
                  <li>Final project in cooperation with Origo</li>
                </ul>
              </div>
              <div className="p-2">
                <div className="text-white italic">Háskóli Íslands</div>
                <div className="text-white italic text-sm">
                  BA in Japanese Language and Culture
                  <span className="text-red-700"> | </span>June 2017
                </div>
                <ul class="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>Exchange Year in Osaka, Japan 2016-2017</li>
                  <li>Current Japanese Level: N2</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pl-9 pt-5">
            <h3 className="text-4xl text-red-700 font-semibold uppercase">
              Work History
            </h3>
            <div className="grid grid-cols-1 divide-y divide-red-700 pl-12">
              <div className="p-2">
                <div className="text-white italic">Hljóðbókasafn Íslands</div>
                <div className="text-white italic text-sm">
                  Computer Scientist<span className="text-red-700">, </span>
                  Summer 2020
                </div>
                <ul class="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>Working on a full stack solution to automate the creation of accessible books</li>
                </ul>
              </div>
              <div className="p-2">
                <div className="text-white italic">Reykjavík Excursions</div>
                <div className="text-white italic text-sm">
                Tour Guide
                <span className="text-red-700">, </span>2018<span className="text-red-700">-</span>2020
                </div>
                <ul class="list-inside bg-rose-200 text-white text-xs m-2">
                  <li>Guiding Northern Light Tours and entertaining tourists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
