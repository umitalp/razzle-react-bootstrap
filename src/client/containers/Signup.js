import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { signup } from "../redux/actions";

import SignupForm from "../components/forms/SignupForm";

class Signup extends React.Component {
  state = {};

  onSubmit = values => {
    this.props.signup(values);
  };

  render() {
    const { error, user, loading } = this.props;
    if (user) {
      return <Redirect to="/profile" />;
    }
    return (
      <Container>
        <h2 className="mt-3">Sign Up</h2>
        <Row>
          <Col md="6">
            <SignupForm
              _loading={loading}
              _error={error}
              onSubmit={this.onSubmit}
            />
          </Col>
          <Col md="6">
            <h4>Redux-Form Example</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est
              modi suscipit consequatur sapiente dolorum recusandae nam vero
              perferendis. Deleniti repudiandae in at asperiores consequuntur
              minus est. Molestias, amet qui.
            </p>
            <h5>Local State</h5>
            <p>{JSON.stringify(user, undefined, 2)}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.userReducers.signupLoading,
  user: state.userReducers.currentUser,
  error: state.userReducers.error
});

const mapDispatchToProps = {
  signup
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

// export default Signup;
