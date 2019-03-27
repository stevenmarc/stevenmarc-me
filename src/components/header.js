import React from 'react'
import { Link } from 'gatsby'
import StevenmarcSvg from './stevenmarcsvg'

const ListLink = props => (
  <li style={{ display: `inline-block`, scrollMarginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <div style={{ marginBottom: `1.5rem`, position: 'fixed', width: '90%' }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <StevenmarcSvg
        style={{
          display: `inline`,
          width: 120,
          padding: 10,
        }}
      />
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/portfolio">Projects</ListLink>
      <ListLink to="/contact">Contact</ListLink>
    </ul>
  </div>
)

export default Header
