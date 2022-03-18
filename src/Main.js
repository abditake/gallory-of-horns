import React from "react";
import HornedBeast from './HornedBeast.js';
import './Main.css'

class Main extends React.Component {





  render() {
    let beast = this.props.data.map((hornedBeast, index) =>
      <HornedBeast
        imgUrl={hornedBeast.imgUrl}
        title={hornedBeast.title}
        description={hornedBeast.description}
        keyword={hornedBeast.keyword}
        horns={hornedBeast.horns}
        key={index}
        openModal={this.props.openModal}
      />
    )
    return (
      <main>
        {beast}
      </main >
    )
  }
}

export default Main;
