import axios from 'axios'
import conf from './config'

const serverApi = axios.create({
    baseURL: `${conf.domain || "localhost"}:${conf.port || "3000"}/`,
});

export default serverApi