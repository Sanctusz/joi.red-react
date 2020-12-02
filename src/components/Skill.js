import React from 'react'

export default function Skill({svg, bgColorFrom, bgColorTo, link}) {
  return (
    <div className="relative min-w-max max-w-0">
      <a href={link} target="_blank" rel="noreferrer">
      <div className={`absolute inset-0 bg-gradient-to-r ${bgColorFrom} ${bgColorTo} shadow-lg transform rounded-3xl sm:visible invisible`}></div>
      <div className="px-3 py-3 bg-semidarkbg shadow-lg rounded-3xl transform -rotate-12 hover:rotate-0 hover:bg-white">
        <img className="lg:h-16 lg:w-16 sm:h-9 sm:w-9 w-5 h-5 content-center" src={svg} alt="svg"/>
      </div>
      </a>
    </div>
  )
}
