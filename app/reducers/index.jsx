import { combineReducers } from 'redux';
import TestReducer from './reducer_test.jsx';

const rootReducer = combineReducers({
    test: TestReducer
});

export default rootReducer;