import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    Button,
    FormGroup,
    Label,
    Input,
    Form,
    Alert
} from 'reactstrap'

const validate = values => {
    const errors = {}
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

const renderField = field => {
    const {
        input,
        label,
        type,
        placeholder,
        meta: { touched, error }
    } = field
    return (
        <div>
            <FormGroup>
                <Label for={label}>{label}</Label>
                <Input type={type} placeholder={placeholder} id={label} {...input} />
            </FormGroup>
            {touched && error && <Alert color="warning">{error}</Alert>}
        </div>
    )
  }

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
        <Field
            name="email"
            type="email"
            label="Email"
            placeholder="Email..."
            component={renderField}
        />
        <Field password
            name="password"
            type="password"
            label="Password"
            placeholder="Password..."
            component={renderField}
        />
        <Button type="submit" className="mt-3 mb-3" outline color="dark">Login</Button>
    </Form>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

