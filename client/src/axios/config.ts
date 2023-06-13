import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

const preRequest = (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
    return config;
}

const onResponse = (response: AxiosResponse): AxiosResponse<any> => {
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

<<<<<<< HEAD
const AxiosRequest: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000"
});

AxiosRequest.interceptors.request.use(preRequest, () => {});
AxiosRequest.interceptors.response.use(onResponse, onResponseError);

export default AxiosRequest;
=======
const PontoEntradaAxios: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000"
});

PontoEntradaAxios.interceptors.request.use(preRequest, () => {});
PontoEntradaAxios.interceptors.response.use(onResponse, onResponseError);

export default PontoEntradaAxios;
>>>>>>> a23e369fbbf222fbc8175735bf3366297f14b7ee
