import React from "react"
import anime from "animejs"

const backgroundImage = require("../assets/images/steven_bg.jpg")
const bgImageStyle = {
  minHeight: "100%",
  minWidth: 200,

  /* Set up proportionate scaling */
  width: "100%",
  height: "auto",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
}

const name = "STEVEN-MARC COUCHOURON"

const WrapLetters = str => {
  return str
    .toString()
    .replace(/([-^\x00-\x80\-]|\w)/g, "<span class='letter'>$&</span>")
}

const wrappedLetters = [WrapLetters(name)]

class App extends React.Component {
  componentDidMount() {
    anime.timeline({ loop: false }).add({
      targets: ".ml3 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: function(el, i) {
        return 150 * (i + 1)
      },
    })
  }

  render() {
    return (
      <div className="cComponent" style={bgImageStyle}>
        <h1
          className="ml3"
          style={{
            fontFamily: "Relevant,Helvetica,Arial,sans-serif",
            fontWeight: 100,
            fontSize: "2em",
            padding: "40px 20px 0px 40px",
            color: "white",
          }}
          dangerouslySetInnerHTML={{ __html: wrappedLetters }}
        />
        <h2
          style={{
            fontFamily: "Relevant,Helvetica,Arial,sans-serif",
            fontWeight: "lighter",
            fontSize: "1.5em",
            padding: "0px 20px 20px 40px",
            color: "white",
          }}
        >
          Freelance developer, writer and filmmaker. <br />I love finding
          creative solutions with clients <br />
          to help them connect with their audience, <br />
          wether it be by code, text, or moving images.
        </h2>
      </div>
    )
  }
}

export default App
