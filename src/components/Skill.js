import React, { useState } from 'react'

export default function Skill({svg, bgColorFrom, bgColorTo, link, refNr}) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="relative" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <a href={link} target="_blank" rel="noreferrer">
      <div className={`absolute inset-0 ${hovered ? `bg-gradient-to-r ${bgColorFrom} ${bgColorTo}` : "bg-red-700"} shadow-lg transform rounded-3xl sm:visible invisible`}></div>
      <div className="p-3 bg-semidarkbg shadow-lg rounded-3xl transform -rotate-12 hover:rotate-12 hover:bg-white">
        <img className="lg:h-16 lg:w-16 sm:h-10 sm:w-10 w-5 h-5 content-center" src={`/images/skills/${hovered ? "" : "white_"}`+svg} alt="svg"/>
      </div>
      </a>
    </div>
  )
}