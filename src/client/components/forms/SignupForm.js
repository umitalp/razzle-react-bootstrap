import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Form,
  Row,
  Col,
  Alert
} from "reactstrap";

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Required";
  } else if (values.password2.length < 6) {
    errors.password2 = "Must be 6 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.email2) {
    errors.email2 = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email2)) {
    errors.email2 = "Invalid email address";
  }

  if (values.email !== values.email2) errors.email2 = "Emails must match";
  if (values.password !== values.password2)
    errors.password2 = "Passwords must match";

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

const SignupForm = props => {
  const { handleSubmit, _error, _loading } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        label="Name *"
        placeholder="Name..."
        component={renderField}
      />
      <Field
        name="surname"
        type="text"
        label="Surname"
        placeholder="Surname..."
        component={renderField}
      />
      <Field
        name="email"
        type="email"
        label="Email *"
        placeholder="Email..."
        component={renderField}
      />
      <Field
        name="email2"
        type="email"
        label="Re-enter Email"
        placeholder="Re-enter Email..."
        component={renderField}
      />
      <Field
        name="address"
        type="text"
        label="Address"
        placeholder="Address..."
        component={renderField}
      />
      <Row>
        <Col>
          <Field
            name="city"
            type="text"
            label="City"
            placeholder="City..."
            component={renderField}
          />
        </Col>
        <Col>
          <Field
            name="country"
            type="text"
            label="Country"
            placeholder="Country..."
            component={renderField}
          />
        </Col>
      </Row>
      <Field
        password
        name="password"
        type="password"
        label="Password *"
        placeholder="Password..."
        component={renderField}
      />
      <Field
        password
        name="password2"
        type="password"
        label="Re-enter Password"
        placeholder="Re-enter Password..."
        component={renderField}
      />
      {_error && <Alert color="danger">{_error}</Alert>}
      {_loading ? (
        <Label>Loading</Label>
      ) : (
        <Button type="submit" className="mt-3 mb-3" outline color="dark">
          Sign Up
        </Button>
      )}
    </Form>
  );
};

export default reduxForm({
  form: "signupForm",
  validate
})(SignupForm);
