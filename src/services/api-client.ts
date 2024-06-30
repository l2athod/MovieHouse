import axios, { CanceledError } from 'axios'

export default axios.create({
    baseURL: 'https://jsonfakery.com',
})

export { CanceledError }
