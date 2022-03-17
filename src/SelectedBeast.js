import { Modal, ModalTitle, Image, Button } from 'react-bootstrap'
import React, { Component } from 'react'



export default class SelectedBeast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false
    })
  };

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <ModalTitle>{this.props.title}</ModalTitle>
        </Modal.Header>
        <Image src={this.props.imgUrl}></Image>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
