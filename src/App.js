import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imgUrl: '',
      title: '',
      description: '',
      horns: null
    }
  }
  openModal = (description,image,title) => {
    this.setState({
      showModal: true,
      description: description,
      imgUrl: image,
      title: title
    });
  };

  
  hideModal = () => {
    this.setState({
      showModal: false
    })
  };

  handleFormInput = (numHorns) => {
    this.setState({
      horns: numHorns
      
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModal={this.openModal}
          horns = {this.state.horns}
          handleFormInput = {this.handleFormInput}
          title={this.state.title}
          imgUrl={this.state.imgUrl}
          description={this.state.description}
          hideModal={this.hideModal}
          showModal={this.state.showModal}
        />
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

