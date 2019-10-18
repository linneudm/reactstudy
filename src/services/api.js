import axios from 'axios';

const api = axios.create(
	{
		baseURL: 'http://167.99.227.143:8000/a',
		headers: {
			'Authorization': 'Token XXXXXX'
		}
	}
);

export default api;