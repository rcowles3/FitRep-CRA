import React from 'react';
import BsTable from './userWorkoutTable/workoutTable';
import BsButton from './button';
import {ButtonToolbar} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import ExerciseRow from './userWorkoutTable/exerciseRow';
import logo from '../imgs/fitRepLogo.png';

//import temporary data object
import data from '../data/data.json';

//import basics from '../data/BackToBasics.json';

//import helpers from '../utils/helpers';
import axios from 'axios';


//import BSTable from './components/bstrapTable';

//<Button>Day: {this.props.workout.weeks[0].wday[0].day}</Button>
export default class BacktoBasics extends React.Component{
    constructor(props){
        super(props);
        //this.onClick = this.onClick.bind(this);
        // this.onReset = this.onReset.bind(this);
        this.state = {day:null, week: null, exercise: null};
       this.getData = this.getData.bind(this);
        this.renderExercises = this.renderExercises.bind(this);

    }
    setWeek(wnum){
        this.setState({week:data.workout.weeks[wnum-1]});
        
        console.log('state',this.state.week);
    }

   setDay(wday){
       //remove other week buttons at this time
       this.setState({day:this.state.week.wday[wday-1]});
       
   }

   componentDidMount(){
    this.getData();
}

   getData(){
    console.log("I am in the get exercises call")
     axios.get('http://localhost:4200/b2b').then((res) => {
         console.log("this is the response from the call!", res.data);
            this.setState({items:res.data});
            console.log("this.state.items:  ", this.state.items);
            
           // var loop = this.state.items;
           // console.log("this is my loop now", loop);
           // loop.map((exercises) => {}
           // this.state.items.map()
           
       });
   
    }
   

    renderExercises(){
        //console.log("my event is ", event);
        console.log("I am in renderExercises", this.state.items);
        const loop = this.state.items;
        const exerciseItems = loop.map((exercises, index) =>
        
        // Only do this if items have no stable IDs
        <li key={index}>           
          {exercises}
        </li> 
        );
        // return this.state.items.map((exercises, index) => (
        //     <li key = {index}>Exercise: {exercises}</li>
        // ));

        // {this.props.exercise.map((exercise, index)=> (
        //     <tr>
        //         <td key={index}>{exercise}</td>
        //         <td>{this.props.weight[index]}</td>
        //         <td>{this.props.reps}</td>
        //         <td>{this.props.sets}</td>
        //         </tr>
        //   ))}
       

    }

  render(){
      //console.log("this is my data I am importing", data);
      //console.log("this is from the database", this.state.items);
        return (
        <div className="App">
                <div className="App-header">
                    <a href="/">
                    <img src={logo} className="App-logo" alt="logo" /> </a>                   
                </div>
                <h1 className="text-center">{data.workout.collection}</h1>
               {/* {this.state.items ? <BsButton bsStyle="success" onClick={this.renderExercises}>{this.state.items[0].workoutWeek}</BsButton>:null}*/}
                {/*<BsButton onClick={this.getData}>Get Exercises</BsButton>*/}
                <ButtonToolbar>
                     {data.workout.weeks.map((week) => {
                        console.log('week',week);
                     return <BsButton bsStyle="success" onClick={() => {this.setWeek(week.wnum)}}>Week: {week.wnum}</BsButton>
                    })}
                </ButtonToolbar>
                <ButtonToolbar>
                    {console.log("I am in the second button toolbar", this.state.week)}
                {this.state.week ? this.state.week.wday.map((day) => {
                    console.log('day', day);
                return <BsButton bsStyle="success" onClick={()=>{this.setDay(day.day)}}>Day: {day.day}</BsButton>
                
                 }) : null }
                </ButtonToolbar>
                <Well>
                <BsTable striped bordered condensed hover>                    
                    {this.state.day ? <ExerciseRow {...this.state.day} /> : null}
                   
                </BsTable>
                </Well>
          
        </div>
        )
    }

}