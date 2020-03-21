import React from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from "react-router-dom";
import img1 from '../img/Influence-Generation-Forum-Maker-2019.jpg';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let { event_name, event_type, provider_name, event_place,
      event_date_start,event_date_end,event_duration,event_fee,event_status,event_desc } = this.props.event;
    return (
    <div>
        <Card className="text-center">
    {/* <CardImg src={img1} height="250px" width="250px" /> */}
            <CardBody>
                <CardTitle>
                <Link onClick={this.toggle}>{event_name}</Link></CardTitle>
                <CardSubtitle>{event_type}</CardSubtitle>
                <CardSubtitle>{provider_name}</CardSubtitle>
            </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Detail Pelatihan</ModalHeader>
          <ModalBody>
              <p>Nama Pelatihan : {event_name}</p>
              <p>Tipe Pelatihan : {event_type}</p>
              <p>Provider : {provider_name}</p>
              <p>Lokasi : {event_place}</p>
              <p>Tanggal : {event_date_start} - {event_date_end}</p>
              <p>Durasi : {event_duration}</p>
              <p>Biaya : {event_fee}</p>
              <p>Status : {event_status}</p>
              <p>Deskripsi: {event_desc}</p>
            </ModalBody>
          <ModalFooter>
              {/* <Link to="/trainees">Daftar Menjadi Peserta</Link> */}
          </ModalFooter>
        </Modal>
    </div>
    );
  }
};

export default EventCard;