import React from 'react'

export default function Social({href, svg}) {
  return (
    <div>
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <img alt={svg + " icon"} src={"images/contact/" + svg + ".svg"} className="hover:scale-150 transform w-12 h-12" />
      </a>
    </div>
  )
}
