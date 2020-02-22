import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormField from "./form-field.component";

export default class EventApplicationForm extends Component {
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
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      this.setState({
        ...this.state,
        validated: true
      });
    } else {
      axios
        .post("http://localhost:4000/event-application", this.state.formData)
        .then(() =>
          this.props.showAlert("success", "Your application was submitted!")
        )
        .catch(e => {
          console.log(e.response);
          this.props.showAlert(
            "danger",
            `Failure! ${e}. ${
              e.response.data.message
                ? `Server responded with message: ${e.response.data.message} `
                : ""
            }`
          );
        })
        .finally(() =>
          this.setState({
            validated: false,
            formData: this._initialFormData
          })
        );
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
          <FormField
            name="firstName"
            value={this.state.formData.firstName}
            handleChange={this.handleChange.bind(this)}
          />
          <FormField
            name="lastName"
            value={this.state.formData.lastName}
            handleChange={this.handleChange.bind(this)}
          />
          <FormField
            name="email"
            value={this.state.formData.email}
            handleChange={this.handleChange.bind(this)}
          />
          <FormField
            name="date"
            value={this.state.formData.date}
            handleChange={this.handleChange.bind(this)}
          />

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
