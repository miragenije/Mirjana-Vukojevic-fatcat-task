import Axios, { AxiosRequestConfig } from 'axios';

type AuthRequestInterceptor = (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

const authRequestInterceptor: AuthRequestInterceptor = (config) => {
    config.headers.Accept = 'application/json';
    return config;
};
export const axios = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

// TODO add proper types here
axios.interceptors.request.use(authRequestInterceptor);
