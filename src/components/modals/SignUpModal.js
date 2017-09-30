import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import helpers from '../../utils/helpers';

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
        padding: '20px',
        height: '500px',
        width: '800px'
    }, overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)'
    }
};

class SignUpModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            firstName: '',
            lastName: '',
            email: '',
            heightIn: '',
            weight: '',
            age: '',
            username: '',
            password: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userData = new helpers();
    }

    handleChange(event) {

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {

        let createAccount = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            uEmail: this.state.email,
            height_in: this.state.heightIn,
            uWeight: this.state.weight,
            uAge: this.state.age,
            user_name: this.state.username,
            pass_word: this.state.password
        };

        event.preventDefault();
        this.userData.sendData(createAccount);

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
                <button className="btn btn-primary" onClick={this.openModal}>Sign Up</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Sign Up Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Create An Account To Get Reppin!</h2>
                    <form className="my-2 my-lg-0" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-6">
                                <label>
                                    First Name:
                                        <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control mx-auto mr-sm-2" name="first_name" />
                                </label><br />
                            </div>
                            <div className="col-md-6">
                                <label>
                                    Last Name:
                                        <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} className="form-control mr-sm-2" name="last_name" />
                                </label><br />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>
                                Email:
                                        <input type="text" id="email" value={this.state.email} onChange={this.handleChange} className="col-form-label form-control mr-sm-2" name="uEmail" />
                            </label><br />
                        </div>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label>
                                    Height (in):
                                        <input type="text" id="heightIn" value={this.state.heightIn} onChange={this.handleChange} className="form-control mr-sm-2" name="height_in" />
                                </label><br />
                            </div>
                            <div className="col-md-4">
                                <label>
                                    Weight:
                                        <input type="text" id="weight" value={this.state.weight} onChange={this.handleChange} className="form-control mr-sm-2" name="uWeight" />
                                </label><br />
                            </div>
                            <div className="col-md-4">
                                <label>
                                    Age:
              <input type="text" id="age" value={this.state.age} onChange={this.handleChange} className="form-control mr-sm-2" name="uAge" />
                                </label><br />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <label>
                                    Username:
              <input type="text" id="username" value={this.state.username} onChange={this.handleChange} className="form-control mr-sm-2" name="user_name" />
                                </label><br />
                            </div>
                            <div className="col-md-6">
                                <label>
                                    Password:
              <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control mr-sm-2" name="pass_word" />
                                </label><br />
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary mr-sm-2" />
                        <button className="btn btn-primary" onClick={this.closeModal}>Close</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default SignUpModal;