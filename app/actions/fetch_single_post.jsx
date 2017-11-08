import axios from 'axios';

export const FETCH_SINGLE_POST = 'fetch_single_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=vePc2018';

export function fetchSinglePost(id) {
    //console.log('ID--->',id)
    const request = axios.get(`${ROOT_URL}/posts/164620${API_KEY}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}