import axios from 'axios'


axios.defaults.baseURL = 'http://118.67.135.13:8080/api/'


axios.interceptors.response.use(resp => resp,async error => {
  if(error.response.status === 401){
    const response = await axios.post('auth/refresh',{}, {withCredentials: true});

    if(response.status === 200 || response.status === 304){
      axios.defaults.headers.common['Authorization'] = `${response.data.token}`;
      return axios(error.config);
    }
  }
  return error;
})
// import axios from "axios";
//
// axios.defaults.baseUrl = 'http://localhost:8000/api'
//
// axios.interceptors.response.use(resp => resp, async error => {
//   if(error.response.status === 401) {
//     const response = await axios.post('refresh', {}, { withCredentials: true})
//     if(response.status === 200){
//       axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
//       return axios(error.config)
//     }
//   }
// })