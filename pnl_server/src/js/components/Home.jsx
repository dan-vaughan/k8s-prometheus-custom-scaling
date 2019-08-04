import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { Nav, Container, Col, Row, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
]

class PNLChart extends React.Component {
    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine data={data}></VictoryLine>
            </VictoryChart>
        )
    }
}

class CPUWasteButton extends React.Component {
    render() {
        return (
            <Button variant="danger" >Hit me!</Button>
        )
    }
}

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <MyNav />
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}><PNLChart /></Col>
                        <Col xs={6} md={4} id={"waste-button"}>
                            <CPUWasteButton />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}