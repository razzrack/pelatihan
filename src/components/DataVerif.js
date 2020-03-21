import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';   
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';
import SubmissionCard from './cards/SubmissionCard';

class DataVerif extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        submissions: [],
        error: ""
      };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/submissions')
        .then(res => res.data)
        .then((data) => {
            this.setState({ submissions: data})
            console.log(this.state.submissions)
        })
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    editData = (e) =>  {
        e.preventDefault();
        const id = this.props.match.params.id
        const url = `http://localhost:3001/api/submission/${id}`;
        const headers = {
            'Authorization': getJwt()  
        };
        axios.put(url, {
            submission_status: this.state.submission_status,
            approve_date: this.state.approve_date
        },
        // {headers:headers}
        ).then(res => console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));
    }
  
    render() {
        let submissionCard = this.state.submissions.map(submission => {
            return (
                <Col>
                    <SubmissionCard submission={submission} />
                </Col>
            )
        })

        const { error } = this.state;
        // if(this.state.loggedIn){
        //     return <Redirect to="/homeauth" />
        // }

        return (
            <div className="inner-container">
                <HeaderAuth/>
                <Jumbotron fluid>
                    <Container fluid>
                    <Row>
                            <Col md={9}>
                                <Row className="ml-5">
                                    <Col>
                                        <h3>Daftar Pengajuan Pelatihan</h3>
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
                                    {submissionCard}
                                </Row>
                            </Col>
                            <Col sm={3}>
                                {/* {profileCard} */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            {/* <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Input Form Pengajuan Pelatihan</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.editData.bind(this)}
                    >
                        <FormGroup>
                        <Label for="submission_status">Status</Label>
                            <Input type="select" name="submission_status" id="submission-update"
                             value={this.state.submission_status}
                             onChange={this.change.bind(this)}>
                                <option value="Terima">Terima</option>
                                <option value="Tolak">Tolak</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="approve_date">Tanggal Pengajuan</Label>
                            <Input
                                type="date"
                                name="approve_date"
                                id="submission-input"
                                placeholder="yyyy-mm-dd"
                                value={this.state.approve_date}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <Button
                            >Submit</Button>
                        </Form>
                        {error && <p>Terdapat fill kosong</p>}
                </ListGroupItem>
            </ListGroup> */}
            <Footer/>
            </div>
      );
    }  
}

export default DataVerif;