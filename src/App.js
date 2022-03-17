import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import { Modal, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Main from './Main.js'
import data from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imgUrl: {},
      title: '',
      description: ''
    }
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  };

  openModal = (description, imgUrl, title) => {
    this.setState({
      showModal: true,
      imgUrl: imgUrl,
      title: title,
      description: description
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModal={this.openModal} />

        <Footer />
        {/* <Modal className='modalWindow' show={this.state.showModal} onHide={this.hideModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Image className='modalImg' src={this.state.imgUrl}></Image>
          <Modal.Body>{this.state.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
  }

}
export default App;

