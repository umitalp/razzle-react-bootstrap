import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { login, logout } from "../../redux/actions";

import LoginForm from "../../components/forms/LoginForm";

class Home extends React.Component {
  onSubmit = values => {
    const { email, password } = values;
    this.props.login(email, password);
  };

  render() {
    const { error, user, loading } = this.props;
    if(user) {
      return <Redirect to="/profile" />
    }
    return (
      <Container>
        <Row>
          <Col md="6">
            <h3>Login</h3>
            <LoginForm
              _loading={loading}
              _error={error}
              onSubmit={this.onSubmit}
            />
            <div className="d-flex justify-content-center ">
              <NavLink exact to="/signup">
                Signup
              </NavLink>
            </div>
          </Col>
          <Col md="6">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptate exercitationem consequuntur, debitis quisquam dolorum,
              quae esse blanditiis delectus fuga voluptatem beatae, similique
              doloremque nulla animi nisi id maiores. Eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptate exercitationem consequuntur, debitis quisquam dolorum,
              quae esse blanditiis delectus fuga voluptatem beatae, similique
              doloremque nulla animi nisi id maiores. Eius.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.userReducers.loginLoading,
  user: state.userReducers.currentUser,
  error: state.userReducers.error
});

const mapDispatchToProps = {
  login,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
