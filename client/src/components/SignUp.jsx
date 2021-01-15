/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChangeUsername = this.handleChangeUsername.bind(this);
    handleChangeEmail = this.handleChangeEmail.bind(this);
    handleChangePassword = this.handleChangePassword.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        // alert('Le formulaire : ' + this.state.value);
        event.preventDefault();

        // const registered = {
        //     username: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password
        // }
        
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Votre Nom" 
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="form-control form-group"
                            />
                            <input 
                                type="text" 
                                placeholder="Email" 
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group"
                            />
                            <input 
                                type="text" 
                                placeholder="Mot de passe" 
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group"
                            />
                            <input 
                                type="submit" 
                                className="btn btn-danger btn-block"
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;