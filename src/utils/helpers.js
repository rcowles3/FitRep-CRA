import axios from 'axios';

class helpers {
    sendData(data) {
        console.log("DATA", data);
        axios.post('http://localhost:4200/users/create', {
            CreateUser: data
        })
            .then(res => this.setState({ createUser: res.data })
            )
            .catch(err => console.log(err));
    }

    authData(loginInfo) {
        console.log("Login Auth: ", loginInfo);

    }

}

export default helpers;