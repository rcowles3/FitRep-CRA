import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import BacktoBasics from '../BacktoBasics';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '5px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    },overlay : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)'
        
    }
};

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            username: '',
            password: '',
            fName: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {

        let loginInfo = {
            user_name: this.state.username,
            pass_word: this.state.password
        };

        // let first_name = this.state.firstName;
        event.preventDefault();
        // this.userData.authData(loginInfo);
        axios.post('http://localhost:4200/users/authenticate', {
            loginInfo: loginInfo
        })
            .then((res) => {
                // this.setState({ loginInfo: res.data })
                console.log(res.data);
                this.setState(
                    {
                        'fName': res.data.first_name
                    }
                )
                console.log(this.state.fName);
                // { this.state.fName ? <BacktoBasics value={this.state.fName} /> : null }
                this.history.pushState(null, '/back2basics');
            })
            .catch(err => console.log(err));

    }


    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#343a40';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openModal}>Login</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Login:</h2>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="text" id="username" value={this.state.username} onChange={this.handleChange} name="user_name" placeholder="Username" />
                        <input className="form-control mr-sm-2" type="password" id="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
                        <button className="btn btn-primary" onClick={this.closeModal}>Close</button>
                        {this.state.fName ? <BacktoBasics value={this.state.fName} /> : null}
                    </form>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;