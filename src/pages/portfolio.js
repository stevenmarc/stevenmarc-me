import React from "react"
import GridLayout from "react-grid-layout"
import Layout from "../components/layout"
import Header from "../components/header"
import Image1 from "./../assets/images/image1.jpg"
import Image2 from "./../assets/images/image2.jpg"
import Image3 from "./../assets/images/image3.jpg"

class portfolioIndex extends React.Component {
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ]
    return (
      <Layout>
        <Header headerText="Recent projects" />
        <h2>Portfolio</h2>
        <GridLayout
          className="layout"
          layout={layout}
          cols={3}
          rowHeight={100}
          width={400}
        >
          <div key="a">
            <img src={Image1} width={500} height={300} mode="fit" />
          </div>
          <div key="b">
            {" "}
            <img src={Image2} width={500} height={300} mode="fit" />
          </div>
          <div key="c">
            {" "}
            <img src={Image3} width={500} height={300} mode="fit" />
          </div>
        </GridLayout>
      </Layout>
    )
  }
}
export default portfolioIndex
