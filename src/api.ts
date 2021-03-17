import axios from 'axios'

const api = axios.create({ baseURL: `http://178.154.232.196:21800/api/v1` })

export default api
