import React, { Component } from 'react';
import getStarted from '../imgs/getStarted.jpeg';
import SignUpModal from './modals/SignUpModal';
import LoginModal from './modals/LoginModal';

class GetStarted extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center" id="getStarted">
                <h1 className="display-4">Get Started On Your Fitness Journey Today!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                {/* <a className="btn btn-primary" href="/create-account">Sign Up</a> */}
                {/* <a className="btn btn-primary" href="/login">Login</a> */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <SignUpModal />
                    </div>
                    <div className="col-md-4">
                        <LoginModal />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default GetStarted;
