/**
 * Login Screen Component
 *
 * Component checks users input accross our MongoDB collection
 * @param {username} username - users created username
 * @param {password} password - users secured password using passport js
 * If valid,
 * @return {userProfile} - component that will display information related to user
 */

import React, { Component } from 'react';
import logo from '../imgs/fitRepLogo.png';
import helpers from '../utils/helpers';
import axios from 'axios';


// import passport from ('passport');
// import LocalStrategy from ('passport-local').Strategy;


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.userData = new helpers();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {

        let loginInfo = {
            user_name: this.state.username,
            pass_word: this.state.password
        };

        // let first_name = this.state.firstName;
        event.preventDefault();
        this.userData.authData(loginInfo);
        // console.log("Account Login Successful!");

        // let user_name =this.state.username;
        // let pass_word = this.state.password;

        // console.log(loginInfo);

        // console.log('username/password:', username, password);
        // console.log('password', password);
        // this.setState({ fireRedirect: true })

        // const click = this.props.onClick;
        // axios.post("http://localhost:4200/users/login", { username: this.state.username, password: this.state.password }).then((response) => {
        //     click(true);
        //     // console.log('post login');

        //     // click(true);
        //     axios.get("/contests/judge").then(function (response) {
        //         // click(true);
        //         // console.log('judge username:', response.data[0].username);
        //         if (username === response.data[0].username) {
        //             console.log("profile redirect");
        //             // browserHistory.push('/dashboard');
        //         }
        //     });

        // });

    }

    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="text" id="username" value={this.state.username} onChange={this.handleChange} name="user_name" placeholder="Username" />
                    <input className="form-control mr-sm-2" type="text" id="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;