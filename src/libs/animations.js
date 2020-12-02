import React from 'react';
import { Reveal, Tween } from "react-gsap";

export const FadeInLeft = ({ delay, children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }}
    ease="back.out(0.5)"
    delay={delay}
  >
    {children}
  </Tween>
);

export const FadeInRight = ({ delay, children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
    ease="back.out(0.5)"
    delay={delay}
  >
    {children}
  </Tween>
);

export const FadeInUp = ({ delay, children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(0, -100vh, 0)" }}
    ease="back.out(0.5)"
    delay={delay}
  >
    {children}
  </Tween>
);

export const FadeInDown = ({ delay, children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(0, 100vh, 0)" }}
    ease="back.out(0.5)"
    delay={delay}
  >
    {children}
  </Tween>
);

export const FadeIn = ({ delay, children }) => (
  <Tween
    from={{ opacity: 0 }}
    ease="back.out(1)"
    delay={delay}
  >
    {children}
  </Tween>
);

export function FadeInOpacityRenderWrapper({ currentIndex, index, children }) {
  if (currentIndex === index) {
    return (
      <Reveal trigger={<div />}>
        <FadeIn>{children}</FadeIn>
      </Reveal>
    );
  } else {
    return (<div>{children}</div>);
  }
}

export function FadeInLRUDRenderWrapper({ currentIndex, index, fadeIn="left", delay=0.25, children }) {
  if (currentIndex === index) {
    if (fadeIn === "left") {
      return (
        <Reveal trigger={<div />}>
          <FadeInLeft delay={delay}>{children}</FadeInLeft>
        </Reveal>
      );
    } else if (fadeIn === "right") {
      return (
        <Reveal trigger={<div />}>
          <FadeInRight delay={delay}>{children}</FadeInRight>
        </Reveal>
      );
    } else if (fadeIn === "down") {
      return (
        <Reveal trigger={<div />}>
          <FadeInDown delay={delay}>{children}</FadeInDown>
        </Reveal>
      );
    } else {
      return (
        <Reveal trigger={<div />}>
          <FadeInUp delay={delay}>{children}</FadeInUp>
        </Reveal>
      );
    }
  } else {
    return (<div>{children}</div>);
  }
}