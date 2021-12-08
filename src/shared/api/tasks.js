import { apiInstance } from './connect'

const URL_PATH = '/todos'

export const getTasksList = (params) => {
  return apiInstance.get(URL_PATH, { params })
}

export const getTaskById = (taskId) => {
  return apiInstance.get(`${URL_PATH}/${taskId}`)
}
