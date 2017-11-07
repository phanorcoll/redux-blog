import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts.jsx';

const rootReducer = combineReducers({
    posts: PostsReducer
});

export default rootReducer;