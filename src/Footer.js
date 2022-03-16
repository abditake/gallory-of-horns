import { Navbar, Container } from "react-bootstrap";
import React from "react";



class Footer extends React.Component {
  render() {
    return (

      <Container>
        <Navbar.Brand href="#home">
          &copy; Abdinasir Yussuf
        </Navbar.Brand>
      </Container>

    )
  }
}

export default Footer;