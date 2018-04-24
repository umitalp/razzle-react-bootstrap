import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Form
} from "reactstrap";

const validate = values => {
  const errors = {};
  if (!values.task) {
    errors.task = "Required";
  }
  return errors;
};

const renderField = field => {
  const {
    input,
    label,
    type,
    placeholder,
    meta: { touched, error }
  } = field;
  return (
    <FormGroup>
      <Label for={label}>{label}</Label>
      <Input
        invalid={touched && error && error.length > 0}
        type={type}
        placeholder={placeholder}
        id={label}
        {...input}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};

const NewTaskForm = props => {
  const { handleSubmit, _loading } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="task"
        type="text"
        label="Add New Task"
        placeholder="New Task..."
        component={renderField}
      />
      {_loading ? (
        <Label>Adding New Task...</Label>
      ) : (
        <Button block type="submit" className="mt-3 mb-3" color="primary">
          Add Task
        </Button>
      )}
    </Form>
  );
};

export default reduxForm({
  form: "newTaskForm",
  validate
})(NewTaskForm);
