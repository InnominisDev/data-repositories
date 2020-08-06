import axios, { AxiosInstance } from 'axios'
import conf from './config'

interface serverOptions {
    path?: string
}

const apiConstructor = (options: serverOptions = {}): AxiosInstance => { 

    let path = options.path ? options.path + "/" : ""
    
    return axios.create({
        baseURL: `${conf.domain || "localhost"}:${conf.port || "3000"}/${path}`,
    });
}

export default apiConstructor