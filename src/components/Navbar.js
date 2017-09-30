import React, { Component } from 'react';
import headerLogo from '../imgs/iLIFT Fitness Camp Logo (1).png';
import Login from './Login';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand mx-auto" href="/">
                    <img src={headerLogo} alt="FitRep Fitness Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <Login />                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;