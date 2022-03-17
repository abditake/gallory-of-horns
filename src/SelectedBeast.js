import { Modal, ModalTitle, Image, Button } from 'react-bootstrap'
import React, { Component } from 'react'



export default class SelectedBeast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true
    }
  }



  render() {
    return (
      <Modal>
        <Modal.Header>
          <ModalTitle></ModalTitle>
        </Modal.Header>
        <Image></Image>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button></Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
