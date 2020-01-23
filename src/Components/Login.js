import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default class Login extends Component {
    // const islogged = useSelector(state => state.islogged);
    render() {
        return (

            <div className="container m-auto " style={{ height: 100 }}>
                <div className="d-flex justify-content-center ">
                    <Card className="wsm-100 wmd-100 wxl-40 w-50 mt-5 mystyle shadow" >
                        <Card.Header className="text-center">
                            <h2 >
                                Login
                            </h2>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        isValid

                                        placeholder="Enter email" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <div className="d-flex justify-content-end">

                                    <Button variant="primary" >
                                        LogIn
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

            </div>


        )
    }
}



