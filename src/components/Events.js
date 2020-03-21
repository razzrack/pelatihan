import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';
import MateriCard from './cards/EventCard';
import ProfileCard from './cards/ProfileCard';

class Events extends React.Component {
    constructor(){
        super();
        this.state = {
            events: []
        }   
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/events'
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ events: data })
            console.log(this.state.events)
        })
    }

    render() {
        let materiCard = this.state.events.map(event => {
            return (
                <Col>
                    <MateriCard event={event} />
                </Col>
            )
        })
        // let profileCard = this.state.pelatih.map(pela => {
        //     return (
        //         <Col>
        //             <ProfileCard pela={pela} />
        //         </Col>
        //     )
        // })
        return (
            <div>
                <HeaderAuth/>
                <Jumbotron fluid>
                    <Container fluid>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Row className="ml-5">
                                <Col>
                                    <h3>Acara Pelatihan</h3>
                                </Col>
                            </Row>
                            <Row form className="ml-4 mt-2">
                                <Col md={4}>
                                    <FormGroup>
                                        {/* <Input type="search"
                                            name="searchTrainer"
                                            id="searchTrainer"
                                            placeholder="Cari Trainer"
                                            className="ml-5 mb-2 mr-sm-2 mb-sm-0"/> */}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="ml-5 mt-2">
                                {materiCard}
                            </Row>
                        </Col>
                        <Col sm={2}>
                            {/* {profileCard} */}
                        </Col>
                    </Row>
                    </Container>
                </Jumbotron>
                <Footer/>
            </div>
        )
    }
};

export default Events;