import React from 'react'
import Header from './header'

export default ({ children }) => (
  <div
    style={{
      margin: `0`,
      padding: `0`,
    }}
  >
    <Header />
    {children}
  </div>
)
