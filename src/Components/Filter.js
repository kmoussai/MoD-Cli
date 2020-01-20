import React, { Component } from 'react'
import { Card, Button,  Form, Accordion } from "react-bootstrap";
import {  FaSlidersH } from "react-icons/fa";

export default class Filter extends Component {
    render() {
        return (
            <Accordion >
                <Card className="m-1">
                <Accordion.Toggle 
                    as={Card.Header}
                    eventKey="0"
                    className="d-flex justify-content-end">
                    
                    <h5 style={{cursor:"pointer"}}>
                        <FaSlidersH className="m-1"></FaSlidersH>
                        Filter
                    </h5>
                    
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="No Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="No accepted Answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Sort by number of answer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Filter by Tag" />
                    </Form.Group>
                    <Form.Group style={{marginLeft:20}}controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Tags" />
                    </Form.Group>
                    <div class="d-flex justify-content-end">
                        <Button variant="success">Apply </Button>
                    </div>
                    
                    </Form>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
