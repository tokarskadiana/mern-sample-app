import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EventForm extends Component {
  _initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    date: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      formData: this._initialFormData,
      validated: false
    };
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      this.setState({
        ...this.state,
        validated: true
      });
    } else {
      const formData = { ...this.state.formData };
      console.log(formData);
      axios
        .post("http://localhost:4000/event-application", formData)
        .then(res => console.log(res.data));
      this.setState({
        validated: false,
        formData: this._initialFormData
      });
    }
  }

  render() {
    return (
      <div className="app-form-container">
        <h2 className="mb-4 text-center">Apply for the event</h2>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.onSubmit.bind(this)}
        >
          <Form.Group controlId="FirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First name"
              required
              value={this.state.formData.firstName}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>

          <Form.Group controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last name"
              required
              value={this.state.formData.lastName}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="example@email.com"
              pattern="\b[\w.-]+@[\w.-]+\.\w{2,4}\b"
              required
              value={this.state.formData.email}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>

          <Form.Group controlId="EventDate">
            <Form.Label>Event date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              required
              value={this.state.formData.date}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>

          <Button
            variant="primary"
            block="block"
            type="submit"
            className="mt-4"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
