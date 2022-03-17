
import React from "react";
import {Button,Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css'


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
      <Card className="strawberry">
        <Card.Text>
        {this.state.favorites? `🤎${this.state.favorites}`: ''} 
          </Card.Text>
        <Card.Img variant="top" src={this.props.imgUrl} />
        <Card.Body>
          <Card.Title>{this.props.keyword}</Card.Title>
          
          <Card.Text>
            {this.props.description}
          </Card.Text>
          
        </Card.Body>
        <Card.Text className="text">
           Number of horns: {this.props.horns}
          </Card.Text>
        <Button onClick={this.handlefavorite}>Likes</Button>
      </Card>
      
    
      )
  }
};



export default Header;