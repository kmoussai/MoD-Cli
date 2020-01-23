import React, { Component } from 'react'

import { Card, Accordion } from "react-bootstrap";
import { FaClock } from "react-icons/fa";

export default class Recent extends Component {
    render() {
        return (
            <div>

                <Accordion defaultActiveKey="0">
                    <Card className="m-1">
                        <Accordion.Toggle as={Card.Header} eventKey="0">

                            <h5>
                                <FaClock className="m-1"></FaClock>
                                Recent unanswered
                    </h5>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                    Some quick example text to build on the card
                        </p>
                                <hr />
                                <p>
                                    Some quick example text to build on the card
                        </p>
                                <hr />
                                <p>
                                    Some quick example text to build on the card
                        </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
