import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "./Login";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          modal: false
        };

        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand><Link to="/">Pengajuan Pelatihan</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mr-4">
                                <Link to="/event">Daftar Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/newdata">Ajukan Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/verif">Verifikasi Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/about">Tentang Kami</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link onClick={this.toggle}>Login/Register</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login/Register</ModalHeader>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default Header;