import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Label, Col, Container, Jumbotron, Row,
    ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
          email: "",
          password: "",
          error: "",
          loggedIn
        }
      }
      
      change(e) {
          this.setState({
              [e.target.name]: e.target.value
          })
      }
  
      submitLogin = (e) => {
          e.preventDefault();
          let jwt = "jwt";
          let emailAcc = "email";
          axios.post('http://localhost:3001/api/signin', {
              email: this.state.email,
              password: this.state.password
          }).then(res => {
              localStorage.setItem(jwt, res.data.token);
              localStorage.setItem(emailAcc, this.state.email);
              this.setState({
                  loggedIn: true
              });
          })
          .catch(() => this.setState({
              email: "",
              password: "",
              error: true
          }));
      }
    
      render() {
          const { error } = this.state;
          if(this.state.loggedIn){
              return <Redirect to="/homeauth" />
          }
  
          return (
              <div className="inner-container">
                <Row>
                    <Col>
                          
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                    <ListGroup>
                        <ListGroupItem>
                            <Label for="labelLogin">
                                <div align="center">
                                    <h3>Pengajuan Pelatihan</h3>
                                </div>
                            </Label>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Form 
                        onSubmit={this.submitLogin.bind(this)}
                        >
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="email"
                                    id="login-input"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.change.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="password"
                                    id="register-input"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.change.bind(this)}
                                />
                            </FormGroup>
                            <Button
                                >Login</Button>
                            </Form>
                            {error && <p>Email dan Password tidak terdaftar</p>}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={4}></Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
              </div>
        );
      }  
}
export default Login;