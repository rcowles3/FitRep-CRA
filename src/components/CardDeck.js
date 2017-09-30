import React, { Component } from 'react';
import workoutIcon from '../imgs/workoutIcon.png';
import trackingIcon from '../imgs/trackingIcon.png';
import scaleIcon from '../imgs/scaleIcon.png';
//import BackToBasics from '../components/BacktoBasics';


class CardDeck extends Component {

    render() {
        return (
            <div className="card-deck text-center">
                <div className="card">
                    <img className="card-img-top mx-auto" src={scaleIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">About FitRep</h4>
                        <p className="card-text">FitRep Fitness was developed to be an simpler way to keep track of your workouts, while having a simple to use UI.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src={workoutIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">Choose Your Workout</h4>
                        <p className="card-text">Whether you are just getting started on your fitness journey, or looking for a challenge, choose one that fits your goals.</p>
                        <a className="btn btn-primary my-2 my-sm-0" href="/back2basics">Get Workout</a>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src={trackingIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">How Does It Work</h4>
                        <p className="card-text">FitRep Fitness will allow you to seamlesly track your workouts for the day from your selected workout, as well as your progress.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDeck;
