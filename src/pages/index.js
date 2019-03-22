import React from "react"
import anime from "animejs"
import { Helmet } from "react-helmet"

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
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>stevenmarc.me</title>
          <link rel="canonical" href="http://stevenmarc.me" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway|Roboto:100"
            rel="stylesheet"
          />
        </Helmet>
        <div className="cComponent" style={bgImageStyle}>
          <h1
            className="ml3"
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 100,
              fontSize: "2em",
              padding: "180px 20px 0px 40px",
              color: "white",
            }}
            dangerouslySetInnerHTML={{ __html: wrappedLetters }}
          />
          <h2
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 100,
              fontSize: "1.5em",
              padding: "0px 20px 20px 40px",
              color: "white",
            }}
          >
            Freelance developer, writer and filmmaker. <br />I love finding
            creative solutions with clients <br />
            to help them connect with their audience, <br />
            whether it be by code, text, or moving images.
          </h2>
        </div>
      </div>
    )
  }
}

export default App
