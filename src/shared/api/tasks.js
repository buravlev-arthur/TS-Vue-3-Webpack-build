import apiInstance from './connect';

const URL_PATH = '/todos';

export const getTasksList = (params) => apiInstance.get(URL_PATH, { params });

export const getTaskById = (taskId) => apiInstance.get(`${URL_PATH}/${taskId}`);
