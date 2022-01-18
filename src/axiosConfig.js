import axios from 'axios'

const Http = axios.create({baseUrl:'http://localhost:3001/'})

export default Http