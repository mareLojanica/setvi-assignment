import axios from "axios"

// needs to be saved in .env
const baseURL = "https://jsonplaceholder.typicode.com/"

const axiosInstance = axios.create({
	baseURL,
})

export default axiosInstance
