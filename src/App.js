import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import data from './data.json'
import SelectedBeast from './SelectedBeast.js'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal:false
    }
  }
  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
    render(){
      return (
        <>
        <Header/>
        <SelectedBeast 
        
        />
        <Main data={data}>
          
        </Main>
        <Footer/>
        </>
      );
    }
    
}
  export default App;

