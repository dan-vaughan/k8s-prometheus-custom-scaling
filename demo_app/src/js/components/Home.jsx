import React from 'react';
import { Container, Col, Row, Navbar, Button, Image, Jumbotron } from 'react-bootstrap';
const axios = require('axios');

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
            this.setState({ "isLoading": true })
            axios.post("/click-button").then((response) => {
                console.log(response);
            }).then(() => {
                this.setState({ "isLoading": false })
            })
        }
    }


    render() {
        return (
            <Button id="scale-button" variant="danger" disabled={this.state.isLoading} onClick={this.handleClick} size="lg" block>Hit me!</Button>
        )
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container className="justify-content-center">
                    <Jumbotron>
                        <h1>Demonstration: Custom Scaling with Kubernetes & Prometheus</h1>
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