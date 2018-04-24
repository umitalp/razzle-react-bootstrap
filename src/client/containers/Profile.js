import React from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { connect } from "react-redux";
import { login, getMyTasks, addNewTask, removeTask } from "../redux/actions";
import NewTaskForm from "../components/forms/NewTaskForm";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getMyTasks();
  }

  onSubmit = values => {
    const { task } = values;
    this.props.addNewTask(task);
  };

  deleteTask = id => {
    this.props.removeTask(id);
  };

  render() {
    const { user, tasks, tasksLoading, error } = this.props;
    if (!user) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <h3 className="mt-3">Dashboard</h3>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <CardTitle>User Details</CardTitle>
                <CardSubtitle>Name</CardSubtitle>
                <CardText>{user.name}</CardText>
                <CardSubtitle>Surname</CardSubtitle>
                <CardText>{user.surname}</CardText>
                <CardSubtitle>Email</CardSubtitle>
                <CardText>{user.email}</CardText>
                <CardSubtitle>City</CardSubtitle>
                <CardText>{user.city}</CardText>
                <CardSubtitle>Country</CardSubtitle>
                <CardText>{user.country}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardBody>
                <CardTitle>Tasks</CardTitle>
                {tasksLoading ? (
                  <p>Your tasks are being loaded...</p>
                ) : (
                  <div>
                    <ListGroup>
                      {tasks.map((task, index) => (
                        <ListGroupItem key={index}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              {task.content}
                            </div>
                            <div>
                              <Button
                                color="warning"
                                onClick={() => this.deleteTask(task._id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                    <div className="mt-5">
                      <NewTaskForm
                        _loading={tasksLoading}
                        _error={error}
                        onSubmit={this.onSubmit}
                      />
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducers.currentUser,
  tasks: state.taskReducers.tasks,
  tasksLoading: state.taskReducers.tasksLoading,
  error: state.taskReducers.error
});

const mapDispatchToProps = {
  login,
  getMyTasks,
  addNewTask,
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
