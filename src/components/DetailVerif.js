import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardSubtitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';   
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class DetailVerif extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        submission_status: "",
        approve_date: "",
        submissions: [],
        error: ""
      };
    //   this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/api/submissions/${id}`)
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

    btnAccept = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const url = `http://localhost:3001/api/submission/${id}`;
        const headers = {
            'Authorization': getJwt()  
        };
        axios.put(url, {
            submission_status: "Terima",
            approve_date: new Date()
        },
        // {headers:headers}
        ).then(res => console.log(res.data))
        // this.setState({
        //     submission_status: "Terima",
        //     approve_date: new Date()
        // });
    }

    btnDecline = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id
        const url = `http://localhost:3001/api/submission/${id}`;
        const headers = {
            'Authorization': getJwt()  
        };
        axios.put(url, {
            submission_status: "Tolak",
            approve_date: new Date()
        },
        // {headers:headers}
        ).then(res => console.log(res.data))
        // this.setState({
        //     submission_status: "Tolak",
        //     approve_date: new Date()
        // });
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
        // let submissionCard = this.state.submissions.map(submission => {
        //     return (
        //         <Col>
        //             <SubmissionCard submission={submission} />
        //         </Col>
        //     )
        // })

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
                        <Col md={3}>
                            
                        </Col>
                        <Col md={6}>
                            <Card className="text-center">
                                <CardBody>
                                    <CardTitle><h3><b>Detail Data Verifikasi Pengajuan Pelatihan</b></h3></CardTitle>
                                    <CardText>
                                        <div align="left">
                                            <br/>
                                            <p>Tanggal Pengajuan     : {this.state.submissions.submission_date}</p>
                                            <p>Divisi yang Mengajukan: {this.state.submissions.division_name}</p>
                                            <p>Nama Pelatihan        : {this.state.submissions.event_name}</p>
                                            <p>Tipe Pelatihan        : {this.state.submissions.event_type}</p>
                                            <p>Provider              : {this.state.submissions.provider_name}</p>
                                            <p>Lokasi                : {this.state.submissions.event_place}</p>
                                            <p>Tanggal               : {this.state.submissions.event_date_start} - {this.state.submissions.event_date_end}</p>
                                            <p>Durasi                : {this.state.submissions.event_duration}</p>
                                            <p>Contact Person Divisi : {this.state.submissions.division_phone}</p>
                                        </div>
                                    </CardText>
                                    <CardText>
                                        <div align="center">
                                            <br/>
                                            <Button onClick={this.btnAccept.bind(this)}>Terima</Button>
                                            <Button onClick={this.btnDecline.bind(this)}>Tolak</Button>
                                        </div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>

                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        <Footer/>
        </div>
      );
    }  
}

export default DetailVerif;