
import React from "react";
import {Button,Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css'


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorites:0
    }

    
  }

  handleFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })

  }
  
  
  
  // handleClickEvents = () => {
  //   this.handleFavorite();
  //   this.handleOpenModal();
    
  // }
  
  handleOpenModal = () =>{
    this.props.openModal(this.props.description,this.props.imgUrl,this.props.title)
    
  }
  
  render(){
    return(
      <Card className="strawberry">
        <Card.Text>
        {this.state.favorites? `🤎${this.state.favorites}`:''}
          </Card.Text>
        <Card.Img variant="top" style={{cursor:'pointer'}} src={this.props.imgUrl} onClick={this.handleOpenModal}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          
          <Card.Text>
            {this.props.description}
          </Card.Text>
          
        </Card.Body>
        <Card.Text className="text">
           Number of horns: {this.props.horns}
          </Card.Text>
        <Button onClick={this.handleFavorite}>Likes</Button>
      </Card>
      
    
      )
  }
};



export default HornedBeast;