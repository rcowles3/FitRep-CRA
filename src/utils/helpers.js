import axios from 'axios';

// const localCon = 'http://localhost:4200';
// const herokuCon = 'http://localhost:3000';

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
        return axios.get('http://localhost:4200/users/authenticate', {
            loginInfo: loginInfo
        })
            .then(res => this.setState({ loginInfo: res.data }))
            .catch(err => console.log(err));

    }

}

export default helpers;