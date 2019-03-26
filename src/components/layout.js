import React from "react"
import { Link } from "gatsby"
import StevenmarcSvg from "./stevenmarcsvg"

const ListLink = props => (
  <li style={{ display: `inline-block`, scrollMarginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      margin: `0`,
      padding: `0`,
      backgroundColor: "#FFFFFF",
    }}
  >
    <header style={{ marginBottom: `1.5rem`, position: "fixed" }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <StevenmarcSvg style={{ display: `inline`, width: 120, padding: 10 }} />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/portfolio">Projects</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
