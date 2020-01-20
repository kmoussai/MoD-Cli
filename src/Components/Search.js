import React, { Component } from 'react'
import {
        InputGroup,
        ListGroup,
        Button,
        FormControl,

    } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa"



class componentName extends Component {
    render () {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="search"
                        aria-label="search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"> <FaSearch /></Button>
                    </InputGroup.Append>
                </InputGroup>
                
                <ListGroup>
                    <ListGroup.Item style={{cursor:"pointer"}}>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item style={{cursor:"pointer"}} >Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item style={{cursor:"pointer"}}> <strong>Morbi</strong> leo risus</ListGroup.Item>
                    <ListGroup.Item style={{cursor:"pointer"}}>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item style={{cursor:"pointer"}}>Vestibulum <strong>Morbi</strong>at eros</ListGroup.Item>
                </ListGroup>
                
            </div>
        )
    }
}

export default componentName