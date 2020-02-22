import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import EventApplicationForm from "./components/event-application-form.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function App({ state }) {
  return (
    <Container>
      <Row className="h-100 pt-5 align-items-center flex-column">
        {state.show ? (
          <Alert
            variant={state.variant}
            onClose={state.hideAlert}
            dismissible
          >
            {state.message}
          </Alert>
        ) : null}
        <EventApplicationForm showAlert={state.showAlert} />
      </Row>
    </Container>
  );
}

export default App;
