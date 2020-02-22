import React from "react";
import Form from "react-bootstrap/Form";

const formFieldsConfig = {
  firstName: {
    label: "First Name",
    placeholder: "First Name",
    type: "text"
  },
  lastName: {
    label: "Last Name",
    placeholder: "Last Name",
    type: "text"
  },
  email: {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    pattern: "\\b[\\w.-]+@[\\w.-]+\\.\\w{2,4}\\b"
  },
  date: {
    label: "Event Date",
    placeholder: "",
    type: "date"
  }
};

export default function FormField({ name, value, handleChange }) {
  const config = formFieldsConfig[name];
  return (
    <Form.Group controlId={name}>
      <Form.Label>{config.label}</Form.Label>
      <Form.Control
        name={name}
        type={config.type}
        placeholder={config.placeholder}
        required
        pattern={config.pattern}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
