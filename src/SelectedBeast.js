import { Modal, ModalTitle, Image, Button } from 'react-bootstrap'
import React, { Component } from 'react'




export default class SelectedBeast extends Component {
  
  
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <ModalTitle>{this.props.title}</ModalTitle>
        </Modal.Header>
        <Image src={this.props.imgUrl}></Image>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
