import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { login, getMyTasks, addNewTask } from "../../redux/actions";
import NewTaskForm from "../../components/forms/NewTaskForm";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getMyTasks();
  }

  onSubmit = values => {
    const { task } = values;
    this.props.addNewTask(task);
  };

  render() {
    const { user, tasks, tasksLoading, error } = this.props;
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
            <h3>Your Tasks</h3>
            {tasksLoading ? (
              <p>Your tasks are being loaded...</p>
            ) : (
              <div>
                <ListGroup>
                  {tasks.map((task, index) => (
                    <ListGroupItem key={index}>{task.content}</ListGroupItem>
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
  addNewTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
