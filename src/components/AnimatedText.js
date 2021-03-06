import gsap from 'gsap/gsap-core';
import React from 'react'

export default function AnimatedText({ text, prefix, colorFrom, colorTo, fontSizeFrom, fontSizeTo }) {
  let letters = text.split("");
  let animatedLetters = [];
  letters.forEach((letter, idx) => {
    animatedLetters.push(createAnimatedLetter(letter, idx));
  });

  function animateIn(idx) {
    gsap.to(`#${prefix}${idx}`, {
      fontSize: `clamp(2.5rem, 0.875rem + 8.333333vw, ${fontSizeTo})`,
      color: colorTo
    });
  }
  
  function animateOut(idx) {
    gsap.to(`#${prefix}${idx}`, {
      fontSize: `clamp(2rem, -0.875rem + 8.333333vw, ${fontSizeFrom})`,
      color: colorFrom,
    });
  }

  function createAnimatedLetter(letter, idx) {
    return (<span
      style={{fontSize: `clamp(2rem, -0.875rem + 8.333333vw, ${fontSizeFrom})`, color: colorFrom}}
      id={`${prefix}${idx}`}
      key={idx}
      onMouseEnter={e => animateIn(idx)} onMouseLeave={e => animateOut(idx)}
    >
      {letter}
    </span>);
  }
  return (
    <span>
      {animatedLetters}
    </span>
  )
}
