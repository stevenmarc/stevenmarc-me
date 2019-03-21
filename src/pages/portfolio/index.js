import React from "react"
import GridLayout from "react-grid-layout"

class portfolioIndex extends React.Component {
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ]
    return (
      <React.Fragment>
        <h2>Portfolio</h2>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      </React.Fragment>
    )
  }
}

export default portfolioIndex
