import React from "react";
import { Navbar,Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


class Header extends React.Component {
  render() {
    return (

      <Container className="outerContainer" >
        <Navbar className="innerContainer" expand="lg" variant="light" bg="light">
          <Container className="innerContainer">
            <Navbar.Brand href="#">Horned Beast</Navbar.Brand>
            <Navbar.Text>
              Created by Abdinasir Yussuf
            </Navbar.Text>
          </Container>
        </Navbar>
      </Container>

    )
  }
}


export default Header;