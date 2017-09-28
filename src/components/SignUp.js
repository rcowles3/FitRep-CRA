import React, { Component } from 'react';
import helpers from '../utils/helpers';
import logo from '../imgs/fitRepLogo.png';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            heightFt: '',
            heightIn: '',
            weight: '',
            age: '',
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

        let createAccount = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            uEmail: this.state.email,
            height_ft: this.state.heightFt,
            height_in: this.state.heightIn,
            uWeight: this.state.weight,
            uAge: this.state.age,
            user_name: this.state.username,
            pass_word: this.state.password
        };

        // let first_name = this.state.firstName;
        event.preventDefault();
        this.userData.sendData(createAccount);
        // console.log("Account Creation Successful!");
        // this.addItemService.sendData(this.state.value);
        // this.props.history.push('/index');

        // let last_name= this.state.lastName;
        // let uEmail = this.state.email;
        // let height_ft = this.state.heightFt;
        // let height_in = this.state.heightIn;
        // let uWeight = this.state.weight;
        // let uAge = this.state.age;
        // let user_name =this.state.username;
        // let pass_word = this.state.password;

        // console.log("User Data: ", first_name, last_name, uEmail, height_ft, height_in, uWeight, uAge, user_name, pass_word);
        // console.log(createAccount);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Create Account Below</h2>
                </div>
                <div className="col-md-3"></div>
                <form className="col-md-6" onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
              <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" name="first_name" />
                    </label><br />
                    <label>
                        Last Name:
              <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} className="form-control" name="last_name" />
                    </label><br />
                    <label>
                        Email:
              <input type="text" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" name="uEmail" />
                    </label><br />
                    <label>
                        Height (ft):
              <input type="text" id="heightFt" value={this.state.heightFt} onChange={this.handleChange} className="form-control" name="height_ft" />
                    </label><br />
                    <label>
                        (in):
              <input type="text" id="heightIn" value={this.state.heightIn} onChange={this.handleChange} className="form-control" name="height_in" />
                    </label><br />
                    <label>
                        Weight:
              <input type="text" id="weight" value={this.state.weight} onChange={this.handleChange} className="form-control" name="uWeight" />
                    </label><br />
                    <label>
                        Age:
              <input type="text" id="age" value={this.state.age} onChange={this.handleChange} className="form-control" name="uAge" />
                    </label><br />
                    <label>
                        Username:
              <input type="text" id="username" value={this.state.username} onChange={this.handleChange} className="form-control" name="user_name" />
                    </label><br />
                    <label>
                        Password:
              <input type="text" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="pass_word" />
                    </label><br />
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
                <div className="col-md-3"></div>
                <br />
                <br />

            </div>
        );
    }
}

export default SignUp;