import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Alert,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import './Developer.scss';

class Developer extends React.Component {
  state = {
    dropdown: false,
    modal: false
  };

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown});
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal});
  }

  render() {
    return (
      <Container>
        <Row>
          <h2>Developer</h2>
        </Row>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestiae recusandae quis provident est id eaque ab labore velit quas nam sapiente dignissimos omnis consequuntur corporis? Rerum impedit mollitia nemo!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
            <Alert color="secondary">
              This is a secondary alert — check it out!
            </Alert>
            <Alert color="success">
              This is a success alert — check it out!
            </Alert>
            <Alert color="danger">
              This is a danger alert — check it out!
            </Alert>
            <Alert color="warning">
              This is a warning alert — check it out!
            </Alert>
            <Alert color="info">
              This is a info alert — check it out!
            </Alert>
            <Alert color="light">
              This is a light alert — check it out!
            </Alert>
            <Alert color="dark">
              This is a dark alert — check it out!
            </Alert>
          </Col>
          <Col md="6">
            <Row>
              <Button color="primary">primary</Button>{' '}
              <Button color="secondary">secondary</Button>{' '}
              <Button color="success">success</Button>{' '}
              <Button color="info">info</Button>{' '}
              <Button color="warning">warning</Button>{' '}
              <Button color="danger">danger</Button>{' '}
              <Button color="link">link</Button>
            </Row>
            <Row>                
              <Button outline color="primary">primary</Button>{' '}
              <Button outline color="secondary">secondary</Button>{' '}
              <Button outline color="success">success</Button>{' '}
              <Button outline color="info">info</Button>{' '}
              <Button outline color="warning">warning</Button>{' '}
              <Button outline color="danger">danger</Button>
            </Row>
            <Row>
              <ButtonDropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                <DropdownToggle caret>
                  Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Row>
            <Row>
              <Button color="danger" onClick={this.toggleModal}>Open Modal</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate exercitationem consequuntur, debitis quisquam dolorum, quae esse blanditiis delectus fuga voluptatem beatae, similique doloremque nulla animi nisi id maiores. Eius.
            </p>
            <Button color="secondary">Secondary</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option one is this and that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled />{' '}
                    Option three is disabled
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out
                </Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Developer;
