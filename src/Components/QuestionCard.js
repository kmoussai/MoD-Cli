import React, { Component } from 'react'
import { Card, Row, Col, Image, Button, Badge } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default class QuestionCard extends Component {
    render() {
        const imgSrc = "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png";

        return (
            <div>
                <Card className="m-1">
                    <Card.Header>
                        <Row>
                            <Col style={{ cursor: "pointer" }} xs={8}><FaCheck></FaCheck> Question Title   </Col>
                            <Col className="d-flex justify-content-end"

                            >
                                12 H ago
                        </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title> User Name <Badge variant="success">Status</Badge> </Card.Title>
                        <Row>
                            <div >
                                <Image
                                    style={{
                                        width: 64,
                                        height: 64
                                    }}
                                    src={imgSrc}
                                    roundedCircle
                                />
                                <hr />
                                <p>12 Answer</p>

                            </div>
                            <Col >
                                <Card.Text>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card
                        </Card.Text>
                            </Col>
                        </Row>
                        <Card.Footer className="m-1 text-muted bg-white">
                            Tags:
                    <Button className="m-1" size="sm" variant="outline-secondary">Math</Button>
                            <Button className="m-1" size="sm" variant="outline-secondary">Math</Button>
                            <Button className="m-1" size="sm" variant="outline-secondary">Math</Button>
                            <Button className="m-1" size="sm" variant="outline-secondary">Math</Button>
                            <Button className="m-1" size="sm" variant="outline-secondary">Math</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
