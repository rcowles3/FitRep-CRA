import React from 'react';
import {Row} from 'react-bootstrap';


export default class ExerciseRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {exercise: null, weight: null, reps: null, sets: null};
    }
   
    render() {
        console.log("I'm getting this data: ", this.props);
        // console.log("I am in exercise row for day" , this.props.day);
        // console.log("I am in exercise row for exercise" , this.props.exercise);
        
           
      return (
          <tbody>
          {this.props.exercise.map((exercise, index)=> (
            <tr>
                <td key={index}>{exercise}</td>
                <td>{this.props.weight[index]}</td>
                <td>{this.props.reps}</td>
                <td>{this.props.sets}</td>
                </tr>
          ))}
          
        </tbody>
      );
    }
  }