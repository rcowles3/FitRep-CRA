import React from 'react';
import {Button} from 'react-bootstrap';


export default class BsButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    //     return <button {...this.props} type="button" className="btn btn-primary" >{this.props.children}
    //    </button>
        return <Button {...this.props} >{this.props.children}</Button>
        

      
    }
}