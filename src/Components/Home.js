import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import Search from "./Search";

import QuestionCard from "./QuestionCard";
import Filter from "./Filter";
import Recent from "./Recent";

export default class Home extends Component {
    render() {
        return (
            <Row className="m-1">
                <Col xs={12} md={3} style={colStyle}>
                    <Search />
                </Col>
                <Col style={colStyle} xs={12} md={6}>
                    <Filter />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="primary"
                        >
                            Click to load
                    </Button>
                    </div>

                </Col>
                <Col xs={12} md={3} style={colStyle}>
                    <Button className="m-1" block>Ask ??</Button>
                    <Recent />
                </Col>
            </Row>
        )
    }
}

const colStyle = {

};
