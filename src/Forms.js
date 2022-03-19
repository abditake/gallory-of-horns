
import React from 'react'
import { Form} from 'react-bootstrap'

class Forms extends React.Component {
  
  handleFormSubmit = (event) => {
    let number = event.target.value;
    this.props.handleFormInput(number)
  }
  
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>filter number of horns</Form.Label>
          <Form.Select onChange={this.handleFormSubmit}>
            <option value='0'>choose a horn</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  }
}

export default Forms;