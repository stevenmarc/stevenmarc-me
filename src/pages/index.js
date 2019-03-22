import React from "react"
import styled, { keyframes } from "styled-components"
import anime from "animejs"

const fade = keyframes`
from {opacity:0;}
to {opacity:1}
`
const name = "Steven-Marc Couchouron"

const WrapLetters = str => {
  return str
    .toString()
    .replace(/([-^\x00-\x80\-]|\w)/g, "<span class='letter'>$&</span>")
}

const wrappedLetters = [WrapLetters(name)]

const NameTitle = styled.div`
  font-weight: 900;
  font-size: 3.5em;
  opacity: 0;
  animation: ${fade} 3s ease-in-out 1s;
  animation-fill-mode: forwards;
`

class App extends React.Component {
  componentDidMount() {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i + 1)
        },
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })
  }

  render() {
    return (
      <h1
        className="ml3"
        dangerouslySetInnerHTML={{ __html: wrappedLetters }}
      />
    )
  }
}

export default App
