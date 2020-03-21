import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { getJwt } from '../helpers/jwt';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';
import ProfileCard from './cards/ProfileCard';


class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp_id: "",
            emp_role: "",
            emp_name: "",
            emp_department: "",
            emp_division: "",
            emp_gender: "",
            emp_birth_place: "",
            emp_birth_date: "",
            emp_email: "",
            emp_phone: "",
            user_id: "",
            employee: []
        };
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post('http://localhost:3001/api/employees/4', {
            emp_id: this.state.emp_id,
            emp_role: "Peserta",
            emp_name: this.state.emp_name,
            emp_department: this.state.emp_department,
            emp_division: this.state.emp_division,
            emp_gender: this.state.emp_gender,
            emp_birth_place: this.state.emp_birth_place,
            emp_birth_date: this.state.emp_birth_date,
            emp_email: this.state.emp_email,
            emp_phone: this.state.emp_phone,
        },
        {headers:headers}).then(res => 
            console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));

    }

    // submitEvent = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/api/events', {
    //         event_name: this.state.event_name,
    //         event_desc: this.state.event_desc
    //     }).then(res => 
    //         console.log(res.data))
    //     .catch(() => this.setState({
    //         error: true
    //     }));

    //     this.setState({
    //         event_name: "",
    //         event_desc: ""
    //     });
    // }

    render() {
        let profileCard = this.state.employee.map(pela => {
            return (
                <Col>
                    <ProfileCard pela={pela} />
                </Col>
            )
        })
        return (
            <div className="inner-container">
            <HeaderAuth/>
                <Row>
                    <Col sm={3}>
                        {profileCard}
                    </Col>
                    <Col md={9}>
                        <Row className="ml-5">
                            <Col>
                                <h3>Data Pribadi</h3>
                                <span>Isi data diri anda untuk pengguna baru atau ubah data diri untuk pengguna lama</span>
                                <h3> </h3>
                <Form 
                    onSubmit={this.submitData.bind(this)}
                    >
                        <FormGroup>
                            <Label for="exampleNumber">NIP</Label>
                            <Input
                                type="text"
                                name="emp_id"
                                id="data-input"
                                placeholder="NIP"
                                value={this.state.emp_id}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Peran Karyawan</Label>
                            <Input
                                type="text"
                                name="emp_role"
                                id="data-input"
                                placeholder="Peran Karyawan"
                                value="Peserta"
                                onChange={this.change.bind(this)}
                            disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Nama Karyawan</Label>
                            <Input
                                type="text"
                                name="emp_name"
                                id="data-input"
                                placeholder="Nama Karyawan"
                                value={this.state.emp_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Departemen Karyawan</Label>
                            <Input
                                type="select"
                                name="emp_department"
                                id="data-input"
                                placeholder="Departemen Karyawan"
                                value={this.state.emp_department}
                                onChange={this.change.bind(this)}
                            >
                            <option value="Keuangan dan Administrasi" onChange={this.change.bind(this)}>Keuangan dan Administrasi</option>
                            <option value="Bisnis Produk Hankam" onChange={this.change.bind(this)}>Bisnis Produk Hankam</option>
                            <option value="Bisnis Produk Industrial" onChange={this.change.bind(this)}>Bisnis Produk Industrial</option>
                            <option value="Teknologi dan Pengembangan" onChange={this.change.bind(this)}>Teknologi dan Pengembangan</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Divisi Karyawan</Label>
                            <Input
                                type="select"
                                name="emp_division"
                                id="data-input"
                                placeholder="Divisi Karyawan"
                                value={this.state.emp_division}
                                onChange={this.change.bind(this)}
                            >
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
                            <Label for="exampleNumber">Jenis Kelamin Karyawan</Label>
                            <Input
                                type="select"
                                name="emp_gender"
                                id="data-input"
                                placeholder="Jenis Kelamin Karyawan"
                                value={this.state.emp_gender}
                                onChange={this.change.bind(this)}
                            >
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Tempat Lahir Karyawan</Label>
                            <Input
                                type="text"
                                name="emp_birth_place"
                                id="data-input"
                                placeholder="Tempat Lahir Karyawan"
                                value={this.state.emp_birth_place}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Tanggal Lahir Karyawan</Label>
                            <Input
                                type="date"
                                name="emp_birth_date"
                                id="data-input"
                                placeholder="Tanggal Lahir Karyawan"
                                value={this.state.emp_birth_date}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Email Karyawan</Label>
                            <Input
                                type="text"
                                name="emp_email"
                                id="data-input"
                                placeholder="Email Karyawan"
                                value={this.state.emp_email}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">No HP Karyawan</Label>
                            <Input
                                type="text"
                                name="emp_phone"
                                id="data-input"
                                placeholder="No HP Karyawan"
                                value={this.state.emp_phone}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <Button
                            >Submit</Button>
                        </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="ml-5 mt-2">
                    {/* <Jumbotron fluid>
                        <Container fluid>
                        <Card>
                        <CardBody className="text-center">
                        
                    
                        </CardBody>                                                
                    </Card>
                    </Container>
                </Jumbotron> */}
                </Row>                
            <Footer/>
        </div>
      );
    }
}
export default Profil;