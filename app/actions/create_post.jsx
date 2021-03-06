import axios from 'axios';

export const CREATE_POST = 'create_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=vePc2018';

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}