import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { ScrollingProvider } from 'react-scroll-section'
import config from 'react-reveal/globals'
import colors from '../../colors'
import Header from './Header'

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

config({ ssrFadeout: true })

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Header />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
