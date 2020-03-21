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

class HeaderAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          modal: false,
          email: localStorage.getItem("email")
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

      remove(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('email');
      }

    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand><Link to="/homeauth">Pengajuan Pelatihan</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mr-4">
                                <Link to="/eventlist">Daftar Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/newdata">Ajukan Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/veriflist">Verifikasi Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/neweventlist">Tambah Pelatihan</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/about">Tentang Kami</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/profile">Halo, {this.state.email} </Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/" onClick={this.remove}>Logout</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default HeaderAuth;