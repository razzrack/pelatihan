import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        };
    }

    showLoginBox(){
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox(){
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <ButtonGroup>
                        <Button className={"controller" +
                            (this.state.isLoginOpen
                                ? "selected-controller" : "")}
                                onClick={this
                                .showLoginBox
                                .bind(this)}>
                                Login
                        </Button>
                        <Button className={"controller" +
                            (this.state.isRegisterOpen
                                ? "selected-controller" : "")}
                                onClick={this
                                .showRegisterBox
                                .bind(this)}>
                                Register
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox/>}
                    {this.state.isRegisterOpen && <RegisterBox/>}
                </div>
            </div>
        );
    }
}

//Login Box
class LoginBox extends React.Component {

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
            return <Redirect to="/events" />
        }

        return (
            <div className="inner-container">
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Login</Label>
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
            </div>
      );
    }  
}

//Register Box
class RegisterBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/signup', {
            username: this.state.username,
            password: this.state.password
        }).then(res => 
            console.log(res.data))
        .catch(() => this.setState({
            error: true
        }));

        this.setState({
            username: "",
            password: ""
        });
    }

    render() {
        return (
            <div className="inner-container">
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Register</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.submitRegister.bind(this)}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="username"
                                id="register-input"
                                placeholder="Username"
                                value={this.state.username}
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
                            >Register</Button>
                        </Form>
                </ListGroupItem>
            </ListGroup>
            </div>
      );
    }
}

export default Login;