import axios from 'axios'

const api = axios.create({ baseURL: `http://face.demo.greenleaf.team/api/v1` })

export default api
