import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const url:string = process.env.PUBLIC_URL || ''

const defaultConfig:AxiosRequestConfig = {
    baseURL: url,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
}

const instance:AxiosInstance = axios.create({...defaultConfig})

export default instance
export {
    axios as defaultAxios,
    instance as axios,
}