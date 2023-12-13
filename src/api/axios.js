import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "785a7348f3c023b807e28a2136401c98",
    language: "ko-KR"
  }
})
export default instance;