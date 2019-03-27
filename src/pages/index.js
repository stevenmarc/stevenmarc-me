import React from 'react'
import anime from 'animejs'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const backgroundImage = require('../assets/images/steven_bg.jpg')
const bgImageStyle = {
  minHeight: '100vh',
  minWidth: 200,
  width: '100%',
  height: 'auto',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: '60% 0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  display: 'grid',
  gridTemplateColumns: 'minmax(200px, 600px) 1fr',
  gridTemplateRows: '300px auto',
}

const name = 'STEVEN-MARC COUCHOURON'

const WrapLetters = str => {
  return str
    .toString()
    .replace(/([-^\x00-\x80\-]|\w)/g, "<span class='letter'>$&</span>")
}

const wrappedLetters = [WrapLetters(name)]

class App extends React.Component {
  componentDidMount() {
    anime.timeline({ loop: false }).add({
      targets: '.ml3 .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: function(el, i) {
        return 150 * (i + 1)
      },
    })
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>stevenmarc.me</title>
          <link rel="canonical" href="http://stevenmarc.me" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100:Quicksand:300"
            rel="stylesheet"
          />
        </Helmet>

        <div style={bgImageStyle}>
          <div>
            <h1
              className="ml3"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 300,
                fontSize: '2em',
                padding: '180px 20px 0px 40px',
                color: 'white',
              }}
              dangerouslySetInnerHTML={{ __html: wrappedLetters }}
            />
          </div>
          <div />

          <div>
            <h2
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 100,
                fontSize: '1.5em',
                padding: '0px 20px 20px 40px',
                color: 'white',
              }}
            >
              Freelance <span style={{ color: '#ea7623' }}> developer</span>,{' '}
              <span style={{ color: '#ea7623' }}> writer </span> and{' '}
              <span style={{ color: '#ea7623' }}> filmmaker</span>. <br />I love
              finding
              <span style={{ color: '#ea7623' }}> creative solutions </span>
              with clients to help them connect with their
              <span style={{ color: '#ea7623' }}> audience</span>, whether it be
              by code, text, or moving images. I also help with
              <span style={{ color: '#ea7623' }}> digital strategy </span>and
              marketing.
            </h2>
          </div>
          <div />
        </div>
      </Layout>
    )
  }
}

export default App
