import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../components/forms/LoginForm'

import './Login.css';

class Login extends React.Component {
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
          <h2>Login</h2>
        </Row>
        <Row>
          <Col md="6">
            <LoginForm onSubmit={this.onSubmit} />
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

export default Login
