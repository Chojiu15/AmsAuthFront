import axios from 'axios'

export const register = newUser => {
    return axios.post('http://localhost:3000/users/register', {
        first_name : newUser.firstname,
        last_name : newUser.lastname,
        email : newUser.email,
        password : newUser.password
    })
    .then(res => alert(res.data.status))
}

export const login = user => {
    return axios.post('http://localhost:3000/users/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {
        console.log(res)
        localStorage.setItem('usertoken', res.data)
        return res.data
    }) 
    .catch(err => console.error(err))
}