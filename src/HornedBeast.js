import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css'
import {Button, Card} from 'react-bootstrap';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorites:0
    }

    
  }
  
  handlefavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })

  }
  
  render(){
    return(
      

      
      <div className="strawberry">
        <h3> {this.props.title} </h3>
        <img src={this.props.imgUrl} alt="horned beast images" ></img>
        <p>{this.state.favorites}</p>
        <p onClick={this.handlefavorite}> favorite emoji </p>
        <p>{this.props.description}</p>
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>
      </div>
    
      )
  }
};



export default Header;