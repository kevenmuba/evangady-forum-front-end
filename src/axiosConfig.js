import axios from 'axios'
const axiosBaseUrl = axios.create({
  //Localhost
  baseURL: 'http://localhost:5005/api',

  //Render.com host
 // baseURL: 'https://evangadi-forum-1-88i0.onrender.com/api'
})

export default axiosBaseUrl