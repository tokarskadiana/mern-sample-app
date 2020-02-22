import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import EventForm from "./components/event-form.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
    return (
        <Container id="app-container">
            <Row className="h-100 justify-content-center align-items-center">
                <EventForm></EventForm>
            </Row>
        </Container>
    );
}

export default App;
