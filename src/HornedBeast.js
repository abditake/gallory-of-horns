import React from "react";



class Header extends React.Component{
  render(){
    return(
      <div>
        <h3> {this.props.title} </h3>
        <img src={this.props.imgUrl} alt="horned beat images" ></img>
        <p>{this.props.description}</p>
      </div>
      )
  }
}

export default Header;