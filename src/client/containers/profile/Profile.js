import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../redux/actions";

class Profile extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Row>
          <Col md="6">
            <h5>Name</h5>
            <p>{user.name}</p>
            <h5>Surname</h5>
            <p>{user.surname}</p>
            <h5>Email</h5>
            <p>{user.email}</p>
            <h5>Address</h5>
            <p>{user.address}</p>
            <h5>City</h5>
            <p>{user.city}</p>
            <h5>Country</h5>
            <p>{user.country}</p>
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
  user: state.userReducers.currentUser
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
