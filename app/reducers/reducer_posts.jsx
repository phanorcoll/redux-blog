import { FETCH_POSTS } from '../actions/fetch_posts.jsx';
import { FETCH_SINGLE_POST } from '../actions/fetch_single_post.jsx';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
            // const post = action.payload.data;
            // const newState= { ...state };
            // newState[post.id] = post;
            // return newState;
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}