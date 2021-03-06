import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Col, Container, Jumbotron, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class NewData extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        submission_date: "2020-02-19",
        // new Date().toLocaleDateString("nl",{year:"2-digit",month:"2-digit", day:"2-digit"}),
        // new Date().toLocaleDateString('zh-Hans-CN'),
        division_name: "",
        event_name: "",
        event_type: "",
        provider_name: "",
        event_place: "",
        event_date_start: "",
        event_date_end: "",
        event_duration: "",
        division_phone: "",
        submission_status: "Menunggu Konfirmasi",
        approve_date: "",
        submissions: [],
        events: [],
        error: ""
      };
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const url = `http://localhost:3001/api/events/${id}`;
        axios.get(url)
        .then(res => res.data)
        .then((data) => {
            this.setState({ events: data})
            console.log(this.state.events)
        })
      }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitData = (e) =>  {
        e.preventDefault();
        const url = "http://localhost:3001/api/submissions";
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post(url, {
            submission_date: "2020-02-19",
            division_name: this.state.division_name,
            event_name: this.state.event_name,
            event_type: this.state.event_type,
            provider_name: this.state.provider_name,
            event_place: this.state.event_place,
            event_date_start: this.state.event_date_start,
            event_date_end: this.state.event_date_end,
            event_duration: this.state.event_duration,
            division_phone: this.state.division_phone,
            submission_status: "Menunggu Konfirmasi",
            // approve_date: this.state.approve_date
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
                                <Label for="labelLogin">Input Form Pengajuan Pelatihan</Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form 
                                onSubmit={this.submitData.bind(this)}
                                >
                                    {/* <FormGroup>
                                        <Label for="submission_date">Tanggal Pengajuan</Label>
                                        <Input
                                            type="text"
                                            name="submission_date"
                                            id="submission-input"
                                            value={this.state.submission_date}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup> */}
                                    <FormGroup>
                                    <Label for="division_name">Nama Divisi</Label>
                                        <Input type="select" name="division_name" id="submission-input"
                                        value={this.state.division_name}
                                        onChange={this.change.bind(this)}>
                                            <option value="Perencanaan dan Kinerja Perusahaan">Perencanaan dan Kinerja Perusahaan</option>
                                            <option value="Akuntansi dan Keuangan">Akuntansi dan Keuangan</option>
                                            <option value="Human Capital dan Pengembangan Organisasi">Human Capital dan Pengembangan Organisasi</option>
                                            <option value="Sistem Informasi Manajemen">Sistem Informasi Manajemen</option>
                                            <option value="Bisnis Hankam">Bisnis Hankam</option>
                                            <option value="Senjata">Senjata</option>
                                            <option value="Munisi">Munisi</option>
                                            <option value="Kendaraan Khusus">Kendaraan Khusus</option>
                                            <option value="Bisnis Industrial">Bisnis Industrial</option>
                                            <option value="Alat Berat">Alat Berat</option>
                                            <option value="Tempa-Cor dan Alat Perkeretaapian">Tempa-Cor dan Alat Perkeretaapian</option>
                                            <option value="Bahan Peledak Komersial">Bahan Peledak Komersial</option>
                                            <option value="Pengembangan Produk dan Proses">Pengembangan Produk dan Proses</option>
                                            <option value="Quality Assurance dan K3LH">Quality Assurance dan K3LH</option>
                                            <option value="Supply Chain">Supply Chain</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_name">Nama Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_name"
                                            id="submission-input"
                                            placeholder="Nama Pelatihan"
                                            value={this.state.events.event_name}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_type">Tipe Pelatihan</Label>
                                        <Input
                                            type="select"
                                            name="event_type"
                                            id="submission-input"
                                            value={this.state.events.event_type}
                                            onChange={this.change.bind(this)}>
                                            <option value="Umum - Dasar">Umum - Dasar</option>
                                            <option value="Umum - Manajemen dan Produksi">Umum - Manajemen dan Produksi</option>
                                            <option value="Umum - Teknik Rekayasa dan Produksi">Umum - Teknik Rekayasa dan Produksi</option>
                                            <option value="Umum - Kepemimpinan">Umum - Kepemimpinan</option>
                                            <option value="Sertifikasi - Dasar">Sertifikasi - Dasar</option>
                                            <option value="Sertifikasi - Manajemen dan Produksi">Sertifikasi - Manajemen dan Produksi</option>
                                            <option value="Sertifikasi - Teknik Rekayasa dan Produksi">Sertifikasi - Teknik Rekayasa dan Produksi</option>
                                            <option value="Sertifikasi - Kepemimpinan">Sertifikasi - Kepemimpinan</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="provider_name">Nama Provider</Label>
                                        <Input
                                            type="select"
                                            name="provider_name"
                                            id="submission-input"
                                            value={this.state.events.provider_name}
                                            onChange={this.change.bind(this)}>
                                            <option value="Makmur Jaya">Makmur Jaya</option>
                                            <option value="Makmur Sentosa">Makmur Sentosa</option>
                                            <option value="Sentosa Jaya">Sentosa Jaya</option>
                                            <option value="Kampung Jaya">Kampung Jaya</option>
                                            <option value="Sukses Sentosa">Sukses Sentosa</option>
                                            <option value="Indolearning">Indolearning</option>
                                            <option value="Suka Jaya">Suka Jaya</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_place">Lokasi Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_place"
                                            id="submission-input"
                                            placeholder="Lokasi Pelatihan"
                                            value={this.state.events.event_place}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_start">Tanggal Mulai</Label>
                                        <Input
                                            type="date"
                                            name="event_date_start"
                                            id="submission-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.events.event_date_start}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_end">Tanggal Selesai</Label>
                                        <Input
                                            type="date"
                                            name="event_date_end"
                                            id="submission-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.events.event_date_end}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_duration">Durasi Pelatihan</Label>
                                        <Input
                                            type="number"
                                            name="event_duration"
                                            id="submission-input"
                                            placeholder="Durasi Pelatihan"
                                            value={this.state.events.event_duration}
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
                                            value={this.state.events.division_phone}
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

export default NewData;