import axios from 'axios'
import qs from 'qs'

const request = axios.create({
	timeout: 5000,
	
	transformRequest: [function (data) {
		return qs.stringify(data)
	}]
})

request.interceptors.response.use(response => {
	// Do something with response data
	return Promise.resolve(response)
}, error => {
	// Do something with response error
	return Promise.reject(error)	
})

export const Api = {
	get(url, params = {}) {
		return request.get(url, {params: params})
	},
	post(url, data = {}) {
		return request.post(url, data)
	}
 }