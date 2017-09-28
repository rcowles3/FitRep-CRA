import React, { Component } from 'react';
import headerImg from '../imgs/sports-fitness-body-building-iron-161557 (2).jpeg'

class HeaderImg extends Component {

    render() {
        return (
            <div class="jumbotron">
                <img src={headerImg} id="headerImg" alt="FitRep Header Image" />
            </div>
        );
    }
}

export default HeaderImg;
