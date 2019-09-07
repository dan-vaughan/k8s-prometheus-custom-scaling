import React from 'react';
import { Container, Col, Row, Navbar, Button, Image, Jumbotron } from 'react-bootstrap';

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  

class SendButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoading": false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.isLoading) {
            console.log("set to loading");
            this.setState({"isLoading": true})
            simulateNetworkRequest().then(() => {
                console.log("finished simulating");
                this.setState({"isLoading": false})
            })
        }
    }


    render() {
        return (
            <Button id="scale-button" variant="danger" disabled={this.state.isLoading} onClick={this.handleClick} size="lg" block>Hit me!</Button>
        )
    }
}

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Demonstration: Custom Scaling with Flask, Kubernetes & Prometheus</Navbar.Brand>
            </Navbar>
        )
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container className="justify-content-center">
                    <Jumbotron>
                        <h1>Demonstration: Custom Scaling with Flask, Kubernetes & Prometheus</h1>
                        <p>
                            Hit the button to scale!
                        </p>
                        <p>
                            <Row>
                                <Col md={6} className="logo-col"><Image src="/public/img/kubernetes_logo.png"></Image></Col>
                                <Col md={6} className="logo-col"><Image src="/public/img/prometheus_logo.png"></Image></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <SendButton />
                                </Col>
                            </Row>
                        </p>
                    </Jumbotron>


                </Container>
            </div>
        )
    }
}