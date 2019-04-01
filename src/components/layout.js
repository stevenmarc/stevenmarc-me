import React from 'react'
import Header from './header'
import { createGlobalStyle } from 'styled-components'
import colors from '../../colors'
import Archive from '../pages/archive'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }
html {
  background-color: rgb(29, 29, 29);
}
body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  overflow-x: hidden;
  margin: 0;
  color: ${colors.primary};
  font-family: Quicksand, sans-serif;
  font-weight: 300;
}
a {
  color: #ffffff;
  text-decoration: none;
  padding-left: 1em;
}

a:hover {
  color: #ea7623;
}

.logotext:hover {
  fill: #ea7623;
}
`

export default ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    {children}
    <Archive />
  </div>
)
