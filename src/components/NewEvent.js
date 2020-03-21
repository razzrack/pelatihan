import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Col, Container, Jumbotron, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class NewEvent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        division_name: "",
        event_name: "",
        event_type: "",
        provider_name: "",
        event_place: "",
        event_date_start: "",
        event_date_end: "",
        event_duration: "",
        event_fee: "",
        division_phone: "",
        event_desc: "",
        event_status: "Tersedia",
        submissions: [],
        events: [],
        error: ""
      };
    }

    // componentDidMount() {
    //     axios.get('http://localhost:3001/api/events')
    //     .then(res => res.data)
    //     .then((data) => {
    //         this.setState({ submissions: data})
    //         console.log(this.state.submissions)
    //     })
    // }
    componentDidMount() {
        const id = this.props.match.params.id;
        const url = `http://localhost:3001/api/submissions/${id}`;
        axios.get(url)
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

    submitData = (e) =>  {
        e.preventDefault();
        const url = `http://localhost:3001/api/submissions/1/events`;
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post(url, {
            division_name: this.state.division_name,
            event_name: this.state.event_name,
            event_type: this.state.event_type,
            provider_name: this.state.provider_name,
            event_place: this.state.event_place,
            event_date_start: this.state.event_date_start,
            event_date_end: this.state.event_date_end,
            event_duration: this.state.event_duration,
            event_fee: this.state.event_fee,
            division_phone: this.state.division_phone,
            event_desc: this.state.event_desc,
            event_status: "Tersedia"
        },
        // {headers:headers}
        ).then(res => console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));
    }
  
    render() {
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
                        <ListGroup>
                            <ListGroupItem>
                                <Label for="labelLogin">Input Form Pelatihan Baru</Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form 
                                onSubmit={this.submitData.bind(this)}
                                >
                                    <FormGroup>
                                    <Label for="division_name">Nama Divisi</Label>
                                        <Input type="select" name="division_name" id="event-input"
                                        value={this.state.division_name}
                                        onChange={this.change.bind(this)}>
                                            <option value="Perencanaan dan Kinerja Perusahaan">Perencanaan dan Kinerja Perusahaan</option>
                                            <option value="Akuntansi dan Keuangan">Akuntansi dan Keuangan</option>
                                            <option value="Human Capital dan Pengembangan Organisasi">Human Capital dan Pengembangan Organisasi</option>
                                            <option value="Sistem Informasi Manajemen">Sistem Informasi Manajemen</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_name">Nama Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_name"
                                            id="event-input"
                                            placeholder="Nama Pelatihan"
                                            value={this.state.event_name}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_type">Tipe Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_type"
                                            id="event-input"
                                            placeholder="Tipe Pelatihan"
                                            value={this.state.event_type}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="provider_name">Nama Provider</Label>
                                        <Input
                                            type="text"
                                            name="provider_name"
                                            id="event-input"
                                            placeholder="Nama Provider"
                                            value={this.state.provider_name}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_place">Lokasi Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_place"
                                            id="event-input"
                                            placeholder="Lokasi Pelatihan"
                                            value={this.state.event_place}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_start">Tanggal Mulai Pelatihan</Label>
                                        <Input
                                            type="date"
                                            name="event_date_start"
                                            id="event-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.event_date_start}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_end">Tanggal Selesai Pelatihan</Label>
                                        <Input
                                            type="date"
                                            name="event_date_end"
                                            id="event-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.event_date_end}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_duration">Durasi Pelatihan</Label>
                                        <Input
                                            type="number"
                                            name="event_duration"
                                            id="event-input"
                                            placeholder="Durasi Pelatihan"
                                            value={this.state.event_duration}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_fee">Biaya Pelatihan</Label>
                                        <Input
                                            type="number"
                                            name="event_fee"
                                            id="event-input"
                                            placeholder="Biaya Pelatihan"
                                            value={this.state.event_fee}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="division_phone">Contact Person Divisi</Label>
                                        <Input
                                            type="text"
                                            name="division_phone"
                                            id="submission-input"
                                            placeholder="Contact Person Divisi"
                                            value={this.state.division_phone}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_desc">Deskripsi Pelatihan</Label>
                                        <Input
                                            type="textarea"
                                            name="division_phone"
                                            id="submission-input"
                                            value={this.state.division_phone}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    {/* <FormGroup>
                                    <Label for="submission_status">Status</Label>
                                        <Input
                                            type="text"
                                            name="submission_status"
                                            id="submission-input"
                                            placeholder="Status"
                                            value={this.state.submission_status}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup> */}
                                    {/* <FormGroup>
                                        <Label for="approve_date">Tanggal Pengajuan</Label>
                                        <Input
                                            type="date"
                                            name="approve_date"
                                            id="submission-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.approve_date}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup> */}
                                    <Button
                                        >Submit</Button>
                                    </Form>
                                    {error && <p>Terdapat fill kosong</p>}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}></Col>
                    </Row>
                    </Container>
                </Jumbotron>
            <Footer/>
            </div>
      );
    }  
}

export default NewEvent;