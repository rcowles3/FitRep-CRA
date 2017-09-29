import React from 'react';
import BsTable from './userWorkoutTable/workoutTable';
import BsButton from './button';
import {ButtonToolbar} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import ExerciseRow from './userWorkoutTable/exerciseRow';
import logo from '../imgs/fitRepLogo.png';

//import temporary data object
import data from '../data/data.json';



//import BSTable from './components/bstrapTable';

//<Button>Day: {this.props.workout.weeks[0].wday[0].day}</Button>
export default class BacktoBasics extends React.Component{
    constructor(props){
        super(props);
        //this.onClick = this.onClick.bind(this);
        // this.onReset = this.onReset.bind(this);
        this.state = {day:null, week: null, exercise: null};
    }
    setWeek(wnum){
        this.setState({week:data.workout.weeks[wnum-1]});
        
        console.log('state',this.state.week);
    }

   setDay(wday){
       //remove other week buttons at this time
       this.setState({day:this.state.week.wday[wday-1]});
       
   }

  render(){
      console.log("this is my data I am importing", data);
        return (
        <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />                    
                </div>
                <h1 className="text-center">{data.workout.collection}</h1>
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