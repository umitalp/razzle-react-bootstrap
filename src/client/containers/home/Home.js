import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row><h2>Home</h2></Row>
        <Row>
          <Col>
            <Row><h1>Heading 1</h1></Row>
            <Row><h2>Heading 2</h2></Row>
            <Row><h3>Heading 3</h3></Row>
            <Row><h4>Heading 4</h4></Row>
            <Row><h5>Heading 5</h5></Row>
            <Row><h6>Heading 6</h6></Row>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <Row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate exercitationem consequuntur, debitis quisquam dolorum, quae esse blanditiis delectus fuga voluptatem beatae, similique doloremque nulla animi nisi id maiores. Eius.
              </p>
            </Row>
          </Col>
          <Col>
            <Row md='6'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate exercitationem consequuntur, debitis quisquam dolorum, quae esse blanditiis delectus fuga voluptatem beatae, similique doloremque nulla animi nisi id maiores. Eius.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
