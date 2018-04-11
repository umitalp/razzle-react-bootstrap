import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import SignupForm from '../../components/forms/SignupForm'

import './Signup.scss';

class Signup extends React.Component {
  state = {

  }
  
  onSubmit = values => {
    this.setState({
      ...values
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <h2>Sign Up</h2>
        </Row>
        <Row>
          <Col md="6">
            <SignupForm onSubmit={this.onSubmit} />
          </Col>
          <Col md="6">
            <h4>
              Redux-Form Example
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est modi suscipit consequatur sapiente dolorum recusandae nam vero perferendis. Deleniti repudiandae in at asperiores consequuntur minus est. Molestias, amet qui.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p>
              {JSON.stringify(this.state, undefined, 2)}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup
