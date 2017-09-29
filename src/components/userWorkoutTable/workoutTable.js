import React from 'react';
import {Table} from 'react-bootstrap'


export default class BsTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return <Table {...this.props} >
        <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Weight</th>
                            <th>Reps</th>
                            <th>Sets</th>
                        </tr>
                    </thead>
       {this.props.children}
        
        </Table>
    }
}