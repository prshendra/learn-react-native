import axios from "axios"

const API_KEY = 'AIzaSyDE24JSjYHh0c1PihnlpAiyLiSj89S6MmE'

export function createUser(email, password) {
  return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  })
}

export function login(email, password) {
  return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  })
}
