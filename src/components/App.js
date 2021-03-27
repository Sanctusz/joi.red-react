import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Index from "../pages/Index";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { scroller as scroll } from "react-scroll";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function App() {
  var [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    scrollToNextIndex();
  }, [scrollToNextIndex]);

  function scrollUp() {
    if (currentIndex === 1) return;
    setCurrentIndex(currentIndex - 1);
  }

  function scrollDown() {
    if (currentIndex === 5) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function scrollToNextIndex() {
    scroll.scrollTo("p" + currentIndex.toString(), {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }

  function scrollToIndex(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <ReactScrollWheelHandler
        upHandler={() => scrollUp()}
        downHandler={() => scrollDown()}
      >
        <Navbar currentIndex={currentIndex} scrollToIndex={scrollToIndex} />
        <div
          id="p1"
          className="min-h-screen bg-darkbg flex flex-wrap content-center"
        >
          <Index currentIndex={currentIndex} scrollToIndex={scrollToIndex} />
        </div>
        <div id="p2" className="min-h-screen bg-semidarkbg flex flex-wrap content-center">
          <About currentIndex={currentIndex} />
        </div>
        <div id="p3" className="min-h-screen bg-darkbg relative">
          <Skills x="right" y="bottom" currentIndex={currentIndex} />
        </div>
        <div id="p4" className="min-h-screen bg-semidarkbg">
          <Resume currentIndex={currentIndex} />
        </div>
        <div id="p5" className="min-h-screen bg-darkbg">
          <Contact currentIndex={currentIndex} />
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
}

export default App;
