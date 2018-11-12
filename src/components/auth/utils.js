import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosBackendAuthorized = axios.create({
  baseURL: process.env.BACKEND_URI,
  headers: {
    'Authorization': 'Bearer ' + Cookies.get('accessToken')
  }
})

export const axiosBackendUnAuthorized = axios.create({
  baseURL: process.env.BACKEND_URI
})
