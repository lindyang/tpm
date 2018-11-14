import axios from 'axios';
import notify from 'element-ui/packages/notification';

// import config from '@/config';
import router from '../router';
import store from '../store';


function onResponse(response) {
  return response.data;
}


function onError(error) {
  switch (error.response.status) {
    case 401:
      notify.error('授权过期，请重新登录');
      store.commit('logIn/SET_USER', {});
      router.push({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath,
        },
      });
      break;
    case 403:
      notify.error('权限不足');
      break;
    case 404:
      notify.error('资源未找到');
      break;
    case 400:
      notify.error('错误请求');
      break;
    case 500:
      notify.error('服务器内部错误');
      break;
    default:
      notify.error('未知错误');
  }
  return Promise.reject({ type: 'http', message: error.message });
}

const http = axios.create({
  baseURL: '/api/v1',
  timeout: 2000,  // 2s
});
http.interceptors.response.use(onResponse, onError);


export default http;
