import React, { Component } from 'react';
import headerImg from '../imgs/newHeaderLogo.png';

class HeaderImg extends Component {

    render() {
        return (
            <div id="headerImg" className="jumbotron jumbotron-fluid">
                <div id="headerText" className="mx-auto">
                    <h1 className="display-2">FitRep Fitness!</h1>
                    <h4 className="display-4">Lets get to reppin</h4>
                </div>
                {/* <img src={headerImg} id="headerImg" alt="FitRep Header Image" /> */}
            </div>
        );
    }
}

export default HeaderImg;
