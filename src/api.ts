import axios from 'axios'

// TODO: move base_url to env 
const api = axios.create({ baseURL: `http://face.demo.greenleaf.team/api/v1` })

export default api
