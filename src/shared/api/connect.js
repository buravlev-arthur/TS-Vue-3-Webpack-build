import { BASE_URL } from '../config'
import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: BASE_URL
})
