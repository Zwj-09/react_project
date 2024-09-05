import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

import { BASE_URL, TIME_OUT } from "./config";

class MyRequest {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("请求拦截器");
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("响应拦截器");
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "GET" });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "POST" });
  }
}

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default myRequest;
