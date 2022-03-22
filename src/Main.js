import React from "react";
import HornedBeast from './HornedBeast.js';
import SelectedBeast from "./SelectedBeast.js";
import './Main.css'



class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    let allBeast = this.props.data;
    if (this.props.horns != null) {
      allBeast = this.props.data.filter(filter => filter.horns === parseInt(this.props.horns));
      console.log(allBeast);
    };
    // console.log(allBeast);
    let beast = allBeast.map((hornedBeast, index) =>
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
        <SelectedBeast
          title={this.props.title}
          imgUrl={this.props.imgUrl}
          description={this.props.description}
          hideModal={this.props.hideModal}
          showModal={this.props.showModal}
          />
         
          {beast}
      
      </main >
      
    )
  }
}

export default Main;