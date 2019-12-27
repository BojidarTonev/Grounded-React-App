import axios from 'axios'
const host = 'http://localhost:9000'

const usersService = {
    register: function(username, password, rePassword, email ) {
        axios.post(`${host}/register`, {
            username,
            password,
            rePassword,
            email
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // const data = {
        //     username,
        //     password, 
        //     rePassword, 
        //     email
        // }

        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // }

        // return fetch(`${host}/register`, options)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch((err) => console.log(err))
    }
}

export default usersService