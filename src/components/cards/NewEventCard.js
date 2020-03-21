import React from 'react';
import axios from 'axios';
import {
  Button, Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { getJwt } from '../../helpers/jwt'; 
import { Link, Redirect } from "react-router-dom";
import img1 from '../img/Influence-Generation-Forum-Maker-2019.jpg';

class NewEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        submissions: []
      };
  
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    btnAccept = (e) => {
        e.preventDefault();
        const url = "http://localhost:3001/api/submission/1";
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
        const url = "http://localhost:3001/api/submission/1";
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
        const url = "http://localhost:3001/api/submission/1";
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
    let { submission_date, division_name, event_name, event_type, provider_name, event_place,
      event_date_start, event_date_end, event_duration, division_phone, submission_status, approve_date} = this.props.submission;
    return (
    <div>
        <Card className="text-center">
    {/* <CardImg src={img1} height="250px" width="250px" /> */}
            <CardBody>
                <CardTitle>
                <Link onClick={this.toggle}>{event_name}</Link></CardTitle>
                <CardSubtitle>{event_type}</CardSubtitle>
                <CardSubtitle>{provider_name}</CardSubtitle>
                <CardSubtitle>{submission_status}</CardSubtitle>
            </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Detail Pengajuan Pelatihan</ModalHeader>
          <ModalBody>
              <p>Tanggal Pengajuan      : {submission_date}</p>
              <p>Divisi yang Mengajukan : {division_name}</p>
              <p>Nama Pelatihan         : {event_name}</p>
              <p>Tipe Pelatihan         : {event_type}</p>
              <p>Provider               : {provider_name}</p>
              <p>Lokasi                 : {event_place}</p>
              <p>Tanggal                : {event_date_start} - {event_date_end}</p>
              <p>Durasi                 : {event_duration}</p>
              <p>Contact Person Divisi  : {division_phone}</p>
              <p>Status Pengajuan       : {submission_status}</p>
              <p>Tanggal Diverifikasi   : {approve_date}</p>
            </ModalBody>
          <ModalFooter>
              <Redirect to="/newevent/1">Buat</Redirect>
          </ModalFooter>
        </Modal>
    </div>
    );
  }
};

export default NewEventCard;