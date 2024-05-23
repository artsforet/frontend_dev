import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api/'

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = `${token}`;
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post('auth/refresh', {}, { withCredentials: true });

        if (response.status === 200 || response.status === 304) {
          const newToken = response.data.token;
          axios.defaults.headers.common['Authorization'] = `${newToken}`;

          // Update original request with new token
          originalRequest.headers['Authorization'] = `${newToken}`;

          processQueue(null, newToken);
          return axios(originalRequest);
        } else {
          processQueue(error, null);
          return Promise.reject(error);
        }
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);



// import axios from 'axios'
//
//
// axios.defaults.baseURL = 'http://localhost:8081/api/'
// // axios.defaults.baseURL = 'http://118.67.135.13/api/'
//
//
// axios.interceptors.response.use(resp => resp,async error => {
//   if(error.response.status === 401){
//     const response = await axios.post('auth/refresh',{}, {withCredentials: true});
//
//     if(response.status === 200 || response.status === 304){
//       axios.defaults.headers.common['Authorization'] = `${response.data.token}`;
//       return axios(error.config);
//     }
//   }
//   return error;
// })

