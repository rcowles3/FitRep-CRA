import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import AddItem from './components/AddItem';
// import IndexItem from './components/IndexItem';
// import EditItem from './components/EditItem';
// import Create from './components/Create';
import Login from './components/Login';
import TableRow from './components/TableRow';
import SignUp from './components/SignUp'
// import BacktoBasics from './components/BacktoBasics';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
    <div>
        <Route exact path='/' component={App} />
        {/* <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
        <Route path='/edit/:id' component={EditItem} /> */}
        <Route path='/create-account' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/table' component={TableRow} />
        {/* <Route path='/back2basics' component={BacktoBasics} /> */}
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
