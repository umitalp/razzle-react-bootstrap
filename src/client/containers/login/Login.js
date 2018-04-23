import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { login, logout } from '../../redux/actions'

import LoginForm from '../../components/forms/LoginForm'
import './Login.scss';

class Login extends React.Component {
  
  onSubmit = values => {
    const { email, password } = values
    this.props.login(email, password)
  }

  render() {
    const { error, user, loading } = this.props
    return (
      <Container>
        <h2 className="mt-3">Log In</h2>
        <Row>
          <Col md="6">
            <LoginForm _loading={loading} _error={error} onSubmit={this.onSubmit} />
          </Col>
          <Col md="6">
            <h4>
              Redux-Form Example
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est modi suscipit consequatur sapiente dolorum recusandae nam vero perferendis. Deleniti repudiandae in at asperiores consequuntur minus est. Molestias, amet qui.
            </p>
            <h5>Current User</h5>
            <p>
              {JSON.stringify(user, undefined, 2)}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.userReducers.loginLoading,
  user: state.userReducers.currentUser,
  error: state.userReducers.error
})

const mapDispatchToProps = {
    login,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
