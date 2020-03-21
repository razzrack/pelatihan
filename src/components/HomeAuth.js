import React from 'react';
import axios from 'axios';
import {
    Card, CardHeader,
    CardBody, CardTitle, CardText, Jumbotron, Container, Col, Row, Table
  } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class HomeAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        submissions: [],
        events: [],
        departments: [],
        divisions: [],
        providers: [],
      }
    }

    componentDidMount() {
        const headers = {
            'Authorization': getJwt()  
        };
        const url1 = 'http://localhost:3001/api/users';
        const url2 = 'http://localhost:3001/api/submissions';
        const url3 = 'http://localhost:3001/api/events';
        const url4 = 'http://localhost:3001/api/departments';
        const url5 = 'http://localhost:3001/api/divisions';
        const url6 = 'http://localhost:3001/api/providers';
        axios.all([
            axios.get(url1, 
                // {headers:headers}
                ),
            axios.get(url2),
            axios.get(url3),
            axios.get(url4),
            axios.get(url5),
            axios.get(url6),
        ])
        .then(
            axios.spread((userdata, submissiondata, eventdata,
                deptdata, divdata, provdata)=>{
                this.setState({ 
                    users: userdata.data,
                    submissions: submissiondata.data,
                    events: eventdata.data,
                    departments: deptdata.data,
                    divisions: divdata.data,
                    providers: provdata.data
                })
            })
        )
    }
  
    render() {
        return (
            <div className="inner-container">
                <HeaderAuth/>
                <Jumbotron fluid>
                    <Container fluid>
                    <Col sm="12">
                        <h3>Data Akun</h3>
                        <Table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.email}</td>
                                            <td>{row.password}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <h3>Data Pengajuan Pelatihan</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tanggal Pengajuan</th>
                                    <th>Divisi</th>
                                    <th>Nama</th>
                                    <th>Jenis</th>
                                    <th>Provider</th>
                                    <th>Lokasi</th>
                                    <th>Tanggal Mulai</th>
                                    <th>Tanggal Selesai</th>
                                    <th>Durasi</th>
                                    <th>CP Provider</th>
                                    <th>Status</th>
                                    <th>Tanggal Diverifikasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.submissions.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.submission_date}</td>
                                            <td>{row.division_name}</td>
                                            <td>{row.event_name}</td>
                                            <td>{row.event_type}</td>
                                            <td>{row.provider_name}</td>
                                            <td>{row.event_place}</td>
                                            <td>{row.event_date_start}</td>
                                            <td>{row.event_date_end}</td>
                                            <td>{row.event_duration}</td>
                                            <td>{row.division_phone}</td>
                                            <td>{row.submission_status}</td>
                                            <td>{row.approve_date}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <h3>Data Pelatihan</h3>
                        <Table>
                        <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Divisi</th>
                                    <th>Nama</th>
                                    <th>Jenis</th>
                                    <th>Provider</th>
                                    <th>Lokasi</th>
                                    <th>Tanggal Mulai</th>
                                    <th>Tanggal Selesai</th>
                                    <th>Durasi</th>
                                    <th>Biaya</th>
                                    <th>CP Provider</th>
                                    <th>Deskripsi</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.events.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.division_name}</td>
                                            <td>{row.event_name}</td>
                                            <td>{row.event_type}</td>
                                            <td>{row.provider_name}</td>
                                            <td>{row.event_place}</td>
                                            <td>{row.event_date_start}</td>
                                            <td>{row.event_date_end}</td>
                                            <td>{row.event_duration}</td>
                                            <td>{row.event_fee}</td>
                                            <td>{row.division_phone}</td>
                                            <td>{row.event_desc}</td>
                                            <td>{row.event_status}</td>
                                            <td>{row.approve_date}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <h3>Data Departemen</h3>
                        <Table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departments.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <h3>Data Divisi</h3>
                        <Table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.divisions.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <h3>Data Provider</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.providers.map(row =>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                    </Container>
                </Jumbotron>
                <Footer/>
            </div>
      );
    }  
}

export default HomeAuth;