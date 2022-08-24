import axios from 'axios'

const baseURL =import.meta.env.VITE_API_BASE as string
const  http = axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json',
    },
  });
export default http