import React from "react"

const SvgComponent = props => (
  <svg viewBox="0 0 201 49" {...props}>
    <text
      transform="translate(16.016 33.031)"
      fontSize={32}
      fontFamily="Quicksand-Regular"
    >
      {"stevenmarc"}
    </text>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M108 14V1H1v47h107V36"
    />
  </svg>
)

export default SvgComponent
