import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main.js'
import { Modal, Button } from "react-bootstrap"



class SelectedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal:false
    }
  }
  
  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>wow, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


export default SelectedBeast;