/**
 * axios二次封装
 */
import axios from 'axios'
import Qs from 'qs'
import { Toast } from "vant";

const http = axios.create({

})
// axios拦截器， 请求之前
axios.interceptors.request.user((config) => {
  Toast('');
  return config;
}, (err) => {
  // 请求错误
  return Promise.reject(err);
});


export default axios
