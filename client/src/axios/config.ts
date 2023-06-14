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

const AxiosRequest: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000"
});

AxiosRequest.interceptors.request.use(preRequest, () => {});
AxiosRequest.interceptors.response.use(onResponse, onResponseError);

export default AxiosRequest;
